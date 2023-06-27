import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, accessToken } = useAuth();
  return !isLoggedIn && accessToken ? <Navigate to={redirectTo} /> : Component;
};