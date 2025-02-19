import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowPublic?: boolean;
}

export function ProtectedRoute({ children, allowPublic = false }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated && !allowPublic) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
} 