import { NextResponse } from 'next/server';
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
import { getDB } from '@/lib/firebase';
import { db as getDB } from '@/lib/firebase';

// Next.js 14 App Router route segment config
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';


export async function GET(request) {
  try {
    // Verify admin token
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const db = getDB();
    const clientsSnapshot = await getDocs(
      query(collection(db, 'clients'), orderBy('createdAt', 'desc'))
    );

    const clients = [];
    clientsSnapshot.forEach(doc => {
      clients.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return NextResponse.json({
      success: true,
      clients
    });
  } catch (error) {
    console.error('Clients fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch clients' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Verify admin token
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const clientData = await request.json();
    const db = getDB();

    // Add client to Firestore
    const docRef = await addDoc(collection(db, 'clients'), {
      ...clientData,
      status: 'active',
      createdAt: new Date().toISOString(),
      hasAIReceptionist: false,
      hasBookingAccelerator: false,
      appointmentsThisMonth: 0,
      monthlyRevenue: 0
    });

    return NextResponse.json({
      success: true,
      clientId: docRef.id
    });
  } catch (error) {
    console.error('Client creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create client' },
      { status: 500 }
    );
  }
}