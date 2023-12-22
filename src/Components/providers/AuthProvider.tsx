import { ReactNode, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { app } from '../../config/firebase.config';

export interface AuthContextProps {
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  updateUser: (displayName: string, photoURL: string) => Promise<void>;
  verifyEmail: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  googleSignin: () => Promise<UserCredential>;
  signOutUser: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const auth = getAuth(app);

export const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (displayName: string, photoURL: string) => {
    setLoading(true);
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      }).then(() => setLoading(false));
    }
    return new Promise<void>(res => res());
  };
  const verifyEmail = () => {
    if (auth.currentUser) {
      return sendEmailVerification(auth.currentUser);
    }
    return new Promise<void>(res => res());
  };
  const resetPassword = (email: string) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);

  return <AuthContext.Provider value={{ user, signIn, createUser, updateUser, verifyEmail, resetPassword, googleSignin, signOutUser, loading }}>{children}</AuthContext.Provider>;
};
