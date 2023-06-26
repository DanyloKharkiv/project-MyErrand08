import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const { accessToken, isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing && !accessToken;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};