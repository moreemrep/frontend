import { useDispatch } from '../hooks/useDispatch';
import { Action, DispatchContext } from '../StoreProvider';
import { useStore } from '../hooks/useStore';
import { RepublicaUser } from 'src/generated/graphql';
import { useContext } from 'react';

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

    case 'LOGOUT':
      return initialState;

    default:
      return state;
  }
}

export function useAuthDispatch() {
  const dispatch = useContext(DispatchContext);
  const login = useDispatch<AuthState>(types.LOGIN);
  const register = useDispatch<AuthState>(types.REGISTER);
  const forgotPassword = useDispatch(types.FORGOT_PASSWORD);

  return {
    login,
    register,
    forgotPassword,
    logout: () => dispatch({ type: 'LOGOUT' })
  };
}

export function useAuthStore() {
  return useStore('auth', types);
}
