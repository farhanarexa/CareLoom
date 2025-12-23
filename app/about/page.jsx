import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#374151] mb-6">About CareLoom</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connecting families with trusted, professional caregivers since 2020
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
              About Image
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#374151] mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              CareLoom was founded with a simple yet profound mission: to make quality caregiving accessible, reliable, and trustworthy for every family. Our journey began when our founders experienced firsthand the challenges of finding reliable care for their own loved ones.
            </p>
            <p className="text-gray-700 mb-4">
              We recognized that while the need for quality caregiving services was universal, the process of finding trustworthy caregivers was often stressful, time-consuming, and uncertain. This realization led us to create CareLoom - a platform that connects families with verified, professional caregivers they can trust.
            </p>
            <p className="text-gray-700">
              Today, CareLoom serves thousands of families across Bangladesh, providing peace of mind through our rigorous screening process, verified reviews, and ongoing support.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#374151] mb-4">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To make caregiving easy, secure, and accessible for everyone by connecting families with trusted, professional caregivers who provide exceptional care for children, elderly, and individuals requiring special attention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2BAE9E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Trust & Safety</h3>
              <p className="text-gray-600">We ensure every caregiver is thoroughly vetted for your peace of mind.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5a9e7f] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Quality Care</h3>
              <p className="text-gray-600">We connect you with professional caregivers who provide exceptional service.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6b9ac4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Accessibility</h3>
              <p className="text-gray-600">We make quality caregiving services accessible to every family.</p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-[#EADBC8] rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#2BAE9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Trust</h3>
              <p className="text-gray-700 text-sm">Building trust through transparency, verification, and reliable service</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#2BAE9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Compassion</h3>
              <p className="text-gray-700 text-sm">Fostering genuine care and empathy in every interaction</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#2BAE9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Excellence</h3>
              <p className="text-gray-700 text-sm">Striving for the highest standards in caregiving services</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#2BAE9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Connection</h3>
              <p className="text-gray-700 text-sm">Creating meaningful connections between families and caregivers</p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#374151]">Sarah Ahmed</h3>
              <p className="text-[#2BAE9E] font-medium">CEO & Founder</p>
              <p className="text-gray-600 text-sm mt-2">10+ years in healthcare management</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#374151]">Michael Rahman</h3>
              <p className="text-[#2BAE9E] font-medium">CTO</p>
              <p className="text-gray-600 text-sm mt-2">15+ years in technology development</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#374151]">Fatima Khan</h3>
              <p className="text-[#2BAE9E] font-medium">Head of Caregiver Relations</p>
              <p className="text-gray-600 text-sm mt-2">8+ years in social services</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#374151]">David Wilson</h3>
              <p className="text-[#2BAE9E] font-medium">Operations Director</p>
              <p className="text-gray-600 text-sm mt-2">12+ years in operations management</p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-[#F7EFE5] rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#2BAE9E] mb-2">5000+</div>
              <div className="text-gray-700">Families Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2BAE9E] mb-2">2000+</div>
              <div className="text-gray-700">Verified Caregivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2BAE9E] mb-2">98%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2BAE9E] mb-2">50000+</div>
              <div className="text-gray-700">Hours of Care</div>
            </div>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0 text-center">
                  <div className="w-16 h-16 bg-[#2BAE9E] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    2020
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold text-[#374151] mb-2">Foundation</h3>
                  <p className="text-gray-700">CareLoom was founded with a mission to connect families with trusted caregivers.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0 text-center">
                  <div className="w-16 h-16 bg-[#5a9e7f] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    2021
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold text-[#374151] mb-2">Growth</h3>
                  <p className="text-gray-700">Launched our platform and connected our first 500 families with caregivers.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0 text-center">
                  <div className="w-16 h-16 bg-[#6b9ac4] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    2022
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold text-[#374151] mb-2">Expansion</h3>
                  <p className="text-gray-700">Expanded to serve more areas in Bangladesh and introduced new service categories.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0 text-center">
                  <div className="w-16 h-16 bg-[#FDBA74] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    2023
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold text-[#374151] mb-2">Recognition</h3>
                  <p className="text-gray-700">Recognized as one of the top caregiving platforms in Bangladesh with 2000+ verified caregivers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-[#374151] mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're looking for care or ready to provide it, CareLoom is here to help
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#2BAE9E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a9e7f] transition duration-300">
              Find a Caregiver
            </button>
            <button className="bg-white text-[#2BAE9E] border-2 border-[#2BAE9E] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F7EFE5] transition duration-300">
              Become a Caregiver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}