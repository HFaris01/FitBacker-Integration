import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <header className="header bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">Your App Title</a>
        </Link>
        <nav className="space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/recipes">
                <a>Recipes</a>
              </Link>
              <Link href="/nutritionlogger">
                <a>Nutrition Logger</a>
              </Link>
              <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a>Login</a>
              </Link>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
