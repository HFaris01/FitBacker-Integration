import React, { useState } from 'react';
import Link from 'next/link';
import { loginUser, registerUser, fetchUser } from '../services/api';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const data = await loginUser({ email, password });
        localStorage.setItem('token', data.token);
      } else {
        const data = await registerUser({ username, email, password });
        localStorage.setItem('token', data.token);
      }
      window.location.href = '/'; // Redirect to the main page after login/register
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Welcome to FitBacker</h1>
        <p className="mb-4 text-center text-black">Please log in or register to continue.</p>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          {isLogin ? (
            <>
              Don&apos;t have an account?{' '}
              <button className="text-blue-500 hover:underline" onClick={() => setIsLogin(false)}>
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button className="text-blue-500 hover:underline" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
