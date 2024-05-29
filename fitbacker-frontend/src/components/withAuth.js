import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/auth');
          return;
        }

        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verifyToken`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status !== 200) {
            router.push('/auth');
          }
        } catch (error) {
          console.error('Error verifying token:', error);
          router.push('/auth');
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withAuth;
