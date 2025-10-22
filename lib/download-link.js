import crypto from 'crypto';

const SECRET = process.env.DOWNLOAD_LINK_SECRET || 'fallback-secret-key';
const EXPIRY_HOURS = parseInt(process.env.DOWNLOAD_EXPIRY_HOURS || '72');

/**
 * Generate a secure download token
 */
export function generateDownloadToken(orderId, courseId) {
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + EXPIRY_HOURS);
  
  const payload = JSON.stringify({
    orderId,
    courseId,
    expiresAt: expiresAt.toISOString(),
    random: crypto.randomBytes(8).toString('hex')
  });
  
  const signature = crypto
    .createHmac('sha256', SECRET)
    .update(payload)
    .digest('hex');
  
  const token = Buffer.from(JSON.stringify({
    payload,
    signature
  })).toString('base64url');
  
  return { token, expiresAt };
}

/**
 * Verify and decode a download token
 */
export function verifyDownloadToken(token) {
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64url').toString('utf-8'));
    const { payload, signature } = decoded;
    
    // Verify signature
    const expectedSignature = crypto
      .createHmac('sha256', SECRET)
      .update(payload)
      .digest('hex');
    
    if (signature !== expectedSignature) {
      return { valid: false, error: 'Invalid signature' };
    }
    
    // Parse payload
    const data = JSON.parse(payload);
    
    // Check expiry
    const expiresAt = new Date(data.expiresAt);
    if (new Date() > expiresAt) {
      return { valid: false, error: 'Link expired' };
    }
    
    return {
      valid: true,
      orderId: data.orderId,
      courseId: data.courseId,
      expiresAt
    };
  } catch (error) {
    return { valid: false, error: 'Invalid token format' };
  }
}
