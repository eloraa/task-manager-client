import { useContext, useEffect } from 'react';
import { AuthContext, AuthContextProps } from '../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

export const useAuthRedir = () => {
  const { user } = useContext(AuthContext) as AuthContextProps;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate(location.state || '/');
    }
  }, [user, navigate, location]);
};
