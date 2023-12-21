import { useContext, useEffect } from 'react';
import { AuthContext, AuthContextProps } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const useAuthRedir = () => {
  const { user } = useContext(AuthContext) as AuthContextProps;

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
};
