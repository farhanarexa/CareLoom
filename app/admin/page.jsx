'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { PrivateRoute } from '../../components/PrivateRoute';

// Mock data for admin dashboard
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
    user: 'John Doe'
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
    user: 'Jane Smith'
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
    user: 'Bob Johnson'
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
    user: 'Alice Williams'
  }
];

const mockCaregivers = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 4.9,
    reviews: 128,
    services: ["Baby Care"],
    status: 'Active',
    joinDate: '2023-01-15'
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4.8,
    reviews: 96,
    services: ["Elderly Care"],
    status: 'Active',
    joinDate: '2023-02-20'
  },
  {
    id: 3,
    name: "Fatima Rahman",
    rating: 4.95,
    reviews: 210,
    services: ["Baby Care"],
    status: 'Inactive',
    joinDate: '2023-03-10'
  }
];

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2023-01-10', bookings: 5 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2023-02-15', bookings: 3 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', joinDate: '2023-03-20', bookings: 7 },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', joinDate: '2023-04-05', bookings: 2 }
];

function AdminDashboardContent() {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeBookings: 0,
    pendingBookings: 0
  });
  const [bookings, setBookings] = useState([]);
  const [caregivers, setCaregivers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Check if user is admin (in a real app, this would be checked server-side)
    if (session?.user?.email !== 'admin@careloom.com') {
      alert('Access denied. Admin access required.');
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
      return;
    }

    // Simulate loading data
    setBookings(mockBookings);
    setCaregivers(mockCaregivers);
    setUsers(mockUsers);

    // Calculate stats
    const totalBookings = mockBookings.length;
    const totalRevenue = mockBookings.reduce((sum, booking) => sum + booking.totalCost, 0);
    const activeBookings = mockBookings.filter(b => b.status === 'Confirmed' || b.status === 'Completed').length;
    const pendingBookings = mockBookings.filter(b => b.status === 'Pending').length;

    setStats({
      totalBookings,
      totalRevenue,
      activeBookings,
      pendingBookings
    });
  }, [session]);

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
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#2BAE9E]">CareLoom Admin Dashboard</h1>
          <div className="flex items-center">
            <span className="text-gray-700 mr-4">Welcome, Admin</span>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = '/';
                }
              }}
              className="bg-[#2BAE9E] text-white px-4 py-2 rounded-lg hover:bg-[#5a9e7f] transition duration-300"
            >
              Exit Admin
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-500 mb-2">Total Bookings</h3>
            <p className="text-3xl font-bold text-[#374151]">{stats.totalBookings}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-500 mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-[#374151]">${stats.totalRevenue}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-500 mb-2">Active Bookings</h3>
            <p className="text-3xl font-bold text-[#374151]">{stats.activeBookings}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-500 mb-2">Pending Bookings</h3>
            <p className="text-3xl font-bold text-[#374151]">{stats.pendingBookings}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#374151]">Recent Bookings</h2>
                <button className="text-[#2BAE9E] hover:text-[#5a9e7f] font-medium">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caregiver</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.service}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.user}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.caregiver}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${booking.totalCost}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-[#374151] mb-6">Quick Stats</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Total Users</p>
                  <p className="text-2xl font-bold text-[#374151]">{users.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Caregivers</p>
                  <p className="text-2xl font-bold text-[#374151]">{caregivers.filter(c => c.status === 'Active').length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Caregivers</p>
                  <p className="text-2xl font-bold text-[#374151]">{caregivers.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg. Rating</p>
                  <p className="text-2xl font-bold text-[#374151]">4.8</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#374151] mb-6">Recent Users</h2>
              <div className="space-y-4">
                {users.slice(0, 3).map(user => (
                  <div key={user.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <span className="text-sm text-gray-500">{user.bookings} bookings</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Caregivers Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#374151]">Caregivers</h2>
            <button className="bg-[#2BAE9E] text-white px-4 py-2 rounded-lg hover:bg-[#5a9e7f] transition duration-300">
              Add Caregiver
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviews</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {caregivers.map((caregiver) => (
                  <tr key={caregiver.id}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{caregiver.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{caregiver.services.join(', ')}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{caregiver.rating}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{caregiver.reviews}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(caregiver.status)}`}>
                        {caregiver.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <PrivateRoute>
      <AdminDashboardContent />
    </PrivateRoute>
  );
}