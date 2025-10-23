"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function PayPalButton({ courseId, amount, onSuccess, onError }) {
  const paypalRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const router = useRouter();

  // Load PayPal SDK
  useEffect(() => {
    if (window.paypal) {
      setSdkLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD&intent=capture`;
    script.addEventListener('load', () => {
      setSdkLoaded(true);
    });
    script.addEventListener('error', () => {
      setError('Failed to load PayPal SDK');
      setLoading(false);
    });
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Initialize PayPal Buttons when SDK is loaded and ref is ready
  useEffect(() => {
    if (!sdkLoaded || !paypalRef.current) {
      return;
    }

    initializePayPal();
  }, [sdkLoaded, courseId]);

  const initializePayPal = () => {
    if (!window.paypal) {
      setError('PayPal SDK not loaded');
      setLoading(false);
      return;
    }

    if (!paypalRef.current) {
      console.error('PayPal container ref not available');
      return;
    }

    setLoading(false);

    window.paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'paypal',
        height: 45
      },
      
      createOrder: async () => {
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
          if (onError) onError(error.message);
          throw error;
        }
      },

      onApprove: async (data) => {
        try {
          // Get customer email if available
          const email = prompt('Please enter your email for receipt and download link:');
          
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

          // Redirect to order success page
          if (onSuccess) {
            onSuccess(result);
          } else {
            router.push(`/orders/${result.orderId}?token=${result.downloadToken}`);
          }
        } catch (error) {
          console.error('Capture order error:', error);
          if (onError) onError(error.message);
        }
      },

      onError: (err) => {
        console.error('PayPal error:', err);
        setError('Payment failed. Please try again.');
        if (onError) onError(err.toString());
      },

      onCancel: () => {
        console.log('Payment cancelled by user');
      }
    }).render(paypalRef.current);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 bg-muted rounded-lg">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading payment options...</span>
      </div>
    );
  }

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
      <div ref={paypalRef} className="min-h-[120px]"></div>
      <p className="text-xs text-center text-muted-foreground">
        Secure payment powered by PayPal. You'll receive an email with your download link immediately after payment.
      </p>
    </div>
  );
}
