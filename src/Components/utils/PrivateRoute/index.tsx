import { ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../providers/AuthProvider';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useContext(AuthContext) as AuthContextProps;
  const location = useLocation();

  if (loading) {
    return <></>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="../login"></Navigate>;
};
