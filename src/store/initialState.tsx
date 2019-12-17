import { initialState as loading } from './reducers/loading-reducer';
import { initialState as error } from './reducers/error-reducer';

import { initialState as auth, AuthState } from './reducers/auth-reducer';
import { initialState as republicas, RepublicaState } from './reducers/republicas-reducer';

interface BaseState {
  loading: any;
  error: any;
}

export interface State extends BaseState {
  republicas: RepublicaState;
  auth: AuthState;
}

export const initialState: State = {
  loading,
  error,
  republicas,
  auth
};
