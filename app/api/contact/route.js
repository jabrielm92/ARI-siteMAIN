import { NextResponse } from 'next/server';
import { getAdminDB } from '@/lib/firebase-admin';
import { db as getDB } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const docData = {
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
      source: 'website-contact-form'
    };

    const adb = getAdminDB();
    if (adb) {
      await adb.collection('contacts').add(docData);
    } else {
      await addDoc(collection(getDB(), 'contacts'), docData);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
