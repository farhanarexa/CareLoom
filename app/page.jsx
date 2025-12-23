import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Banner/Slider Section */}
      <section className="relative bg-gradient-to-r from-[#2BAE9E] to-[#5a9e7f] text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted Care for Your Loved Ones
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              CareLoom connects families with reliable, professional caregivers for children, elderly, and special care needs
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#2BAE9E] font-bold px-8 py-3 rounded-full text-lg hover:bg-[#F7EFE5] transition duration-300">
                Find a Caregiver
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-white hover:text-[#2BAE9E] transition duration-300">
                Become a Caregiver
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6">
                Our Mission: Making Caregiving Easy, Secure & Accessible
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                CareLoom is dedicated to connecting families with trusted, professional caregivers who provide exceptional care for children, elderly, and individuals requiring special attention.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform ensures peace of mind through rigorous background checks, verified reviews, and continuous support throughout your caregiving journey.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2BAE9E]">5000+</div>
                  <div className="text-gray-600">Families Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2BAE9E]">2000+</div>
                  <div className="text-gray-600">Verified Caregivers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2BAE9E]">98%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                About Section Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">
              Our Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive care solutions tailored to your family's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Baby Care Service */}
            <div className="bg-[#F7EFE5] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-[#2BAE9E] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👶</span>
              </div>
              <h3 className="text-2xl font-bold text-[#374151] mb-4">Baby Care</h3>
              <p className="text-gray-700 mb-6">
                Professional and loving babysitters for infants and young children. Safe, engaging, and nurturing care for your little ones.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Trained in child development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  First aid certified
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Background checked
                </li>
              </ul>
              <button className="text-[#2BAE9E] font-bold hover:text-[#5a9e7f] transition-colors duration-300">
                Learn More →
              </button>
            </div>

            {/* Elderly Care Service */}
            <div className="bg-[#EADBC8] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-[#5a9e7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👵</span>
              </div>
              <h3 className="text-2xl font-bold text-[#374151] mb-4">Elderly Care</h3>
              <p className="text-gray-700 mb-6">
                Compassionate caregivers for seniors who need assistance with daily activities, medication management, and companionship.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Specialized in senior care
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Medication management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobility assistance
                </li>
              </ul>
              <button className="text-[#2BAE9E] font-bold hover:text-[#5a9e7f] transition-colors duration-300">
                Learn More →
              </button>
            </div>

            {/* Sick People Care Service */}
            <div className="bg-[#F7EFE5] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-[#6b9ac4] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-[#374151] mb-4">Sick Care</h3>
              <p className="text-gray-700 mb-6">
                Dedicated care for individuals recovering from illness or managing chronic conditions with professional medical support.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Medical training
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Compassionate support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2BAE9E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 availability
                </li>
              </ul>
              <button className="text-[#2BAE9E] font-bold hover:text-[#5a9e7f] transition-colors duration-300">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#EADBC8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">
              What Our Families Say
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Real stories from families who have found trusted care through CareLoom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>
              <p className="text-gray-700 italic mb-6">
                "CareLoom helped me find the perfect babysitter for my twins. The screening process gave me complete peace of mind, and our caregiver has been amazing!"
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                <div>
                  <h4 className="font-bold text-[#374151]">Sarah Johnson</h4>
                  <p className="text-gray-600">Parent of Twins</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>
              <p className="text-gray-700 italic mb-6">
                "Finding reliable elderly care for my mother was challenging until CareLoom. The caregiver is professional, caring, and has become part of our family."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                <div>
                  <h4 className="font-bold text-[#374151]">Michael Chen</h4>
                  <p className="text-gray-600">Son</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>
              <p className="text-gray-700 italic mb-6">
                "After my surgery, I needed someone to help with daily tasks. CareLoom connected me with an incredibly supportive caregiver who made my recovery much easier."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                <div>
                  <h4 className="font-bold text-[#374151]">Robert Williams</h4>
                  <p className="text-gray-600">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
