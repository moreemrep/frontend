import { Action } from './StoreProvider'
import { loadingReducer } from './reducers/loading-reducer'
import { errorReducer } from './reducers/error-reducer'
import { State } from './initialState';

import { republicaReducer } from './reducers/republicas-reducer'
import { authReducer } from './reducers/auth-reducer'

export const reducer = (state: State, action: Action) => {
  return {
    loading: loadingReducer(state.loading, action),
    error: errorReducer(state.error, action),
    republicas: republicaReducer(state.republicas, action),
    auth: authReducer(state.auth, action)
  }
}