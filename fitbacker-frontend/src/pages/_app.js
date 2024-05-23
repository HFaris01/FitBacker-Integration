import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { Quicksand, Montserrat } from 'next/font/google';
import Header from '../components/Header';

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
        <title>Your App Title</title>
      </Head>
      <main className={`${quicksand.variable} ${montserrat.variable} font-sans`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
