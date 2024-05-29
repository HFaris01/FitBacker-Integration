// src/pages/_app.js
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { Quicksand, Montserrat } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FitBacker</title>
      </Head>
      <AuthProvider>
        <main className={`${quicksand.variable} ${montserrat.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </>
  );
}

export default MyApp;
