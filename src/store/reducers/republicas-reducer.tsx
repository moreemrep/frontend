import { useDispatch } from "../hooks/useDispatch"
import { Action } from "../StoreProvider"
import { useStore } from "../hooks/useStore"

export interface Republica {
  nome: string
}

export const initialState: Array<Republica> = []

const types = {
  FETCH_REPUBLICAS: 'FETCH_REPUBLICAS'
}

export function republicaReducer (state: Array<Republica>, action: Action) {
  switch (action.type) {
    case 'FETCH_REPUBLICAS_SUCCESS':
      return action.payload

    default:
      return state
  }
}

export function useRepublicaDispatch () {
  const fetch = useDispatch<Array<Republica>>(types.FETCH_REPUBLICAS)

  return {
    fetch
  }

}

export function useRepublicaStore(){
  return useStore('republicas', types)
}