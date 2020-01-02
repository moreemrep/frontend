import { initialState as loading } from './reducers/loading-reducer';
import { initialState as error } from './reducers/error-reducer';
import { initialState as auth, AuthState, LoadingStatusAuth, ErrorStatusAuth } from './reducers/auth-reducer';
import {
  initialState as republicas,
  RepublicaState,
  LoadingStatusRepublica,
  ErrorStatusRepublica
} from './reducers/republicas-reducer';
import {
  initialState as universidades,
  LoadingStatusUniversidade,
  ErrorStatusUniversidade
} from './reducers/universidades-reducer';
import { Universidade } from 'src/generated/graphql';

interface LoadingState extends LoadingStatusAuth, LoadingStatusRepublica, LoadingStatusUniversidade {}
interface ErrorState extends ErrorStatusAuth, ErrorStatusRepublica, ErrorStatusUniversidade {}

export interface State {
  loading: LoadingState;
  error: ErrorState;
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
