import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="text-[#2BAE9E] text-9xl font-bold mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/" 
            className="bg-[#2BAE9E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a9e7f] transition duration-300"
          >
            Return Home
          </Link>
          <Link 
            href="/contact" 
            className="bg-white text-[#2BAE9E] border-2 border-[#2BAE9E] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F7EFE5] transition duration-300"
          >
            Contact Support
          </Link>
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-bold text-[#374151] mb-4">Popular Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-[#2BAE9E] hover:text-[#5a9e7f] font-medium">
              Home
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/services" className="text-[#2BAE9E] hover:text-[#5a9e7f] font-medium">
              Services
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/how-it-works" className="text-[#2BAE9E] hover:text-[#5a9e7f] font-medium">
              How It Works
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/find-caregiver" className="text-[#2BAE9E] hover:text-[#5a9e7f] font-medium">
              Find Caregiver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}