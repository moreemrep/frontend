import { useDispatch } from '../hooks/useDispatch';
import { Action } from '../StoreProvider';
import { useStore, useStatus } from '../hooks/useStore';
import { RepublicaUser } from 'src/generated/graphql';

export interface AuthState {
  email: string;
  republica: RepublicaUser;
}

export const initialState: AuthState | null = null;

const types = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  LOGOUT: 'LOGOUT'
};

interface LoadingStatus {
  LOGIN: boolean;
  REGISTER: boolean;
  FORGOT_PASSWORD: boolean;
  LOGOUT: boolean;
}

interface ErrorStatus {
  LOGIN: string;
  REGISTER: string;
  FORGOT_PASSWORD: string;
  LOGOUT: string;
}

export function authReducer(state: AuthState | null, action: Action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return action.payload;

    case 'LOGOUT_SUCCESS':
      return initialState;

    default:
      return state;
  }
}

export function useAuthDispatch() {
  const login = useDispatch<AuthState>(types.LOGIN);
  const register = useDispatch<AuthState>(types.REGISTER);
  const forgotPassword = useDispatch(types.FORGOT_PASSWORD);
  const logout = useDispatch(types.LOGOUT);

  return {
    login,
    register,
    forgotPassword,
    logout
  };
}

export function useAuthStore(): [AuthState | null, ErrorStatus, LoadingStatus] {
  const user = useStore('auth');
  const [error, loading] = useStatus(types);

  return [user, error, loading];
}
