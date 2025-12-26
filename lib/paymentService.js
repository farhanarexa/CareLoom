// Payment service for CareLoom application
// Handles payment processing with Stripe

import Stripe from 'stripe';

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (amount, currency = 'usd', description = 'CareLoom Service Payment') => {
  try {
    // Convert amount to cents (Stripe uses cents for USD)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: currency,
      description: description,
      metadata: {
        // Add any additional metadata you want to store with the payment
        integration_check: 'accept_a_payment',
      },
    });

    return {
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const confirmPayment = async (paymentIntentId) => {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    return {
      success: true,
      payment: {
        id: paymentIntent.id,
        status: paymentIntent.status,
        amount: paymentIntent.amount / 100, // Convert back from cents
        currency: paymentIntent.currency,
      },
    };
  } catch (error) {
    console.error('Error confirming payment:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const refundPayment = async (paymentIntentId, amount = null) => {
  try {
    // Create a refund
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount: amount ? Math.round(amount * 100) : null, // Convert to cents if amount is provided
    });

    return {
      success: true,
      refund: {
        id: refund.id,
        status: refund.status,
        amount: refund.amount / 100, // Convert back from cents
      },
    };
  } catch (error) {
    console.error('Error processing refund:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Mock payment processing for development without Stripe keys
export const createMockPaymentIntent = async (amount, currency = 'usd', description = 'CareLoom Service Payment') => {
  // Generate a mock client secret for development
  const mockClientSecret = `pi_mock_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`;
  const mockPaymentIntentId = `pi_mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  return {
    success: true,
    clientSecret: mockClientSecret,
    paymentIntentId: mockPaymentIntentId,
  };
};

export const processPayment = async (amount, currency = 'usd', description = 'CareLoom Service Payment') => {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.warn('Stripe secret key not found, using mock payment processing');
    return await createMockPaymentIntent(amount, currency, description);
  }
  
  return await createPaymentIntent(amount, currency, description);
};