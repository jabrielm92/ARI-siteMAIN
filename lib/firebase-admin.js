import admin from 'firebase-admin';

let adminApp = null;

function hasAdminEnv() {
  return (
    !!process.env.FIREBASE_ADMIN_PROJECT_ID &&
    !!process.env.FIREBASE_ADMIN_CLIENT_EMAIL &&
    !!process.env.FIREBASE_ADMIN_PRIVATE_KEY
  );
}

export function initFirebaseAdmin() {
  if (adminApp || !hasAdminEnv()) return adminApp;
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n');
  adminApp = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey
    })
  });
  return adminApp;
}

export function getAdminDB() {
  const app = initFirebaseAdmin();
  if (!app) return null;
  return admin.firestore();
}
