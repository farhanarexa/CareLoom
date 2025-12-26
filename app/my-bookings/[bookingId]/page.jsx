'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { PrivateRoute } from '../../../components/PrivateRoute';

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
    rating: 5,
    payment: {
      status: 'succeeded',
      amount: 1000,
      currency: 'usd',
      createdAt: '2023-10-10'
    },
    bookingDate: '2023-10-10',
    startTime: '09:00 AM',
    endTime: '05:00 PM',
    specialInstructions: 'Child has allergies to nuts. Please ensure all snacks are nut-free.'
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
    rating: 0,
    payment: {
      status: 'succeeded',
      amount: 3360,
      currency: 'usd',
      createdAt: '2023-11-15'
    },
    bookingDate: '2023-11-15',
    startTime: '08:00 AM',
    endTime: '08:00 PM',
    specialInstructions: 'Caregiver should assist with medication at 10 AM and 6 PM daily.'
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
    rating: 0,
    payment: {
      status: 'succeeded',
      amount: 900,
      currency: 'usd',
      createdAt: '2023-12-01'
    },
    bookingDate: '2023-12-01',
    startTime: '10:00 AM',
    endTime: '06:00 PM',
    specialInstructions: 'Patient needs bed rest. Light meals only.'
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
    rating: 0,
    payment: {
      status: 'refunded',
      amount: 1400,
      currency: 'usd',
      createdAt: '2023-11-05'
    },
    bookingDate: '2023-11-05',
    startTime: '07:00 AM',
    endTime: '07:00 PM',
    specialInstructions: 'Dog needs walk twice daily and specific medication after meals.'
  }
];

function BookingDetailsPageContent({ params }) {
  const { bookingId } = params;

  // Find the booking by ID
  const booking = mockBookings.find(b => b.id === bookingId);

  if (!booking) {
    notFound();
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'succeeded':
        return 'bg-green-100 text-green-800';
      case 'refunded':
        return 'bg-blue-100 text-blue-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-[#2BAE9E]">Home</a>
            <span className="mx-2">/</span>
            <a href="/my-bookings" className="hover:text-[#2BAE9E]">My Bookings</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Booking #{booking.id}</span>
          </nav>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Booking Details */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-[#374151] mb-2">{booking.service}</h1>
                  <p className="text-gray-600">Booking ID: {booking.id}</p>
                </div>
                <span className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-lg font-medium ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#F7EFE5] rounded-xl p-6">
                  <h2 className="text-xl font-bold text-[#374151] mb-4">Booking Information</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-600">Service</p>
                      <p className="font-medium">{booking.service}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Duration</p>
                      <p className="font-medium">{booking.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Location</p>
                      <p className="font-medium">{booking.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Date</p>
                      <p className="font-medium">{booking.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Time</p>
                      <p className="font-medium">{booking.startTime} - {booking.endTime}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#EADBC8] rounded-xl p-6">
                  <h2 className="text-xl font-bold text-[#374151] mb-4">Caregiver Information</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-600">Caregiver Name</p>
                      <p className="font-medium">{booking.caregiver}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Booking Date</p>
                      <p className="font-medium">{booking.bookingDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Cost</p>
                      <p className="font-medium text-2xl text-[#2BAE9E]">${booking.totalCost}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Payment Status</p>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPaymentStatusColor(booking.payment.status)}`}>
                        {booking.payment.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {booking.specialInstructions && (
                <div className="bg-[#EADBC8] rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-bold text-[#374151] mb-4">Special Instructions</h2>
                  <p className="text-gray-700">{booking.specialInstructions}</p>
                </div>
              )}

              <div className="flex space-x-4">
                {booking.status === 'Pending' && (
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300">
                    Cancel Booking
                  </button>
                )}
                {booking.status === 'Completed' && booking.rating === 0 && (
                  <button className="bg-[#2BAE9E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5a9e7f] transition duration-300">
                    Rate Service
                  </button>
                )}
                <button className="border border-[#2BAE9E] text-[#2BAE9E] px-6 py-3 rounded-lg font-medium hover:bg-[#F7EFE5] transition duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-[#374151] mb-6">Booking Summary</h2>

              <div className="flex items-center mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                <div>
                  <h3 className="font-bold text-[#374151]">{booking.service}</h3>
                  <p className="text-gray-600 text-sm">{booking.caregiver}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{booking.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{booking.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{booking.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{booking.startTime} - {booking.endTime}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Cost:</span>
                    <span className="text-[#2BAE9E]">${booking.totalCost}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#EADBC8] rounded-lg p-4">
                <h3 className="font-bold text-[#374151] mb-2">Payment Information</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${getPaymentStatusColor(booking.payment.status).split(' ')[0]}`}>
                    {booking.payment.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium">${booking.payment.amount}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{booking.payment.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingDetailsPage({ params }) {
  return (
    <PrivateRoute>
      <BookingDetailsPageContent params={params} />
    </PrivateRoute>
  );
}