// Mock booking service for CareLoom application
// In a real application, this would connect to a database

// Global variable to store bookings (in a real app, use a proper database)
global.bookings = global.bookings || [];
const bookingStore = global.bookings;

export const createBooking = async (bookingData) => {
  try {
    // Create new booking object
    const newBooking = {
      id: `booking_${Date.now()}`, // Generate unique ID
      serviceId: bookingData.serviceId,
      service: bookingData.service,
      duration: bookingData.duration,
      location: bookingData.location,
      totalCost: bookingData.totalCost,
      date: bookingData.date || new Date().toISOString().split('T')[0],
      status: bookingData.status || 'Pending',
      caregiver: bookingData.caregiver,
      caregiverId: bookingData.caregiverId,
      userId: bookingData.userId, // Add user ID when authentication is implemented
      payment: bookingData.payment || null, // Store payment information
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Add to booking store
    bookingStore.push(newBooking);

    return {
      success: true,
      booking: newBooking
    };
  } catch (error) {
    console.error('Error creating booking:', error);
    return {
      success: false,
      error: 'Failed to create booking'
    };
  }
};

export const getBookingsByUser = async (userId) => {
  try {
    // In a real app, this would query the database for bookings by user ID
    // For now, return all bookings (in a real app, filter by userId)
    return {
      success: true,
      bookings: bookingStore
    };
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return {
      success: false,
      error: 'Failed to fetch bookings'
    };
  }
};

export const getPaymentHistoryByUser = async (userId) => {
  try {
    // In a real app, this would query the database for payment history by user ID
    // For now, return all bookings with payment information (in a real app, filter by userId)
    const bookingsWithPayments = bookingStore.filter(booking => booking.payment);

    return {
      success: true,
      payments: bookingsWithPayments.map(booking => ({
        id: booking.id,
        service: booking.service,
        amount: booking.totalCost,
        status: booking.status,
        payment: booking.payment,
        date: booking.date,
        createdAt: booking.createdAt
      }))
    };
  } catch (error) {
    console.error('Error fetching payment history:', error);
    return {
      success: false,
      error: 'Failed to fetch payment history'
    };
  }
};

export const updateBookingStatus = async (bookingId, status) => {
  try {
    const bookingIndex = bookingStore.findIndex(booking => booking.id === bookingId);
    if (bookingIndex === -1) {
      return {
        success: false,
        error: 'Booking not found'
      };
    }

    // Update the booking status
    bookingStore[bookingIndex].status = status;
    bookingStore[bookingIndex].updatedAt = new Date().toISOString();

    return {
      success: true,
      booking: bookingStore[bookingIndex]
    };
  } catch (error) {
    console.error('Error updating booking status:', error);
    return {
      success: false,
      error: 'Failed to update booking status'
    };
  }
};

export const getBookingById = async (bookingId) => {
  try {
    const booking = bookingStore.find(booking => booking.id === bookingId);
    if (!booking) {
      return {
        success: false,
        error: 'Booking not found'
      };
    }

    return {
      success: true,
      booking
    };
  } catch (error) {
    console.error('Error fetching booking:', error);
    return {
      success: false,
      error: 'Failed to fetch booking'
    };
  }
};

export const cancelBooking = async (bookingId) => {
  return await updateBookingStatus(bookingId, 'Cancelled');
};