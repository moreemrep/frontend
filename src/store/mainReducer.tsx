import { Action } from './StoreProvider'
import { loadingReducer } from './reducers/loading-reducer'
import { errorReducer } from './reducers/error-reducer'
import { republicaReducer } from './reducers/republicas-reducer'
import { State } from './initialState';

export const reducer = (state: State, action: Action) => {
  return {
    loading: loadingReducer(state.loading, action),
    error: errorReducer(state.error, action),
    republicas: republicaReducer(state.republicas, action)
  }
}