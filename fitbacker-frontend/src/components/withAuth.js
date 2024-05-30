import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

const withAuth = WrappedComponent => {
    return props => {
        const { token } = useContext(AuthContext);
        const router = useRouter();

        useEffect(() => {
            if (!token) {
                router.push('/auth');
            }
        }, [token]);

        if (!token) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
