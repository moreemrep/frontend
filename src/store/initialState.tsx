import { initialState as loading } from './reducers/loading-reducer';
import { initialState as error } from './reducers/error-reducer';

import { initialState as auth, AuthState } from './reducers/auth-reducer';
import { initialState as republicas, RepublicaState } from './reducers/republicas-reducer';
import { initialState as universidades } from './reducers/universidades-reducer';
import { Universidade } from 'src/generated/graphql';

export interface State {
  loading: any;
  error: any;
  republicas: RepublicaState;
  auth: AuthState | null;
  universidades: Universidade[];
}

export const initialState: State = {
  loading,
  error,
  republicas,
  universidades,
  auth
};
