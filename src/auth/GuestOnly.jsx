import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

export default function GuestOnly({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Navigate to='/search' replace />;

  return children;
}
