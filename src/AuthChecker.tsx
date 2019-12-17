import React, { useEffect } from 'react';
import { useFirebase } from './services/useFirebase';
import { useAuthActions } from './actions/useAuthActions';
import { useAuthStore } from './store/reducers/auth-reducer';

export const AuthChecker: React.FC = () => {
  const { auth } = useFirebase();
  const { loginFirebase } = useAuthActions();
  const [authStore] = useAuthStore();

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if (user && user.email && !authStore.email) {
        loginFirebase(user.email);
      }
    });
  }, []);

  return <div></div>;
};
