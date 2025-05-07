import { Navigate } from 'react-router-dom';
import { useAuth } from '@shared/hooks/useAuth';
import { JSX } from 'react';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
