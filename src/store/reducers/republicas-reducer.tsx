import { useDispatch } from '../hooks/useDispatch'
import { Action } from '../StoreProvider'
import { useStore } from '../hooks/useStore'
import { RepublicaPayload } from '../../generated/graphql'

export const initialState: Array<RepublicaPayload> = []

const types = {
  FETCH_REPUBLICAS: 'FETCH_REPUBLICAS'
}

export function republicaReducer(state: Array<RepublicaPayload>, action: Action) {
  switch (action.type) {
    case 'FETCH_REPUBLICAS_SUCCESS':
      return action.payload

    default:
      return state
  }
}

export function useRepublicaDispatch() {
  const fetch = useDispatch<Array<RepublicaPayload>>(types.FETCH_REPUBLICAS)

  return {
    fetch
  }
}

export function useRepublicaStore() {
  return useStore('republicas', types)
}
