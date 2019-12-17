import { useContext, useMemo } from 'react';
import { StateContext } from '../StoreProvider';
import { State } from '../initialState';

export function useStore<K extends keyof State>(property: K): State[K] {
  const state = useContext(StateContext);

  const requiredState = useMemo(() => {
    return state[property];
  }, [state[property]]);

  return requiredState;
}

function useLoading<T>(types: any): T {
  const state = useContext(StateContext);

  const loading: T = useMemo(() => {
    const loading: any = {};
    Object.keys(types).forEach(type => (loading[type] = state.loading[type]));
    return loading;
  }, [...Object.keys(types).map(type => state.loading[type])]);

  return loading;
}

function useError<T>(types: any): T {
  const state = useContext(StateContext);

  const error = useMemo(() => {
    const error: any = {};
    Object.keys(types).forEach(type => (error[type] = state.error[type]));
    return error;
  }, [...Object.keys(types).map(type => state.error[type])]);

  return error;
}

export function useStatus<T>(types: any): [T, T] {
  const error = useError<T>(types);
  const loading = useLoading<T>(types);

  return [error, loading];
}
