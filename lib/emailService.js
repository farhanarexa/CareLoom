// Mock email service for CareLoom application
// In a real application, this would connect to an email service like SendGrid, Nodemailer, etc.

export const sendBookingConfirmationEmail = async (bookingDetails, user) => {
  // Generate the invoice template
  const emailTemplate = generateBookingInvoiceTemplate(bookingDetails, user);

  // Simulate sending an email
  console.log('Sending booking confirmation email to:', user.email);
  console.log('Booking details:', bookingDetails);
  console.log('Email template:', emailTemplate);

  // In a real app, this would make an API call to an email service
  // For now, we'll just return a resolved promise
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Booking confirmation email sent successfully!');
      resolve({ success: true, message: 'Email sent successfully' });
    }, 1000);
  });
};

export const sendBookingCancellationEmail = async (bookingDetails, user) => {
  // Simulate sending an email
  console.log('Sending booking cancellation email to:', user.email);
  console.log('Booking details:', bookingDetails);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Booking cancellation email sent successfully!');
      resolve({ success: true, message: 'Cancellation email sent successfully' });
    }, 1000);
  });
};

export const sendBookingUpdateEmail = async (bookingDetails, user, updateType) => {
  // Simulate sending an email
  console.log(`Sending booking ${updateType} email to:`, user.email);
  console.log('Booking details:', bookingDetails);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Booking ${updateType} email sent successfully!`);
      resolve({ success: true, message: `${updateType} email sent successfully` });
    }, 1000);
  });
};

// Email template functions
export const generateBookingConfirmationTemplate = (bookingDetails, user) => {
  const { service, duration, location, totalCost, date, caregiver } = bookingDetails;
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2BAE9E;">Booking Confirmation</h1>
      <p>Dear ${user.name},</p>
      <p>Your booking for ${service} has been confirmed!</p>

      <div style="background-color: #F7EFE5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #374151; margin-top: 0;">Booking Details</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Total Cost:</strong> $${totalCost}</p>
        <p><strong>Date:</strong> ${date}</p>
        ${caregiver ? `<p><strong>Caregiver:</strong> ${caregiver}</p>` : ''}
      </div>

      <p>Our team will contact you shortly to finalize the arrangements.</p>
      <p>Thank you for choosing CareLoom!</p>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #EADBC8;">
        <p style="color: #374151; font-size: 14px;">CareLoom - Connecting families with trusted caregivers</p>
        <p style="color: #374151; font-size: 14px;">123 Care Street, Health City, Dhaka, Bangladesh</p>
      </div>
    </div>
  `;
};

export const generateBookingInvoiceTemplate = (bookingDetails, user) => {
  const { service, duration, location, totalCost, date, caregiver } = bookingDetails;
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2BAE9E;">Booking Invoice</h1>
      <p>Dear ${user.name},</p>
      <p>Thank you for your booking with CareLoom. Please find your invoice details below:</p>

      <div style="background-color: #F7EFE5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #374151; margin-top: 0;">Invoice Details</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Total Amount:</strong> $${totalCost}</p>
        ${caregiver ? `<p><strong>Caregiver:</strong> ${caregiver}</p>` : ''}
      </div>

      <p>Payment has been processed successfully.</p>
      <p>If you have any questions, please contact our support team.</p>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #EADBC8;">
        <p style="color: #374151; font-size: 14px;">CareLoom - Connecting families with trusted caregivers</p>
        <p style="color: #374151; font-size: 14px;">123 Care Street, Health City, Dhaka, Bangladesh</p>
      </div>
    </div>
  `;
};