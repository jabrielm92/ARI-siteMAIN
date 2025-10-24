import { NextResponse } from 'next/server';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { getDB } from '@/lib/firebase';

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
    
    // Get all clients
    const clientsSnapshot = await getDocs(collection(db, 'clients'));
    const totalClients = clientsSnapshot.size;

    // Count active AI receptionists
    let activeReceptionists = 0;
    let appointmentsBooked = 0;
    let monthlyRevenue = 0;

    clientsSnapshot.forEach(doc => {
      const client = doc.data();
      if (client.hasAIReceptionist && client.status === 'active') {
        activeReceptionists++;
      }
      if (client.appointmentsThisMonth) {
        appointmentsBooked += client.appointmentsThisMonth;
      }
      if (client.monthlyRevenue) {
        monthlyRevenue += client.monthlyRevenue;
      }
    });

    return NextResponse.json({
      success: true,
      stats: {
        totalClients,
        activeReceptionists,
        appointmentsBooked,
        monthlyRevenue
      }
    });
  } catch (error) {
    console.error('Stats fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}