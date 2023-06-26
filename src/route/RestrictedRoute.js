import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
    const { isLoggedIn, token } = useAuth();
  return !isLoggedIn && token ? <Navigate to={redirectTo} /> : Component;
};