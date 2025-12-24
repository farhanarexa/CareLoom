'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to determine if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
    setIsMenuOpen(false);
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
          {status === 'authenticated' && session?.user ? (
            // Show user profile when logged in
            <div className="flex items-center space-x-4">
              <Link href="/my-bookings" className="hidden md:block text-[#2BAE9E] font-medium hover:text-[#5a9e7f]">
                My Bookings
              </Link>
              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    {session.user.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name || 'User'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-[#2BAE9E] font-bold">
                        {session.user.name ? session.user.name.charAt(0).toUpperCase() : 'U'}
                      </span>
                    )}
                  </div>
                </button>

                {/* Dropdown menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <Link
                      href="/my-bookings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Show login/signup buttons when not logged in
            <>
              <Link
                href="/auth/login"
                className={`hidden md:block text-[#2BAE9E] font-medium hover:text-[#5a9e7f]`}
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="bg-[#2BAE9E] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5a9e7f] transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
          <button
            className="md:hidden text-[#374151]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}