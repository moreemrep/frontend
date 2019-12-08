import { Action } from "../StoreProvider"

export const initialState = {}

export const errorReducer = (state: any, action: Action) => {
  const { type, payload } = action

  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)

  if (!matches) return state

  const [, requestName, requestState] = matches

  switch (requestState) {
    case 'FAILURE':
      return {
        ...state,
        [requestName]: payload
      }

    default:
      return {
        ...state,
        [requestName]: ''
      }
  }
}