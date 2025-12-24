'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className={`text-2xl font-bold ${isActive('/') ? 'text-[#2BAE9E]' : 'text-[#374151]'}`}>
            CareLoom
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`text-base ${isActive('/') ? 'text-[#2BAE9E] font-bold' : 'text-[#374151] hover:text-[#2BAE9E]'} font-medium`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-base ${isActive('/services') ? 'text-[#2BAE9E] font-bold' : 'text-[#374151] hover:text-[#2BAE9E]'} font-medium`}
          >
            Services
          </Link>
          <Link
            href="/how-it-works"
            className={`text-base ${isActive('/how-it-works') ? 'text-[#2BAE9E] font-bold' : 'text-[#374151] hover:text-[#2BAE9E]'} font-medium`}
          >
            How It Works
          </Link>
          <Link
            href="/find-caregiver"
            className={`text-base ${isActive('/find-caregiver') ? 'text-[#2BAE9E] font-bold' : 'text-[#374151] hover:text-[#2BAE9E]'} font-medium`}
          >
            Find Caregiver
          </Link>
          <Link
            href="/become-caregiver"
            className={`text-base ${isActive('/become-caregiver') ? 'text-[#2BAE9E] font-bold' : 'text-[#374151] hover:text-[#2BAE9E]'} font-medium`}
          >
            Become a Caregiver
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/auth/login"
            className={`hidden md:block ${isActive('/auth/login') ? 'text-[#2BAE9E] font-bold' : 'text-[#2BAE9E] font-medium hover:text-[#5a9e7f]'}`}
          >
            Sign In
          </Link>
          <Link
            href="/auth/register"
            className={`bg-[#2BAE9E] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5a9e7f] transition duration-300 ${isActive('/auth/register') ? 'ring-2 ring-[#2BAE9E]/50' : ''}`}
          >
            Sign Up
          </Link>
          <button className="md:hidden text-[#374151]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}