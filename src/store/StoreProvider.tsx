import React, { createContext, useReducer, Dispatch, Reducer } from 'react'
import { State } from './initialState'

export interface Action {
  type: string
  payload?: any
}

export const StateContext = createContext({} as State)

export const DispatchContext = createContext({} as Dispatch<Action>)

interface StoreProviderProps {
  store: {
    reducer: Reducer<State, Action>
    initialState: State
  }
  children: any
}

export function StoreProvider ({ store, children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(store.reducer, store.initialState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}