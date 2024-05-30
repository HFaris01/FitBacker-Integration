import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import Footer from '../components/Footer';
import withAuth from '../components/withAuth';

const profile = () => {
  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <UserProfile />
        <Footer />
      </div>
    </div>
  );
};

export default withAuth(profile);
