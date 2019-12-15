import { useDispatch } from '../hooks/useDispatch';
import { Action } from '../StoreProvider';
import { useStore } from '../hooks/useStore';
import { CriarRepublicaPayload, RepublicaUser } from 'src/generated/graphql';

export interface AuthState {
  email?: string;
  republica?: RepublicaUser;
}

export const initialState: AuthState = {};

const types = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD'
};

export function authReducer(state: AuthState, action: Action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return action.payload;

    default:
      return state;
  }
}

export function useAuthDispatch() {
  const login = useDispatch<AuthState>(types.LOGIN);
  const register = useDispatch<AuthState>(types.REGISTER);
  const forgotPassword = useDispatch<void>(types.FORGOT_PASSWORD);

  return {
    login,
    register,
    forgotPassword
  };
}

export function useAuthStore() {
  return useStore('auth', types);
}
