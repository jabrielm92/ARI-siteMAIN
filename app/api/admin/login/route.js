import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Simple demo admin credentials
// In production, this should be in Firestore with hashed passwords
const DEMO_ADMIN = {
  email: 'admin@arisolutions.com',
  password: 'admin123' // In production, this would be hashed
};

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      // Generate a simple token (in production, use JWT)
      const token = crypto.randomBytes(32).toString('hex');

      return NextResponse.json({
        success: true,
        token,
        admin: {
          email: DEMO_ADMIN.email,
          role: 'admin'
        }
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { success: false, error: 'Login failed' },
      { status: 500 }
    );
  }
}