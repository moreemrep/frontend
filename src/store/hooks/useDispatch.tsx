import { useContext } from 'react'
import { DispatchContext } from '../StoreProvider'

export function useDispatch<T>(type: string) {
  const dispatch = useContext(DispatchContext)

  const request = () => dispatch({ type: type + '_REQUEST' })

  const success = (payload: T) =>
    dispatch({
      type: type + '_SUCCESS',
      payload: payload
    })

  const failure = (error: string) =>
    dispatch({
      type: type + '_FAILURE',
      payload: error
    })

  return { request, success, failure }
}
