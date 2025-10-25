"use client";

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function PayPalButton({ courseId, courseSlug, amount, onSuccess, onError }) {
  const router = useRouter();
  const [error, setError] = useState(null);

  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };

  const createOrder = async () => {
    try {
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId }),
      });

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to create order');
      }

      return data.orderId;
    } catch (error) {
      console.error('Create order error:', error);
      setError(error.message);
      if (onError) onError(error.message);
      throw error;
    }
  };

  const onApprove = async (data) => {
    try {
      // Get customer email
      const email = prompt('Please enter your email for receipt and download link:');
      
      if (!email) {
        alert('Email is required to send your download link');
        return;
      }
      
      const response = await fetch('/api/paypal/capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: data.orderID,
          courseId,
          email
        }),
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Payment capture failed');
      }

      // Redirect to course page with success parameters
      router.push(`/courses/${courseSlug}?success=true&orderId=${result.orderId}&token=${result.downloadToken}`);
      
    } catch (error) {
      console.error('Capture order error:', error);
      setError(error.message);
      if (onError) onError(error.message);
    }
  };

  const onErrorHandler = (err) => {
    console.error('PayPal error:', err);
    setError('Payment failed. Please try again.');
    if (onError) onError(err.toString());
  };

  if (error) {
    return (
      <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
        <p className="font-semibold">Payment Error</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
            height: 45
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onErrorHandler}
          onCancel={() => console.log('Payment cancelled by user')}
        />
      </PayPalScriptProvider>
      <p className="text-xs text-center text-muted-foreground">
        Secure payment powered by PayPal. You'll receive an email with your download link immediately after payment.
      </p>
    </div>
  );
}
