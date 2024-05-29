import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve('../.env') });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_KEY: process.env.SPOONACULAR_API_KEY,
    NEXT_PUBLIC_BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:5000',
  },
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
