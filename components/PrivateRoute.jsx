'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

// Private Route Component
export const PrivateRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2BAE9E]"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    // Redirect to login if not authenticated
    router.push('/auth/login');
    return null;
  }

  // Check if user is logged in and if the current route is private
  if (!session?.user) {
    router.push('/auth/login');
    return null;
  }

  return children;
};

// Export an empty AuthProvider for compatibility with existing code
export const AuthProvider = ({ children }) => {
  return children;
};