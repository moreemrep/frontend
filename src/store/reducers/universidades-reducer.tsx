import { useDispatch } from '../hooks/useDispatch';
import { Action } from '../StoreProvider';
import { useStore, useStatus } from '../hooks/useStore';
import { Universidade } from '../../generated/graphql';

export const initialState: Universidade[] = [];

const types = {
  FETCH_UNIVERSIDADE: 'FETCH_UNIVERSIDADE'
};

interface LoadingStatus {
  FETCH_UNIVERSIDADE: boolean;
}

interface ErrorStatus {
  FETCH_UNIVERSIDADE: string;
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

export function useUniversidadeStore(): [Universidade[], ErrorStatus, LoadingStatus] {
  const universidades = useStore('universidades');
  const [error, loading] = useStatus(types);

  return [universidades, error, loading];
}
