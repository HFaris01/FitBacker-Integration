import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ProtectedPage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/protected');
                setMessage(response.data);
            } catch (error) {
                setMessage('Failed to fetch protected data');
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Protected Page</h1>
            <p>{message}</p>
        </div>
    );
};

export default ProtectedPage;
