import { Action } from '../StoreProvider'

export const initialState = {}

export const loadingReducer = (state: any, action: Action) => {
  const { type } = action

  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)

  if (!matches) return state

  const [, requestName, requestState] = matches

  return {
    ...state,

    [requestName]: requestState === 'REQUEST'
  }
}
