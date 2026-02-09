/**
 * ============================================
 * PMpathshala Payment Server
 * ============================================
 * 
 * This server handles PhonePe payments for the PMpathshala website.
 * 
 * YOUR CREDENTIALS GO IN: backend/.env file
 * 
 */

const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config();

const app = express();

// ============================================
// CONFIGURATION
// ============================================

const config = {
  // Your PhonePe Credentials (from .env file)
  merchantId: process.env.PHONEPE_MERCHANT_ID,
  clientId: process.env.PHONEPE_CLIENT_ID,
  clientSecret: process.env.PHONEPE_CLIENT_SECRET,
  
  // URLs
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  backendUrl: process.env.BACKEND_URL || 'http://localhost:5001',
  
  // PhonePe API URLs
  phonepeUrl: 'https://api.phonepe.com/apis/hermes/pg/v1/pay',
  phonepeSandboxUrl: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
  
  // Set to true for testing, false for real payments
  useSandbox: process.env.USE_SANDBOX === 'true'
};

// ============================================
// MIDDLEWARE
// ============================================

// Allow all origins during development
app.use(cors({
  origin: '*',  // Allow all origins (change to specific URL in production)
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.path}`);
  next();
});

// ============================================
// COURSE PRICES
// ============================================

const coursePrices = {
  'basic-pm': 20000,      // ₹20,000
  'ai-pm': 25000,         // ₹25,000
  'bundle': 35000         // ₹35,000
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Generate unique order ID
function generateOrderId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `PMP${timestamp}${random}`;
}

// Create PhonePe checksum
function createChecksum(payload, saltKey, saltIndex) {
  const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
  const string = base64Payload + '/pg/v1/pay' + saltKey;
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  return sha256 + '###' + saltIndex;
}

// ============================================
// API ROUTES
// ============================================

/**
 * Health Check
 * GET /api/health
 */
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'PMpathshala Payment Server is running',
    mode: config.useSandbox ? 'SANDBOX (Testing)' : 'PRODUCTION'
  });
});

/**
 * Simple Test Endpoint
 * GET /
 */
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 PMpathshala Payment Server is running!',
    endpoints: {
      health: '/api/health',
      initiate: 'POST /api/payment/initiate'
    }
  });
});

/**
 * Initiate Payment (Main endpoint used by frontend)
 * POST /api/payment/initiate
 * 
 * Body: { courseId, name, email, phone }
 */
app.post('/api/payment/initiate', async (req, res) => {
  try {
    const { courseId, name, email, phone } = req.body;
    
    console.log('📩 Payment initiation request:', { courseId, name, email, phone });
    
    // Validate required fields
    if (!name || !email || !phone || !courseId) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, phone, courseId'
      });
    }
    
    // Get course price
    const amount = coursePrices[courseId];
    if (!amount) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course selected'
      });
    }
    
    // Generate order ID
    const orderId = generateOrderId();
    
    console.log('📦 Order created:', { orderId, courseId, amount });
    
    // ================================================
    // OPTION 1: PhonePe Payment Gateway (Production)
    // ================================================
    // Uncomment the PhonePe code below when you have valid credentials
    // For now, we'll use a simple redirect for testing
    
    /*
    const amountInPaise = amount * 100;
    
    const payload = {
      merchantId: config.merchantId,
      merchantTransactionId: orderId,
      merchantUserId: `USER_${phone}`,
      amount: amountInPaise,
      redirectUrl: `${config.backendUrl}/api/payment-callback?orderId=${orderId}`,
      redirectMode: 'POST',
      callbackUrl: `${config.backendUrl}/api/payment-webhook`,
      mobileNumber: phone,
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };
    
    const saltKey = config.clientSecret;
    const saltIndex = 1;
    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const checksum = createChecksum(payload, saltKey, saltIndex);
    
    const phonepeUrl = config.useSandbox ? config.phonepeSandboxUrl : config.phonepeUrl;
    
    const response = await fetch(phonepeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      body: JSON.stringify({
        request: base64Payload
      })
    });
    
    const data = await response.json();
    
    if (data.success && data.data?.instrumentResponse?.redirectInfo?.url) {
      return res.json({
        success: true,
        data: {
          orderId: orderId,
          paymentUrl: data.data.instrumentResponse.redirectInfo.url,
          amount: amount
        }
      });
    } else {
      throw new Error(data.message || 'PhonePe API error');
    }
    */
    
    // ================================================
    // OPTION 2: Simple Payment Link Redirect (For Testing)
    // ================================================
    // This creates a simple payment page for testing
    // Replace with your actual PhonePe payment link or UPI link
    
    // For testing, redirect to a success page
    // In production, replace this with actual PhonePe payment URL
    
    const testPaymentUrl = `${config.frontendUrl}?payment=test&orderId=${orderId}&amount=${amount}`;
    
    // If you have a PhonePe payment link, use it here:
    // const paymentUrl = 'https://phon.pe/your-payment-link';
    
    return res.json({
      success: true,
      data: {
        orderId: orderId,
        paymentUrl: testPaymentUrl,  // Replace with actual payment URL
        amount: amount
      }
    });
    
  } catch (error) {
    console.error('❌ Payment Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: error.message
    });
  }
});

/**
 * Create Payment (Alternative endpoint)
 * POST /api/create-payment
 * 
 * Body: { name, email, phone, course }
 */
app.post('/api/create-payment', async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, phone, course'
      });
    }
    
    // Get course price
    const amount = coursePrices[course];
    if (!amount) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course selected'
      });
    }
    
    // Generate order ID
    const orderId = generateOrderId();
    
    // Amount in paise (PhonePe requires amount in paise)
    const amountInPaise = amount * 100;
    
    // Create payload for PhonePe
    const payload = {
      merchantId: config.merchantId,
      merchantTransactionId: orderId,
      merchantUserId: `USER_${phone}`,
      amount: amountInPaise,
      redirectUrl: `${config.backendUrl}/api/payment-callback?orderId=${orderId}`,
      redirectMode: 'POST',
      callbackUrl: `${config.backendUrl}/api/payment-webhook`,
      mobileNumber: phone,
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };
    
    // For production with Client ID and Client Secret
    // You'll need to get an access token first
    // For now, using the standard Salt Key method which is more common
    
    // Create checksum (using client secret as salt key)
    const saltKey = config.clientSecret;
    const saltIndex = 1;
    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const checksum = createChecksum(payload, saltKey, saltIndex);
    
    // Make request to PhonePe
    const phonepeUrl = config.useSandbox ? config.phonepeSandboxUrl : config.phonepeUrl;
    
    const response = await fetch(phonepeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      body: JSON.stringify({
        request: base64Payload
      })
    });
    
    const data = await response.json();
    
    if (data.success && data.data?.instrumentResponse?.redirectInfo?.url) {
      // Save order details (in production, save to database)
      console.log('✅ Order created:', {
        orderId,
        name,
        email,
        phone,
        course,
        amount
      });
      
      return res.json({
        success: true,
        orderId: orderId,
        paymentUrl: data.data.instrumentResponse.redirectInfo.url,
        amount: amount
      });
    } else {
      console.error('PhonePe Error:', data);
      return res.status(400).json({
        success: false,
        message: data.message || 'Failed to create payment',
        error: data
      });
    }
    
  } catch (error) {
    console.error('Payment Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: error.message
    });
  }
});

/**
 * Payment Callback (Redirect from PhonePe)
 * POST /api/payment-callback
 */
app.post('/api/payment-callback', (req, res) => {
  const { orderId } = req.query;
  const { code, merchantId, transactionId } = req.body;
  
  console.log('Payment Callback:', { orderId, code, transactionId });
  
  // Check payment status
  if (code === 'PAYMENT_SUCCESS') {
    // Redirect to success page
    res.redirect(`${config.frontendUrl}/payment-success?orderId=${orderId}`);
  } else {
    // Redirect to failure page
    res.redirect(`${config.frontendUrl}/payment-failed?orderId=${orderId}`);
  }
});

/**
 * Payment Webhook (Server-to-Server notification)
 * POST /api/payment-webhook
 */
app.post('/api/payment-webhook', (req, res) => {
  console.log('Payment Webhook received:', req.body);
  
  // TODO: Verify the webhook signature
  // TODO: Update order status in database
  // TODO: Send confirmation email to student
  
  res.json({ status: 'ok' });
});

/**
 * Check Payment Status
 * GET /api/payment-status/:orderId
 */
app.get('/api/payment-status/:orderId', async (req, res) => {
  const { orderId } = req.params;
  
  // TODO: Check status from database or PhonePe API
  
  res.json({
    orderId,
    status: 'pending',
    message: 'Check PhonePe dashboard for actual status'
  });
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log('');
  console.log('============================================');
  console.log('   PMpathshala Payment Server Started!');
  console.log('============================================');
  console.log('');
  console.log(`✅ Server running on: http://localhost:${PORT}`);
  console.log(`✅ Mode: ${config.useSandbox ? 'SANDBOX (Testing)' : 'PRODUCTION'}`);
  console.log('');
  console.log('📋 Credentials Status:');
  console.log(`   Merchant ID: ${config.merchantId ? '✅ Set' : '❌ Missing'}`);
  console.log(`   Client ID: ${config.clientId ? '✅ Set' : '❌ Missing'}`);
  console.log(`   Client Secret: ${config.clientSecret ? '✅ Set' : '❌ Missing'}`);
  console.log('');
  console.log('🔗 API Endpoints:');
  console.log(`   Health Check: http://localhost:${PORT}/api/health`);
  console.log(`   Create Payment: POST http://localhost:${PORT}/api/create-payment`);
  console.log('');
  console.log('============================================');
  console.log('');
});
