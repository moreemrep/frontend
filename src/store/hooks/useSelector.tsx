import { State } from '../initialState';
import { useContext, useMemo } from 'react';
import { StateContext } from '../StoreProvider';

export function useSelector<T>(selector: (state: State) => T) {
  const state: State = useContext(StateContext);
  return useMemo(() => selector(state), [selector(state)]);
}
