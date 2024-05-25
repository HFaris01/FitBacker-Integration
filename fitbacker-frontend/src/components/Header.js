import React from 'react';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';

const Header = ({ username }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout operation
    // Remove user session/token
    // Redirect to login page
    router.push('/login');
  };

  return (
    <header className="bg-orangeQuart text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Welcome, {username}!</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => router.push('/profile')}
          className="text-white hover:underline"
        >
          Profile
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-1 text-white hover:text-blueSec"
        >
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
