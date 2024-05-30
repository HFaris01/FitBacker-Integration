import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
            // Optionally fetch user data here
        }
    }, []);

    const login = async (email, password) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, { email, password });
        const { token } = response.data;
        setToken(token);
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // Optionally fetch user data here
    };

    const register = async (username, email, password) => {
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, { username, email, password });
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
