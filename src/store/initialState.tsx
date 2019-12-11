import { initialState as loading } from './reducers/loading-reducer'
import { initialState as error } from './reducers/error-reducer'

import { initialState as auth, AuthState } from './reducers/auth-reducer'
import { initialState as republicas, Republica } from './reducers/republicas-reducer'

export interface BaseState {
  loading: any
  error: any
}

export interface State extends BaseState {
  republicas: Array<Republica>
  auth: AuthState
}

export const initialState: State = {
  loading,
  error,
  republicas,
  auth
}
