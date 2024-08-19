import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useVerifyTokenMutation } from '../redux/rtk-query/auth';
import { setProfile } from '../redux/slice/auth';
import CommonLoader from './CommonLoader';

interface IsAuthProps {
  children: ReactNode;
}

export const IsAuth = ({ children }: IsAuthProps) => {
  const token = useSelector(
    (state: RootState) => state.persistedReducer.auth.token,
  );
  const dispatch = useDispatch();

  const [jwt] = useVerifyTokenMutation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (token) {
          const response = await jwt(token).unwrap();
          if (response?.statusCode === 200) {
            dispatch(setProfile(response?.value));
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(
          'Token verification failed, setting isAuthenticated to false',
          error,
        );
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, [token, jwt]);

  if (isAuthenticated === null) {
    return <CommonLoader />; // Or any loading indicator
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};
