import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#374151] mb-6">Our Care Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive care solutions tailored to your family's unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Baby Care Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-[#2BAE9E] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">👶</span>
            </div>
            <h2 className="text-2xl font-bold text-[#374151] mb-4 text-center">Baby Care</h2>
            <p className="text-gray-700 mb-6 text-center">
              Professional and loving babysitters for infants and young children. Safe, engaging, and nurturing care for your little ones.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Trained in child development and safety</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>First aid and CPR certified</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Thoroughly background checked</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Engaging activities and age-appropriate care</span>
              </li>
            </ul>
            <button className="w-full bg-[#2BAE9E] text-white py-3 rounded-full font-medium hover:bg-[#5a9e7f] transition duration-300">
              Find a Babysitter
            </button>
          </div>

          {/* Elderly Care Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-[#5a9e7f] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">👵</span>
            </div>
            <h2 className="text-2xl font-bold text-[#374151] mb-4 text-center">Elderly Care</h2>
            <p className="text-gray-700 mb-6 text-center">
              Compassionate caregivers for seniors who need assistance with daily activities, medication management, and companionship.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Specialized in senior care and mobility assistance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Medication management and reminders</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Personal hygiene and grooming assistance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Companionship and emotional support</span>
              </li>
            </ul>
            <button className="w-full bg-[#2BAE9E] text-white py-3 rounded-full font-medium hover:bg-[#5a9e7f] transition duration-300">
              Find an Elderly Caregiver
            </button>
          </div>

          {/* Sick Care Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-[#6b9ac4] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">🏥</span>
            </div>
            <h2 className="text-2xl font-bold text-[#374151] mb-4 text-center">Sick Care</h2>
            <p className="text-gray-700 mb-6 text-center">
              Dedicated care for individuals recovering from illness or managing chronic conditions with professional medical support.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Medical training and certification</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Compassionate support during recovery</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 availability for critical care</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Specialized care for chronic conditions</span>
              </li>
            </ul>
            <button className="w-full bg-[#2BAE9E] text-white py-3 rounded-full font-medium hover:bg-[#5a9e7f] transition duration-300">
              Find a Sick Care Provider
            </button>
          </div>

          {/* Special Needs Care Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-[#FDBA74] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">♿</span>
            </div>
            <h2 className="text-2xl font-bold text-[#374151] mb-4 text-center">Special Needs Care</h2>
            <p className="text-gray-700 mb-6 text-center">
              Specially trained caregivers for individuals with disabilities or special medical needs.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Specialized training for various conditions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Individualized care plans</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Patience and understanding approach</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Assistive device training</span>
              </li>
            </ul>
            <button className="w-full bg-[#2BAE9E] text-white py-3 rounded-full font-medium hover:bg-[#5a9e7f] transition duration-300">
              Find a Special Needs Caregiver
            </button>
          </div>

          {/* Respite Care Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">💤</span>
            </div>
            <h2 className="text-2xl font-bold text-[#374151] mb-4 text-center">Respite Care</h2>
            <p className="text-gray-700 mb-6 text-center">
              Temporary care services to give family caregivers a break while ensuring loved ones receive quality care.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Flexible scheduling options</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Reliable and trustworthy caregivers</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Continuity of care approach</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Peace of mind for families</span>
              </li>
            </ul>
            <button className="w-full bg-[#2BAE9E] text-white py-3 rounded-full font-medium hover:bg-[#5a9e7f] transition duration-300">
              Find Respite Care
            </button>
          </div>

          {/* Pet Care Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-[#A8DADC] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">🐾</span>
            </div>
            <h2 className="text-2xl font-bold text-[#374151] mb-4 text-center">Pet Care</h2>
            <p className="text-gray-700 mb-6 text-center">
              Professional care for your beloved pets while you're away or need assistance with pet care.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Pet feeding and walking services</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Medication administration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Pet grooming and hygiene</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Exercise and playtime activities</span>
              </li>
            </ul>
            <button className="w-full bg-[#2BAE9E] text-white py-3 rounded-full font-medium hover:bg-[#5a9e7f] transition duration-300">
              Find a Pet Caregiver
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Why Choose Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7EFE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2BAE9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Thorough Background Checks</h3>
              <p className="text-gray-600">All our caregivers undergo rigorous screening for safety and reliability.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7EFE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2BAE9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Certified Professionals</h3>
              <p className="text-gray-600">All caregivers are certified with proper training in their specialized field.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7EFE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2BAE9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Verified Reviews</h3>
              <p className="text-gray-600">Real reviews from families who have used our services.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7EFE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2BAE9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support to address any concerns or questions.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-[#374151] mb-6">Ready to Find the Perfect Care?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Connect with a caregiver who understands your family&apos;s unique needs and provides the care you can trust.
          </p>
          <button className="bg-[#2BAE9E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a9e7f] transition duration-300">
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
}