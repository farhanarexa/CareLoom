'use client';

import { useState, useMemo } from 'react';

export default function FindCaregiverPage() {
  // Mock data for caregivers
  const [caregivers] = useState([
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
  ]);

  // State for filter values
  const [serviceType, setServiceType] = useState('All Services');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('Any Experience');
  const [hourlyRate, setHourlyRate] = useState('Any Rate');
  const [sortBy, setSortBy] = useState('Top Rated');

  // Function to extract years from experience string
  const getExperienceYears = (experienceStr) => {
    const match = experienceStr.match(/(\d+)/);
    return match ? parseInt(match[0]) : 0;
  };

  // Function to get min rate from rate range string
  const getMinRate = (rateStr) => {
    const match = rateStr.match(/\$(\d+)/g);
    if (match) {
      return parseInt(match[0].replace('$', ''));
    }
    return 0;
  };

  // Function to get max rate from rate range string
  const getMaxRate = (rateStr) => {
    const match = rateStr.match(/\$(\d+)/g);
    if (match && match.length > 1) {
      return parseInt(match[1].replace('$', ''));
    }
    return Infinity;
  };

  // Filter caregivers based on selected filters
  const filteredCaregivers = useMemo(() => {
    let result = [...caregivers];

    // Filter by service type
    if (serviceType !== 'All Services') {
      result = result.filter(caregiver =>
        caregiver.services && caregiver.services.includes(serviceType)
      );
    }

    // Filter by location (case insensitive partial match)
    if (location) {
      result = result.filter(caregiver =>
        caregiver.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filter by experience
    if (experience !== 'Any Experience') {
      const minExp = getExperienceYears(experience);
      result = result.filter(caregiver => {
        const caregiverExp = getExperienceYears(caregiver.experience);
        return caregiverExp >= minExp;
      });
    }

    // Filter by hourly rate
    if (hourlyRate !== 'Any Rate') {
      result = result.filter(caregiver => {
        const minRate = getMinRate(hourlyRate);
        const maxRate = getMaxRate(hourlyRate);
        return caregiver.hourlyRate >= minRate && caregiver.hourlyRate <= maxRate;
      });
    }

    // Sort caregivers
    switch (sortBy) {
      case 'Top Rated':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'Most Reviewed':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'Lowest Rate':
        result.sort((a, b) => a.hourlyRate - b.hourlyRate);
        break;
      default:
        break;
    }

    return result;
  }, [caregivers, serviceType, location, experience, hourlyRate, sortBy]);

  // Handle search button click
  const handleSearch = () => {
    // The search is already handled by the filtering logic
    // This function can be expanded if needed
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#374151] mb-6">Find Your Perfect Caregiver</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover trusted, verified caregivers who match your family&apos;s unique needs and preferences
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
              >
                <option>All Services</option>
                <option>Baby Care</option>
                <option>Elderly Care</option>
                <option>Sick Care</option>
                <option>Special Needs</option>
                <option>Respite Care</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
              >
                <option>Any Experience</option>
                <option>1+ Years</option>
                <option>3+ Years</option>
                <option>5+ Years</option>
                <option>10+ Years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate</label>
              <select
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
              >
                <option>Any Rate</option>
                <option>$15 - $20</option>
                <option>$20 - $25</option>
                <option>$25 - $30</option>
                <option>$30+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-[#2BAE9E] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#5a9e7f] transition duration-300"
              >
                Search Caregivers
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#374151]">
            {filteredCaregivers.length} Caregivers Found
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
            >
              <option>Top Rated</option>
              <option>Most Reviewed</option>
              <option>Lowest Rate</option>
            </select>
          </div>
        </div>

        {/* Caregiver Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCaregivers.length > 0 ? (
            filteredCaregivers.map((caregiver) => (
              <div key={caregiver.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4 flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-[#374151]">{caregiver.name}</h3>
                        <div className="flex items-center bg-[#F7EFE5] px-2 py-1 rounded">
                          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="font-bold text-[#374151]">{caregiver.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{caregiver.location}</p>
                      <p className="text-gray-500 text-sm mb-3">{caregiver.experience} experience</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caregiver.skills.map((skill, index) => (
                          <span key={index} className="bg-[#EADBC8] text-[#374151] text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">{caregiver.bio}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-lg font-bold text-[#2BAE9E]">${caregiver.hourlyRate}</span>
                          <span className="text-gray-600 text-sm">/hr</span>
                        </div>
                        <div className="text-sm text-gray-600">{caregiver.availability}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F7EFE5] px-6 py-4">
                  <div className="flex justify-between">
                    <a
                      href={`/caregiver/${caregiver.id}`}
                      className="text-[#2BAE9E] font-medium hover:text-[#5a9e7f]"
                    >
                      View Profile
                    </a>
                    <a
                      href={`/caregiver/${caregiver.id}`}
                      className="bg-[#2BAE9E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#5a9e7f] transition duration-300"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-bold text-[#374151] mb-2">No caregivers found</h3>
              <p className="text-gray-600">Try adjusting your filters to find more results.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-[#F7EFE5]">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-[#F7EFE5]">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-[#F7EFE5]">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-[#F7EFE5]">
              Next
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-[#EADBC8] rounded-2xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">How to Find the Right Caregiver</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2BAE9E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Search & Filter</h3>
              <p className="text-gray-700">Use our filters to find caregivers based on your specific needs, location, and preferences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5a9e7f] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Review Profiles</h3>
              <p className="text-gray-700">Check detailed profiles, qualifications, certifications, and verified reviews from other families.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6b9ac4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Connect & Meet</h3>
              <p className="text-gray-700">Contact your preferred caregiver, schedule a meeting, and ensure compatibility before starting care.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-[#374151] mb-6">Ready to Find Your Perfect Caregiver?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of families who have found trusted caregivers through CareLoom
          </p>
          <button className="bg-[#2BAE9E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a9e7f] transition duration-300">
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
}