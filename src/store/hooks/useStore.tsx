import { useContext } from 'react'
import { StateContext } from '../StoreProvider'
import { State } from '../initialState';

export const useStore = <K extends keyof State>(property: K, types: any): [State[K], any, any] => {
  const state = useContext(StateContext)
  
  let error: any = {}
  let loading: any = {}

  Object.keys(types).forEach(type => {
    error[type] = state.error[type] || ''
    loading[type] = state.loading[type] || false
  })

  return [ state[property], error, loading ]
}
