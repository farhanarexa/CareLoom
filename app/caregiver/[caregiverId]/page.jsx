'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function CaregiverProfilePage({ params }) {
  const router = useRouter();
  const { caregiverId } = use(params);

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
      bio: "Passionate caregiver with extensive experience in child development and early education. I believe in creating a nurturing environment for children to thrive and grow.",
      availability: "Available this week",
      services: ["Baby Care"],
      certifications: ["Child Development", "First Aid Certified", "CPR Certified"],
      languages: ["English", "Bengali"],
      education: "Bachelor's in Early Childhood Education",
      availabilitySchedule: [
        { day: "Monday", time: "9:00 AM - 6:00 PM" },
        { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
        { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
        { day: "Thursday", time: "9:00 AM - 6:00 PM" },
        { day: "Friday", time: "9:00 AM - 6:00 PM" }
      ]
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
      bio: "Compassionate elderly care specialist with nursing background and extensive experience. I provide personalized care to ensure the comfort and well-being of my clients.",
      availability: "Available next week",
      services: ["Elderly Care"],
      certifications: ["Nursing Certificate", "Elderly Care Specialist"],
      languages: ["English", "Bengali"],
      education: "Nursing Diploma",
      availabilitySchedule: [
        { day: "Monday", time: "8:00 AM - 8:00 PM" },
        { day: "Tuesday", time: "8:00 AM - 8:00 PM" },
        { day: "Wednesday", time: "8:00 AM - 8:00 PM" },
        { day: "Thursday", time: "8:00 AM - 8:00 PM" },
        { day: "Friday", time: "8:00 AM - 8:00 PM" }
      ]
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
      bio: "Experienced nanny with expertise in infant care and early childhood development. I provide gentle, nurturing care for babies and young children.",
      availability: "Available today",
      services: ["Baby Care"],
      certifications: ["Infant Care Specialist", "Newborn Care Certified"],
      languages: ["English", "Bengali"],
      education: "Childcare Certificate",
      availabilitySchedule: [
        { day: "Daily", time: "Flexible" }
      ]
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
      bio: "Specialized in caring for individuals with special needs and chronic conditions. I have extensive experience in creating personalized care plans.",
      availability: "Available this week",
      services: ["Special Needs"],
      certifications: ["Special Needs Care", "Physical Therapy Assistant"],
      languages: ["English", "Bengali"],
      education: "Physical Therapy Assistant Degree",
      availabilitySchedule: [
        { day: "Monday", time: "7:00 AM - 9:00 PM" },
        { day: "Tuesday", time: "7:00 AM - 9:00 PM" },
        { day: "Wednesday", time: "7:00 AM - 9:00 PM" },
        { day: "Thursday", time: "7:00 AM - 9:00 PM" },
        { day: "Friday", time: "7:00 AM - 9:00 PM" },
        { day: "Saturday", time: "8:00 AM - 6:00 PM" }
      ]
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
      bio: "Dedicated caregiver with medical training and experience in post-surgery care. I provide compassionate care during recovery periods.",
      availability: "Available tomorrow",
      services: ["Sick Care"],
      certifications: ["Medical Assistant", "Sick Care Certified"],
      languages: ["English", "Bengali"],
      education: "Medical Assistant Certificate",
      availabilitySchedule: [
        { day: "Monday", time: "10:00 AM - 7:00 PM" },
        { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
        { day: "Wednesday", time: "10:00 AM - 7:00 PM" },
        { day: "Thursday", time: "10:00 AM - 7:00 PM" },
        { day: "Friday", time: "10:00 AM - 7:00 PM" },
        { day: "Saturday", time: "10:00 AM - 4:00 PM" }
      ]
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
      bio: "Multi-skilled caregiver who provides comprehensive household support and pet care. I ensure a comfortable and clean environment for my clients.",
      availability: "Available this week",
      services: ["Pet Care"],
      certifications: ["Pet Care Specialist", "Household Management"],
      languages: ["English", "Bengali"],
      education: "Home Economics Diploma",
      availabilitySchedule: [
        { day: "Monday", time: "8:00 AM - 6:00 PM" },
        { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
        { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
        { day: "Thursday", time: "8:00 AM - 6:00 PM" },
        { day: "Friday", time: "8:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 4:00 PM" }
      ]
    }
  ]);

  const caregiver = caregivers.find(c => c.id === parseInt(caregiverId));

  if (!caregiver) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#374151] mb-4">Caregiver Not Found</h1>
          <button
            onClick={() => router.push('/find-caregiver')}
            className="bg-[#2BAE9E] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#5a9e7f] transition duration-300"
          >
            Back to Caregivers
          </button>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    // Redirect to booking page for this specific caregiver and service type
    const serviceType = caregiver.services[0]?.toLowerCase().replace(/\s+/g, '-');
    router.push(`/booking/caregiver/${caregiver.id}/${serviceType}`);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-[#2BAE9E]">Home</a>
            <span className="mx-2">/</span>
            <a href="/find-caregiver" className="hover:text-[#2BAE9E]">Find Caregiver</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{caregiver.name}</span>
          </nav>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#2BAE9E] to-[#5a9e7f] p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mb-4 md:mb-0 md:mr-6" />
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{caregiver.name}</h1>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold">{caregiver.rating}</span>
                  <span className="mx-2">•</span>
                  <span>{caregiver.reviews} reviews</span>
                </div>
                <p className="text-[#F7EFE5]">{caregiver.location}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-auto flex flex-col items-center md:items-end">
                <div className="text-2xl font-bold">${caregiver.hourlyRate}<span className="text-lg font-normal text-[#F7EFE5]">/hr</span></div>
                <div className="mt-2 px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm">
                  {caregiver.availability}
                </div>
                <button
                  onClick={handleBookNow}
                  className="mt-4 bg-white text-[#2BAE9E] px-6 py-2 rounded-full font-bold hover:bg-[#F7EFE5] transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="md:col-span-2">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#374151] mb-4">About {caregiver.name.split(' ')[0]}</h2>
                  <p className="text-gray-700 leading-relaxed">{caregiver.bio}</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#374151] mb-4">Skills & Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {caregiver.skills.map((skill, index) => (
                      <span key={index} className="bg-[#EADBC8] text-[#374151] px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#374151] mb-4">Services Offered</h2>
                  <div className="flex flex-wrap gap-2">
                    {caregiver.services.map((service, index) => (
                      <span key={index} className="bg-[#2BAE9E] text-white px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#374151] mb-4">Availability</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-[#374151]">Day</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-[#374151]">Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {caregiver.availabilitySchedule.map((schedule, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 text-sm text-gray-700">{schedule.day}</td>
                            <td className="px-4 py-2 text-sm text-gray-700">{schedule.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#374151] mb-4">Reviews</h2>
                  <div className="space-y-4">
                    <div className="bg-[#F7EFE5] p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="font-bold">5.0</span>
                        </div>
                        <span className="mx-2">•</span>
                        <span className="text-gray-600">John D.</span>
                      </div>
                      <p className="text-gray-700">"Excellent caregiver! Very professional and caring. My child loved her."</p>
                    </div>
                    <div className="bg-[#F7EFE5] p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="font-bold">4.5</span>
                        </div>
                        <span className="mx-2">•</span>
                        <span className="text-gray-600">Sarah M.</span>
                      </div>
                      <p className="text-gray-700">"Very reliable and experienced. Took great care of my elderly mother."</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div>
                <div className="bg-[#F7EFE5] rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-[#374151] mb-4">Caregiver Details</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-bold text-[#374151] mb-1">Experience</h4>
                      <p className="text-gray-700">{caregiver.experience}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#374151] mb-1">Education</h4>
                      <p className="text-gray-700">{caregiver.education}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#374151] mb-1">Certifications</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {caregiver.certifications.map((cert, index) => (
                          <li key={index}>{cert}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#374151] mb-1">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {caregiver.languages.map((lang, index) => (
                          <span key={index} className="bg-white px-2 py-1 rounded text-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleBookNow}
                    className="w-full bg-[#2BAE9E] text-white py-3 rounded-full font-bold hover:bg-[#5a9e7f] transition duration-300 mb-4"
                  >
                    Book {caregiver.name.split(' ')[0]}
                  </button>

                  <button
                    onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full border border-[#2BAE9E] text-[#2BAE9E] py-3 rounded-full font-bold hover:bg-[#2BAE9E] hover:text-white transition duration-300"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact-section" className="mt-12 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#374151] mb-6">Contact {caregiver.name}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent">
                    <option>Select a service</option>
                    {caregiver.services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                    placeholder="Tell {caregiver.name} about your needs, preferred dates, and any special requirements..."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-[#2BAE9E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#5a9e7f] transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}