'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { PrivateRoute } from '../../../components/PrivateRoute';
import { sendBookingConfirmationEmail, generateBookingInvoiceTemplate } from '../../../lib/emailService';
import { useSession } from 'next-auth/react';

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

function BookingPageContent({ params }) {
  const service = services.find(s => s.id === params.serviceId);
  const { data: session, status } = useSession();

  if (!service) {
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

  // Calculate total cost when duration changes
  useEffect(() => {
    let cost = 0;
    if (duration.unit === 'hours') {
      cost = service.hourlyRate * duration.value;
    } else if (duration.unit === 'days') {
      cost = service.hourlyRate * duration.value * 8; // Assuming 8 hours per day
    } else if (duration.unit === 'weeks') {
      cost = service.hourlyRate * duration.value * 8 * 5; // Assuming 5 days per week
    }
    setTotalCost(cost);
  }, [duration, service.hourlyRate]);

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

    // Create booking object
    const bookingDetails = {
      service: service.title,
      duration: `${duration.value} ${duration.unit}`,
      location: `${location.city}, ${location.area}`,
      totalCost: totalCost,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      serviceId: service.id
    };

    // Get user from NextAuth session
    const user = session?.user || { name: 'John Doe', email: 'john@example.com' };

    try {
      // Simulate booking submission
      // In a real app, this would make an API call to save the booking
      setTimeout(async () => {
        // Send confirmation email
        await sendBookingConfirmationEmail(bookingDetails, user);

        alert('Booking submitted successfully! Status: Pending. A confirmation email has been sent to your email address.');
        setIsSubmitting(false);

        // Here you would typically redirect to the my-bookings page
        // router.push('/my-bookings');
      }, 1500);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error submitting your booking. Please try again.');
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
            <a href={`/services/${service.id}`} className="hover:text-[#2BAE9E]">{service.title}</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Booking</span>
          </nav>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-[#374151] mb-8">Book {service.title}</h1>

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
                      <div className="text-lg font-bold text-[#2BAE9E]">${service.hourlyRate}/hr</div>
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
                      <h3 className="font-bold text-[#374151]">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{duration.value} {duration.unit} at ${service.hourlyRate}/hr</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">Total Cost</p>
                      <p className="text-2xl font-bold text-[#2BAE9E]">${totalCost.toFixed(2)}</p>
                    </div>
                  </div>
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
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          </div>

          {/* Booking Details Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-[#374151] mb-6">Booking Details</h2>

              <div className="flex items-center mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                <div>
                  <h3 className="font-bold text-[#374151]">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.category}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{duration.value} {duration.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hourly Rate:</span>
                  <span className="font-medium">${service.hourlyRate}/hr</span>
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