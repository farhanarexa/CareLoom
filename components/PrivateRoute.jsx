'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Check if user is logged in (simulated with localStorage)
  useEffect(() => {
    const checkAuthStatus = () => {
      // In a real app, this would check for a JWT token or session
      const userData = localStorage.getItem('careloom_user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  // Redirect to login if trying to access private routes without being logged in
  useEffect(() => {
    if (!loading) {
      const isPrivateRoute = pathname.startsWith('/booking') || pathname.startsWith('/my-bookings');
      if (isPrivateRoute && !user) {
        router.push('/auth/login');
      }
    }
  }, [user, loading, pathname, router]);

  const login = (userData) => {
    // In a real app, this would save a JWT token
    localStorage.setItem('careloom_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    // In a real app, this would remove the JWT token
    localStorage.removeItem('careloom_user');
    setUser(null);
    router.push('/');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Private Route Component
export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2BAE9E]"></div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login if not authenticated
    router.push('/auth/login');
    return null;
  }

  return children;
};