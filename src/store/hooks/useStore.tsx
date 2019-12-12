import { useContext, useMemo } from 'react'
import { StateContext } from '../StoreProvider'
import { State } from '../initialState'

export const useStore = <K extends keyof State>(
  property: K,
  types: any
): [State[K], any, any] => {
  const state = useContext(StateContext)

  const requiredState = useMemo(() => {
    return state[property]
  }, [state[property]])

  const error = useMemo(() => {
    const error: any = {}
    Object.keys(types).forEach(type => (error[type] = state.error[type]))
    return error
  }, [...Object.keys(types).map(type => state.error[type])])

  const loading = useMemo(() => {
    const loading: any = {}
    Object.keys(types).forEach(type => (loading[type] = state.loading[type]))
    return loading
  }, [...Object.keys(types).map(type => state.loading[type])])

  return [requiredState, error, loading]
}
