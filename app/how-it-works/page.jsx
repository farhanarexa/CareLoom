import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#374151] mb-6">How CareLoom Works</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connecting families with trusted caregivers is simple, safe, and efficient with our streamlined process
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#2BAE9E] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-[#374151] mb-4">Create Your Profile</h3>
            <p className="text-gray-700">
              Sign up and provide details about your care needs, preferences, and schedule requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#5a9e7f] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-[#374151] mb-4">Browse Caregivers</h3>
            <p className="text-gray-700">
              Review detailed profiles, qualifications, reviews, and availability of trusted caregivers.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#6b9ac4] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-[#374151] mb-4">Connect & Meet</h3>
            <p className="text-gray-700">
              Message caregivers, schedule meetings, and find the perfect match for your family.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#FDBA74] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold text-[#374151] mb-4">Start Care</h3>
            <p className="text-gray-700">
              Begin care with peace of mind, knowing your caregiver is verified and experienced.
            </p>
          </div>
        </div>

        {/* Detailed Process Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">The Complete Process</h2>
          
          <div className="space-y-12">
            {/* Step 1 Detail */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                  Sign Up Image
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-[#374151] mb-4 flex items-center">
                  <span className="w-10 h-10 bg-[#2BAE9E] text-white rounded-full flex items-center justify-center mr-4">1</span>
                  Create Your Profile
                </h3>
                <p className="text-gray-700 mb-4">
                  Getting started with CareLoom is simple. Create your family profile by providing information about your care needs, including the type of care required, schedule preferences, and any special requirements. Our secure platform ensures your information is protected.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sign up with your email or social account</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Describe your care needs and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Set your location and schedule preferences</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 Detail */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                  Browse Caregivers Image
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-[#374151] mb-4 flex items-center">
                  <span className="w-10 h-10 bg-[#5a9e7f] text-white rounded-full flex items-center justify-center mr-4">2</span>
                  Browse Caregivers
                </h3>
                <p className="text-gray-700 mb-4">
                  Our platform features thousands of verified caregivers with detailed profiles. Browse through their qualifications, experience, certifications, availability, and genuine reviews from other families. Each caregiver has been thoroughly screened for your peace of mind.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Filter by location, availability, and skills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>View detailed profiles and verified reviews</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Check certifications and background verification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 Detail */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                  Connect Image
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-[#374151] mb-4 flex items-center">
                  <span className="w-10 h-10 bg-[#6b9ac4] text-white rounded-full flex items-center justify-center mr-4">3</span>
                  Connect & Meet
                </h3>
                <p className="text-gray-700 mb-4">
                  Once you've found potential matches, connect with them directly through our platform. Schedule meetings or video calls to discuss your needs in detail. This step ensures compatibility and builds trust before care begins.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Send messages through our secure platform</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Schedule video calls or in-person meetings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Negotiate rates and finalize arrangements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 Detail */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                  Start Care Image
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-[#374151] mb-4 flex items-center">
                  <span className="w-10 h-10 bg-[#FDBA74] text-white rounded-full flex items-center justify-center mr-4">4</span>
                  Start Care
                </h3>
                <p className="text-gray-700 mb-4">
                  Once you've selected the perfect caregiver, care can begin. Our platform provides ongoing support, scheduling tools, and communication features to ensure everything runs smoothly. We're here to help throughout your caregiving journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Begin care with your chosen caregiver</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Use our scheduling and payment tools</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2BAE9E] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Access 24/7 support whenever needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* For Caregivers Section */}
        <div className="bg-[#EADBC8] rounded-2xl p-10 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#374151] mb-4">How It Works for Caregivers</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join our network of trusted caregivers and find meaningful opportunities to make a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Caregiver Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2BAE9E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#374151] mb-2">Sign Up & Verify</h3>
              <p className="text-gray-700 text-sm">
                Create your profile and complete our verification process
              </p>
            </div>
            
            {/* Caregiver Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5a9e7f] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#374151] mb-2">Complete Profile</h3>
              <p className="text-gray-700 text-sm">
                Add your skills, experience, and availability
              </p>
            </div>
            
            {/* Caregiver Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6b9ac4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#374151] mb-2">Get Matched</h3>
              <p className="text-gray-700 text-sm">
                Families find and contact you based on your profile
              </p>
            </div>
            
            {/* Caregiver Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDBA74] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-[#374151] mb-2">Start Caring</h3>
              <p className="text-gray-700 text-sm">
                Connect with families and provide quality care
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-[#374151] mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're looking for care or ready to provide it, CareLoom makes the process simple and secure.
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