import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const { token, isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;
  console.log(!isLoggedIn, !isRefreshing, !token)
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};