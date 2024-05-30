import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, register } = useContext(AuthContext);
    const router = useRouter();

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await register(username, email, password);
            }
            router.push('/');
        } catch (error) {
            setError(`Error ${isLogin ? 'logging in' : 'registering'} user`);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-black">
                    {isLogin ? 'Login' : 'Register'}
                </h2>
                {error && <p className="mb-4 text-center text-red-500">{error}</p>}
                <form onSubmit={handleAuth}>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-black">Username</label>
                            <input
                                type="text"
                                style={{ color: 'black' }}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-black">Email</label>
                        <input
                            type="email"
                            style={{ color: 'black' }}
                            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black">Password</label>
                        <input
                            type="password"
                            style={{ color: 'black' }}
                            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <p className="mt-4 text-center text-black">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
