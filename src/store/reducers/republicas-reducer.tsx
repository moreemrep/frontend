/* eslint-disable no-case-declarations */
import { useDispatch } from '../hooks/useDispatch';
import { Action } from '../StoreProvider';
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

export interface LoadingStatusRepublica {
  FETCH_REPUBLICAS?: boolean;
}

export interface ErrorStatusRepublica {
  FETCH_REPUBLICAS?: string;
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
