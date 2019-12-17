import React, { useEffect, useState } from 'react';
import { useFirebase } from './services/useFirebase';
import { useAuthActions } from './actions/useAuthActions';
import { useAuthStore } from './store/reducers/auth-reducer';

interface AuthCheckerProps {
  children: React.ReactNode;
}

export const AuthChecker: React.FC<AuthCheckerProps> = props => {
  const { auth } = useFirebase();
  const { loginFirebase } = useAuthActions();
  const [user] = useAuthStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return auth.onAuthStateChanged(userFire => {
      if (userFire && userFire.email && !user) {
        loginFirebase(userFire.email).then(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <div>loading</div>;

  return <div>{props.children}</div>;
};
