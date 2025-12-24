import { notFound } from 'next/navigation';

// Mock data for services
const services = [
  {
    id: 'baby-care',
    title: 'Baby Care',
    description: 'Professional and loving babysitters for infants and young children. Safe, engaging, and nurturing care for your little ones.',
    features: [
      'Trained in child development and safety',
      'First aid and CPR certified',
      'Thoroughly background checked',
      'Engaging activities and age-appropriate care'
    ],
    hourlyRate: 25,
    image: '/placeholder-service.jpg',
    category: 'Childcare',
    availability: 'Available 24/7',
    rating: 4.9,
    reviews: 128
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    description: 'Compassionate caregivers for seniors who need assistance with daily activities, medication management, and companionship.',
    features: [
      'Specialized in senior care and mobility assistance',
      'Medication management and reminders',
      'Personal hygiene and grooming assistance',
      'Companionship and emotional support'
    ],
    hourlyRate: 28,
    image: '/placeholder-service.jpg',
    category: 'Senior Care',
    availability: 'Available 24/7',
    rating: 4.8,
    reviews: 96
  },
  {
    id: 'sick-care',
    title: 'Sick Care',
    description: 'Dedicated care for individuals recovering from illness or managing chronic conditions with professional medical support.',
    features: [
      'Medical training and certification',
      'Compassionate support during recovery',
      '24/7 availability for critical care',
      'Specialized care for chronic conditions'
    ],
    hourlyRate: 30,
    image: '/placeholder-service.jpg',
    category: 'Medical Care',
    availability: 'Available 24/7',
    rating: 4.85,
    reviews: 142
  },
  {
    id: 'special-needs',
    title: 'Special Needs Care',
    description: 'Specially trained caregivers for individuals with disabilities or special medical needs.',
    features: [
      'Specialized training for various conditions',
      'Individualized care plans',
      'Patience and understanding approach',
      'Assistive device training'
    ],
    hourlyRate: 32,
    image: '/placeholder-service.jpg',
    category: 'Specialized Care',
    availability: 'Available 24/7',
    rating: 4.9,
    reviews: 87
  },
  {
    id: 'respite-care',
    title: 'Respite Care',
    description: 'Temporary care services to give family caregivers a break while ensuring loved ones receive quality care.',
    features: [
      'Flexible scheduling options',
      'Reliable and trustworthy caregivers',
      'Continuity of care approach',
      'Peace of mind for families'
    ],
    hourlyRate: 24,
    image: '/placeholder-service.jpg',
    category: 'Support Care',
    availability: 'Available 24/7',
    rating: 4.7,
    reviews: 75
  },
  {
    id: 'pet-care',
    title: 'Pet Care',
    description: 'Professional care for your beloved pets while you\'re away or need assistance with pet care.',
    features: [
      'Pet feeding and walking services',
      'Medication administration',
      'Pet grooming and hygiene',
      'Exercise and playtime activities'
    ],
    hourlyRate: 20,
    image: '/placeholder-service.jpg',
    category: 'Pet Care',
    availability: 'Available 24/7',
    rating: 4.8,
    reviews: 103
  }
];

export async function generateMetadata({ params }) {
  const service = services.find(s => s.id === params.serviceId);

  if (!service) {
    return {
      title: 'Service Not Found - CareLoom',
      description: 'The requested service could not be found.'
    };
  }

  return {
    title: `${service.title} - CareLoom`,
    description: service.description,
    keywords: `${service.title}, caregiver, ${service.category}, care service, Bangladesh`,
    openGraph: {
      title: `${service.title} - CareLoom`,
      description: service.description,
      url: `https://careloom.com/services/${params.serviceId}`,
      siteName: "CareLoom",
      images: [
        {
          url: service.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - CareLoom`,
      description: service.description,
      images: [service.image || "/og-image.jpg"],
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find(s => s.id === params.serviceId);

  if (!service) {
    notFound();
  }

  const handleBookService = () => {
    // Redirect to booking page or login if not authenticated
    if (typeof window !== 'undefined') {
      // In a real app, we would check authentication status here
      window.location.href = `/booking/${service.id}`;
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
            <a href="/services" className="hover:text-[#2BAE9E]">Services</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{service.title}</span>
          </nav>
        </div>

        {/* Service Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                {service.title} Image
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="bg-[#EADBC8] text-[#374151] text-sm px-3 py-1 rounded-full mr-3">
                  {service.category}
                </span>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-[#374151]">{service.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({service.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-[#374151] mb-4">{service.title}</h1>
              <p className="text-gray-700 text-lg mb-6">{service.description}</p>

              <div className="flex items-center mb-8">
                <div className="text-3xl font-bold text-[#2BAE9E]">${service.hourlyRate}</div>
                <div className="text-gray-600 ml-2">per hour</div>
                <div className="ml-6 text-green-600 font-medium flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {service.availability}
                </div>
              </div>

              <button
                onClick={handleBookService}
                className="w-full bg-[#2BAE9E] text-white py-4 rounded-full text-lg font-medium hover:bg-[#5a9e7f] transition duration-300"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Features */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#374151] mb-6">Service Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#374151] mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#374151] mb-3">Standard Care</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Professional caregiver</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Background checked</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">24/7 support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#374151] mb-3">Premium Add-ons</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-500">Specialized equipment</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-500">Medication management</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-500">Transportation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#374151] mb-6">What Families Say</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold text-[#374151]">Sarah Johnson</h4>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-600 text-sm">5.0</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"The caregiver was wonderful with my baby. Very attentive and professional. I felt confident leaving my child in their care."</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold text-[#374151]">Michael Chen</h4>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-600 text-sm">4.9</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Professional, caring, and reliable. The service exceeded our expectations. Highly recommend!"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-[#374151] mb-4">Booking Summary</h3>
              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">{service.title}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Rate:</span>
                  <span className="font-medium">${service.hourlyRate}/hour</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-lg font-bold mb-2">
                  <span>Total Cost:</span>
                  <span className="text-[#2BAE9E]">$0.00</span>
                </div>
                <p className="text-sm text-gray-500">Cost will be calculated on the booking page</p>
              </div>
              <button
                onClick={handleBookService}
                className="w-full bg-[#2BAE9E] text-white py-3 rounded-full font-medium hover:bg-[#5a9e7f] transition duration-300"
              >
                Book Now
              </button>
              <p className="text-center text-sm text-gray-500 mt-3">No commitment. Cancel anytime.</p>
            </div>

            {/* Service Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-[#374151] mb-4">Service Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Certified and trained professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Thorough background checks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Flexible scheduling options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}