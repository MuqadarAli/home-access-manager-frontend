import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { persister, RootState } from '../redux/store';
import { useVerifyTokenMutation } from '../redux/rtk-query/auth';
import { logout, setProfile } from '../redux/slice/auth';
import CommonLoader from './CommonLoader';

interface IsAuthProps {
  children: ReactNode;
}

export const IsAuth = ({ children }: IsAuthProps) => {
  const token = useSelector(
    (state: RootState) => state.persistedReducer.auth.token,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [jwt] = useVerifyTokenMutation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (token) {
          const response = await jwt(token).unwrap();
          if (response?.statusCode === 200) {
            dispatch(setProfile(response?.value));
            setIsAuthenticated(true);
          } else {
            persister.purge();
            dispatch(logout());
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
          navigate('/', { replace: true });
        }
      } catch (error) {
        profile?.role === 'admin' ? navigate('/') : navigate('/login');
        persister.purge();
        dispatch(logout());
        console.log(
          'Token verification failed, setting isAuthenticated to false',
          error,
        );
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, [token]);

  useEffect(() => {
    if (isAuthenticated) {
      if (profile?.community) {
        // User with community trying to access a super-admin route
        if (location?.pathname?.startsWith('/super-admin')) {
          navigate('/dashboard', { replace: true });
        }
      }
      //  else {
      //   // Super-admin trying to access a non-super-admin route
      //   if (!location?.pathname?.startsWith('/super-admin')) {
      //     navigate('/super-admin/dashboard', { replace: true });
      //   }
      // }
    }
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return <CommonLoader />; // Or any loading indicator
  }

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={profile?.community ? '/' : '/login'} replace />
  );
};
