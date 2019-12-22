/* eslint-disable no-case-declarations */
import { useDispatch } from '../hooks/useDispatch';
import { Action } from '../StoreProvider';
import { useStore, useStatus } from '../hooks/useStore';
import { RepublicaPayload, Coordenadas } from '../../generated/graphql';

export interface RepublicaState {
  republicas: RepublicaPayload[];
  centro: Coordenadas;
}

export const initialState: RepublicaState = {
  republicas: [],
  centro: {
    latitude: 0,
    longitude: 0
  }
};

const types = {
  FETCH_REPUBLICAS: 'FETCH_REPUBLICAS'
};

interface LoadingStatus {
  FETCH_REPUBLICAS: boolean;
}

interface ErrorStatus {
  FETCH_REPUBLICAS: string;
}

export function republicaReducer(state: RepublicaState, action: Action): RepublicaState {
  switch (action.type) {
    case 'FETCH_REPUBLICAS_SUCCESS':
      return action.payload;

    default:
      return state;
  }
}

export function useRepublicaDispatch() {
  const fetch = useDispatch<RepublicaState>(types.FETCH_REPUBLICAS);

  return {
    fetch
  };
}

export function useRepublicaStore(): [RepublicaState, ErrorStatus, LoadingStatus] {
  const republicas = useStore('republicas');
  const [error, loading] = useStatus(types);

  return [republicas, error, loading];
}
