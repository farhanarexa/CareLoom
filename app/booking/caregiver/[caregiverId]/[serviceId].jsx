'use client';

import { useState, useEffect } from 'react';
import { notFound, redirect } from 'next/navigation';
import { PrivateRoute } from '../../../components/PrivateRoute';
import { sendBookingConfirmationEmail, generateBookingInvoiceTemplate } from '../../../lib/emailService';
import { useSession } from 'next-auth/react';
import { createBooking } from '../../../lib/bookingService';
import { processPayment } from '../../../lib/paymentService';

// Mock data for services
const services = [
  {
    id: 'baby-care',
    title: 'Baby Care',
    hourlyRate: 25,
    category: 'Childcare',
    image: '/placeholder-service.jpg'
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    hourlyRate: 28,
    category: 'Senior Care',
    image: '/placeholder-service.jpg'
  },
  {
    id: 'sick-care',
    title: 'Sick Care',
    hourlyRate: 30,
    category: 'Medical Care',
    image: '/placeholder-service.jpg'
  },
  {
    id: 'special-needs',
    title: 'Special Needs Care',
    hourlyRate: 32,
    category: 'Specialized Care',
    image: '/placeholder-service.jpg'
  },
  {
    id: 'respite-care',
    title: 'Respite Care',
    hourlyRate: 24,
    category: 'Support Care',
    image: '/placeholder-service.jpg'
  },
  {
    id: 'pet-care',
    title: 'Pet Care',
    hourlyRate: 20,
    category: 'Pet Care',
    image: '/placeholder-service.jpg'
  }
];

// Mock data for caregivers
const caregivers = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 4.9,
    reviews: 128,
    hourlyRate: 25,
    experience: "5 years",
    skills: ["Childcare", "First Aid", "Tutoring"],
    image: "/placeholder-caregiver.jpg",
    location: "Dhaka, Bangladesh",
    bio: "Passionate caregiver with extensive experience in child development and early education.",
    availability: "Available this week",
    services: ["Baby Care"]
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4.8,
    reviews: 96,
    hourlyRate: 28,
    experience: "8 years",
    skills: ["Elderly Care", "Medication Management", "Mobility Assistance"],
    image: "/placeholder-caregiver.jpg",
    location: "Dhaka, Bangladesh",
    bio: "Compassionate elderly care specialist with nursing background and extensive experience.",
    availability: "Available next week",
    services: ["Elderly Care"]
  },
  {
    id: 3,
    name: "Fatima Rahman",
    rating: 4.95,
    reviews: 210,
    hourlyRate: 22,
    experience: "6 years",
    skills: ["Baby Care", "Newborn Care", "Household Management"],
    image: "/placeholder-caregiver.jpg",
    location: "Dhaka, Bangladesh",
    bio: "Experienced nanny with expertise in infant care and early childhood development.",
    availability: "Available today",
    services: ["Baby Care"]
  },
  {
    id: 4,
    name: "David Wilson",
    rating: 4.7,
    reviews: 75,
    hourlyRate: 30,
    experience: "10 years",
    skills: ["Special Needs", "Physical Therapy", "Respite Care"],
    image: "/placeholder-caregiver.jpg",
    location: "Dhaka, Bangladesh",
    bio: "Specialized in caring for individuals with special needs and chronic conditions.",
    availability: "Available this week",
    services: ["Special Needs"]
  },
  {
    id: 5,
    name: "Ayesha Khan",
    rating: 4.85,
    reviews: 142,
    hourlyRate: 24,
    experience: "4 years",
    skills: ["Sick Care", "Companionship", "Meal Preparation"],
    image: "/placeholder-caregiver.jpg",
    location: "Dhaka, Bangladesh",
    bio: "Dedicated caregiver with medical training and experience in post-surgery care.",
    availability: "Available tomorrow",
    services: ["Sick Care"]
  },
  {
    id: 6,
    name: "Robert Brown",
    rating: 4.9,
    reviews: 189,
    hourlyRate: 26,
    experience: "7 years",
    skills: ["Pet Care", "Household Management", "Light Cleaning"],
    image: "/placeholder-caregiver.jpg",
    location: "Dhaka, Bangladesh",
    bio: "Multi-skilled caregiver who provides comprehensive household support and pet care.",
    availability: "Available this week",
    services: ["Pet Care"]
  }
];

function BookingPageContent({ params }) {
  const { caregiverId, serviceId } = params;
  const { data: session, status } = useSession();

  // Find the specific caregiver
  const caregiver = caregivers.find(c => c.id === parseInt(caregiverId));
  const service = services.find(s => s.id === serviceId);

  // If no caregiver is found, use the service data for the title and rate
  const bookingService = service || {
    id: serviceId,
    title: serviceId ? serviceId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Service',
    hourlyRate: caregiver ? caregiver.hourlyRate : 25,
    category: 'General Care',
    image: '/placeholder-service.jpg'
  };

  if (!service && !caregiver) {
    notFound();
  }

  // State for form data
  const [duration, setDuration] = useState({ value: 1, unit: 'hours' });
  const [location, setLocation] = useState({
    division: '',
    district: '',
    city: '',
    area: '',
    address: ''
  });
  const [totalCost, setTotalCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('not-started'); // not-started, processing, success, failed

  // Calculate total cost when duration changes
  useEffect(() => {
    let cost = 0;
    if (duration.unit === 'hours') {
      cost = bookingService.hourlyRate * duration.value;
    } else if (duration.unit === 'days') {
      cost = bookingService.hourlyRate * duration.value * 8; // Assuming 8 hours per day
    } else if (duration.unit === 'weeks') {
      cost = bookingService.hourlyRate * duration.value * 8 * 5; // Assuming 5 days per week
    }
    setTotalCost(cost);
  }, [duration, bookingService.hourlyRate]);

  const handleDurationChange = (e) => {
    const [value, unit] = e.target.value.split('-');
    setDuration({ value: parseInt(value), unit });
  };

  const handleLocationChange = (field, value) => {
    setLocation(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setPaymentStatus('processing');

    // Process payment first
    const paymentResult = await processPayment(totalCost, 'usd', `CareLoom Service Payment for ${bookingService.title}`);

    if (!paymentResult.success) {
      setPaymentStatus('failed');
      alert(`Payment processing failed: ${paymentResult.error || 'Please try again.'}`);
      setIsSubmitting(false);
      return;
    }

    // Create booking object with payment information
    const bookingData = {
      serviceId: bookingService.id,
      service: bookingService.title,
      duration: `${duration.value} ${duration.unit}`,
      location: `${location.city}, ${location.area}`,
      totalCost: totalCost,
      date: new Date().toISOString().split('T')[0],
      status: 'Confirmed', // Set to confirmed since payment was successful
      caregiver: caregiver ? caregiver.name : 'Any Available Caregiver',
      caregiverId: caregiver ? caregiver.id : null,
      userId: session?.user?.id || null,
      payment: {
        paymentIntentId: paymentResult.paymentIntentId,
        clientSecret: paymentResult.clientSecret,
        amount: totalCost,
        currency: 'usd',
        status: 'succeeded', // Assuming payment succeeded if we reach this point
        createdAt: new Date().toISOString()
      }
    };

    // Get user from NextAuth session
    const user = session?.user || { name: 'John Doe', email: 'john@example.com' };

    try {
      // Create booking in the system
      const result = await createBooking(bookingData);

      if (result.success) {
        // Send invoice email
        await sendBookingConfirmationEmail(bookingData, user);

        setPaymentStatus('success');
        alert('Booking confirmed successfully! Payment processed. An invoice email has been sent to your email address.');

        // Redirect to my-bookings page after a short delay
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            window.location.href = '/my-bookings';
          }
        }, 1500);
      } else {
        throw new Error(result.error || 'Failed to create booking');
      }
    } catch (error) {
      console.error('Error processing booking and payment:', error);
      setPaymentStatus('failed');
      alert(`There was an error processing your booking and payment: ${error.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2BAE9E]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-[#2BAE9E]">Home</a>
            <span className="mx-2">/</span>
            <a href="/services" className="hover:text-[#2BAE9E]">Services</a>
            <span className="mx-2">/</span>
            {caregiver ? (
              <>
                <a href={`/caregiver/${caregiver.id}`} className="hover:text-[#2BAE9E]">{caregiver.name}</a>
                <span className="mx-2">/</span>
              </>
            ) : null}
            <span className="text-gray-700">Booking</span>
          </nav>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-[#374151] mb-8">
                Book {bookingService.title} {caregiver ? `with ${caregiver.name}` : ''}
              </h1>

              {caregiver && (
                <div className="mb-6 p-4 bg-[#F7EFE5] rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                    <div>
                      <h3 className="font-bold text-[#374151]">{caregiver.name}</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">{caregiver.rating} ({caregiver.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Duration Selection */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-[#374151] mb-4">Select Duration</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                      <input
                        type="number"
                        min="1"
                        value={duration.value}
                        onChange={(e) => setDuration({...duration, value: parseInt(e.target.value)})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                      <select
                        value={`${duration.value}-${duration.unit}`}
                        onChange={handleDurationChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                      >
                        <option value="1-hours">Hours</option>
                        <option value="1-days">Days</option>
                        <option value="1-weeks">Weeks</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <div className="text-lg font-bold text-[#2BAE9E]">${bookingService.hourlyRate}/hr</div>
                    </div>
                  </div>
                </div>

                {/* Location Selection */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-[#374151] mb-4">Select Location</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Division</label>
                      <select
                        value={location.division}
                        onChange={(e) => handleLocationChange('division', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                      >
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Mymensingh">Mymensingh</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                      <select
                        value={location.district}
                        onChange={(e) => handleLocationChange('district', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                      >
                        <option value="">Select District</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Narayanganj">Narayanganj</option>
                        <option value="Tangail">Tangail</option>
                        <option value="Kishoreganj">Kishoreganj</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        value={location.city}
                        onChange={(e) => handleLocationChange('city', e.target.value)}
                        placeholder="Enter city"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                      <input
                        type="text"
                        value={location.area}
                        onChange={(e) => handleLocationChange('area', e.target.value)}
                        placeholder="Enter area"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                    <textarea
                      value={location.address}
                      onChange={(e) => handleLocationChange('address', e.target.value)}
                      placeholder="Enter full address"
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                    ></textarea>
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-[#F7EFE5] rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-bold text-[#374151] mb-4">Booking Summary</h2>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-bold text-[#374151]">{bookingService.title}</h3>
                      {caregiver && <p className="text-gray-600 text-sm">With {caregiver.name}</p>}
                      <p className="text-gray-600 text-sm">{duration.value} {duration.unit} at ${bookingService.hourlyRate}/hr</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">Total Cost</p>
                      <p className="text-2xl font-bold text-[#2BAE9E]">${totalCost.toFixed(2)}</p>
                    </div>
                  </div>

                  {paymentStatus === 'processing' && (
                    <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg flex items-center">
                      <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                      Processing payment...
                    </div>
                  )}

                  {paymentStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Payment successful!
                    </div>
                  )}

                  {paymentStatus === 'failed' && (
                    <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      Payment failed. Please try again.
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-full text-lg font-medium ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200'
                      : 'bg-[#2BAE9E] text-white hover:bg-[#5a9e7f]'
                  } transition duration-300`}
                >
                  {isSubmitting ? 'Processing Payment...' : 'Confirm Booking & Pay'}
                </button>
              </form>
            </div>
          </div>

          {/* Booking Details Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-[#374151] mb-6">Booking Details</h2>

              {caregiver ? (
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                  <div>
                    <h3 className="font-bold text-[#374151]">{caregiver.name}</h3>
                    <p className="text-gray-600 text-sm">{bookingService.title}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                  <div>
                    <h3 className="font-bold text-[#374151]">{bookingService.title}</h3>
                    <p className="text-gray-600 text-sm">{bookingService.category}</p>
                  </div>
                </div>
              )}

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{duration.value} {duration.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hourly Rate:</span>
                  <span className="font-medium">${bookingService.hourlyRate}/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{location.city || 'Not selected'}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Cost:</span>
                    <span className="text-[#2BAE9E]">${totalCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#EADBC8] rounded-lg p-4">
                <h3 className="font-bold text-[#374151] mb-2">What to expect:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Verified caregiver will contact you</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 support during service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Money-back guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage({ params }) {
  return (
    <PrivateRoute>
      <BookingPageContent params={params} />
    </PrivateRoute>
  );
}