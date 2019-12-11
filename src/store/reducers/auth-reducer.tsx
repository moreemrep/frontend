import { useDispatch } from "../hooks/useDispatch"
import { Action } from "../StoreProvider"
import { useStore } from "../hooks/useStore"

export interface AuthState {
  email?: string
  republica?: string
}

export const initialState: AuthState = {}

const types = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  RESTORE_PASSWORD: 'RESTORE_PASSWORD'
}

export function authReducer (state: AuthState, action: Action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
        return action.payload

    default:
      return state
  }
}

export function useAuthDispatch () {
  const login = useDispatch<AuthState>(types.LOGIN)
  const register = useDispatch<AuthState>(types.REGISTER)
  const resetPassword = useDispatch(types.RESTORE_PASSWORD)

  return {
    login,
    register,
    resetPassword
  }

}

export function useAuthStore(){
  return useStore('auth', types)
}