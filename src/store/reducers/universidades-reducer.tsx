import { useDispatch } from '../hooks/useDispatch';
import { Action } from '../StoreProvider';
import { Universidade } from '../../generated/graphql';

export const initialState: Universidade[] = [];

const types = {
  FETCH_UNIVERSIDADE: 'FETCH_UNIVERSIDADE'
};

export interface LoadingStatusUniversidade {
  FETCH_UNIVERSIDADE?: boolean;
}

export interface ErrorStatusUniversidade {
  FETCH_UNIVERSIDADE?: string;
}

export function universidadeReducer(state: Universidade[], action: Action): Universidade[] {
  switch (action.type) {
    case 'FETCH_UNIVERSIDADE_SUCCESS':
      return action.payload;

    default:
      return state;
  }
}

export function useUniversidadeDispatch() {
  const fetch = useDispatch<Array<Universidade>>(types.FETCH_UNIVERSIDADE);

  return {
    fetch
  };
}
