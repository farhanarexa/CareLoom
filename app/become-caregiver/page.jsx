import Image from "next/image";

export default function BecomeCaregiverPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#374151] mb-6">Become a Caregiver</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our network of trusted caregivers and make a meaningful difference in families' lives
          </p>
        </div>

        {/* Why Join Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
              Caregiver Image
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#374151] mb-6">Why Join CareLoom?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700"><span className="font-semibold">Flexible Schedule</span> - Work when you want, how much you want</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700"><span className="font-semibold">Competitive Pay</span> - Earn competitive rates for your services</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700"><span className="font-semibold">Meaningful Work</span> - Make a positive impact in families' lives</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700"><span className="font-semibold">Verified Platform</span> - Connect with verified families through our safe platform</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700"><span className="font-semibold">Support System</span> - Access to resources and support when you need it</span>
              </li>
            </ul>
            
          </div>
        </div>

        {/* Application Process Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2BAE9E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Create Profile</h3>
              <p className="text-gray-600">Fill out your profile with information about your experience, skills, and availability.</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5a9e7f] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Verification</h3>
              <p className="text-gray-600">Complete our verification process including background checks and reference verification.</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6b9ac4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Interview</h3>
              <p className="text-gray-600">Complete a video interview to showcase your caregiving skills and experience.</p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDBA74] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-2">Start Caring</h3>
              <p className="text-gray-600">Get matched with families and start providing the care you love.</p>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-[#EADBC8] rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Caregiver Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#374151] mb-4">Essential Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Must be at least 18 years old</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Valid government-issued ID</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Clean background check</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Reliable transportation (for some positions)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ability to pass drug screening</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#374151] mb-4">Preferred Qualifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Previous caregiving experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">First Aid and CPR certification</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Education in healthcare, child development, or related field</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fluent in local language</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Professional references</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Types Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Caregiver Service Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Baby Care */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#2BAE9E] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">👶</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-3">Baby Care</h3>
              <p className="text-gray-700 mb-4">Provide nurturing care for infants and young children including feeding, diapering, and developmental activities.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Newborn care</li>
                <li>• Feeding and burping</li>
                <li>• Sleep training</li>
                <li>• Developmental play</li>
              </ul>
            </div>

            {/* Elderly Care */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#5a9e7f] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">👵</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-3">Elderly Care</h3>
              <p className="text-gray-700 mb-4">Assist seniors with daily activities, medication management, and companionship.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medication reminders</li>
                <li>• Mobility assistance</li>
                <li>• Meal preparation</li>
                <li>• Companionship</li>
              </ul>
            </div>

            {/* Sick Care */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#6b9ac4] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-3">Sick Care</h3>
              <p className="text-gray-700 mb-4">Provide care for individuals recovering from illness or managing chronic conditions.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Post-surgery care</li>
                <li>• Medication administration</li>
                <li>• Wound care</li>
                <li>• Symptom monitoring</li>
              </ul>
            </div>

            {/* Special Needs */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#FDBA74] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">♿</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-3">Special Needs</h3>
              <p className="text-gray-700 mb-4">Care for individuals with disabilities or special medical needs.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Autism support</li>
                <li>• Physical disabilities</li>
                <li>• Mental health support</li>
                <li>• Specialized equipment</li>
              </ul>
            </div>

            {/* Respite Care */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#E63946] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">💤</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-3">Respite Care</h3>
              <p className="text-gray-700 mb-4">Provide temporary care to give family caregivers a break.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Short-term care</li>
                <li>• Emergency coverage</li>
                <li>• Weekend support</li>
                <li>• Vacation coverage</li>
              </ul>
            </div>

            {/* Pet Care */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#A8DADC] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🐾</span>
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-3">Pet Care</h3>
              <p className="text-gray-700 mb-4">Care for beloved pets while families are away or need assistance.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pet feeding</li>
                <li>• Walking services</li>
                <li>• Medication administration</li>
                <li>• Pet grooming</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-[#374151] mb-8 text-center">Apply to Become a Caregiver</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Type(s) of Interest</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Baby Care</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Elderly Care</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Sick Care</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Special Needs</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Respite Care</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Pet Care</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent">
                <option>Select your experience level</option>
                <option>0-1 years</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Weekdays</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Weekends</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Evenings</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-[#2BAE9E] focus:ring-[#2BAE9E]" />
                  <span className="ml-2 text-gray-700">Overnight</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume/CV</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your caregiving experience and why you want to join CareLoom</label>
              <textarea 
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2BAE9E] focus:border-transparent"
                placeholder="Share your experience and motivation"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input 
                id="terms" 
                type="checkbox" 
                className="h-4 w-4 text-[#2BAE9E] focus:ring-[#2BAE9E] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-[#2BAE9E] hover:underline">Terms of Service</a> and <a href="#" className="text-[#2BAE9E] hover:underline">Privacy Policy</a>
              </label>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#2BAE9E] text-white py-4 rounded-full text-lg font-medium hover:bg-[#5a9e7f] transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-[#374151] mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of dedicated caregivers and start earning while doing meaningful work
          </p>
          <button className="bg-[#2BAE9E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a9e7f] transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}