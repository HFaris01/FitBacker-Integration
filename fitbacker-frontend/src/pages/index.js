import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import withAuth from '../components/withAuth';
import ProtectedPage from '../components/ProtectedPage';

const Home = () => {
  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <ProtectedPage />
        <Footer />
      </div>
    </div>
  );
};

export default withAuth(Home);
