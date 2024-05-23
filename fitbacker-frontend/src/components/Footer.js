import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-orangeQuart py-4 text-white text-center">
      <div className="max-w-full mx-auto">
        <p className="mb-4">Contact us: example@example.com</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-orangeQuart py-2 px-4 rounded-lg mb-4">Back to Top</button>
        <p>&copy; 2023 Fitbacker. All rights reserved. &quot;Your Fitness Partner.&quot;</p>
        <Link href="/login">
          <div className="text-lg underline">
            login test
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
