'use client';

import { useState, useEffect } from 'react';
import { PrivateRoute } from '../../components/PrivateRoute';

// Mock data for bookings
const mockBookings = [
  {
    id: '1',
    service: 'Baby Care',
    duration: '5 days',
    location: 'Dhaka, Dhanmondi',
    totalCost: 1000,
    status: 'Completed',
    date: '2023-10-15',
    caregiver: 'Sarah Johnson',
    rating: 5
  },
  {
    id: '2',
    service: 'Elderly Care',
    duration: '2 weeks',
    location: 'Dhaka, Gulshan',
    totalCost: 3360,
    status: 'Confirmed',
    date: '2023-11-20',
    caregiver: 'Michael Chen',
    rating: 0
  },
  {
    id: '3',
    service: 'Sick Care',
    duration: '3 days',
    location: 'Dhaka, Banani',
    totalCost: 900,
    status: 'Pending',
    date: '2023-12-05',
    caregiver: 'Fatima Rahman',
    rating: 0
  },
  {
    id: '4',
    service: 'Pet Care',
    duration: '1 week',
    location: 'Dhaka, Mohakhali',
    totalCost: 1400,
    status: 'Cancelled',
    date: '2023-11-10',
    caregiver: 'Robert Brown',
    rating: 0
  }
];

function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, confirmed, completed, cancelled

  useEffect(() => {
    // Simulate fetching bookings from an API
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status.toLowerCase() === filter;
  });

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(bookings.map(booking =>
        booking.id === bookingId
          ? { ...booking, status: 'Cancelled' }
          : booking
      ));
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#374151]">My Bookings</h1>
          </div>
          <div className="animate-pulse space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-[#374151] mb-4 md:mb-0">My Bookings</h1>
          <div className="flex space-x-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
            >
              <option value="all">All Bookings</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <h2 className="text-2xl font-bold text-[#374151] mb-4">No bookings found</h2>
            <p className="text-gray-600 mb-6">You don't have any bookings yet.</p>
            <a
              href="/services"
              className="inline-block bg-[#2BAE9E] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5a9e7f] transition duration-300"
            >
              Browse Services
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="md:w-2/3">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h2 className="text-xl font-bold text-[#374151]">{booking.service}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-600">Duration: <span className="text-gray-800 font-medium">{booking.duration}</span></p>
                        <p className="text-gray-600">Location: <span className="text-gray-800 font-medium">{booking.location}</span></p>
                      </div>
                      <div>
                        <p className="text-gray-600">Caregiver: <span className="text-gray-800 font-medium">{booking.caregiver}</span></p>
                        <p className="text-gray-600">Date: <span className="text-gray-800 font-medium">{booking.date}</span></p>
                      </div>
                    </div>

                    <p className="text-lg font-bold text-[#2BAE9E]">Total Cost: ${booking.totalCost}</p>
                  </div>

                  <div className="md:w-1/3 md:text-right mt-4 md:mt-0 flex flex-col items-end justify-between">
                    {booking.status === 'Pending' && (
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="mb-4 px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition duration-300"
                      >
                        Cancel Booking
                      </button>
                    )}

                    {booking.status === 'Completed' && booking.rating === 0 && (
                      <button className="px-4 py-2 bg-[#2BAE9E] text-white rounded-lg hover:bg-[#5a9e7f] transition duration-300">
                        Rate Service
                      </button>
                    )}

                    <button
                      onClick={() => {
                        // Navigate to the booking details page
                        if (typeof window !== 'undefined') {
                          window.location.href = `/my-bookings/${booking.id}`;
                        }
                      }}
                      className="px-4 py-2 border border-[#2BAE9E] text-[#2BAE9E] rounded-lg hover:bg-[#F7EFE5] transition duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Wrapper component to use PrivateRoute
export default function MyBookingsPageWrapper() {
  return (
    <PrivateRoute>
      <MyBookingsPage />
    </PrivateRoute>
  );
}