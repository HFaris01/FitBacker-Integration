import React from 'react';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import axios from 'axios';
const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/auth');
};


  return (
    <header className="bg-orangeQuart text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Welcome, Friend!</h1>
      <div className="flex items-center space-x-4">
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
