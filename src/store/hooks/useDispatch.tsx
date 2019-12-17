import { useContext } from 'react';
import { DispatchContext } from '../StoreProvider';

export function useDispatch<T>(type: string) {
  const dispatch = useContext(DispatchContext);

  const request = async (cb: () => Promise<T>) => {
    try {
      dispatch({ type: type + '_REQUEST' });

      const payload = await cb();

      dispatch({
        type: type + '_SUCCESS',
        payload: payload
      });

      return true;
    } catch (err) {
      dispatch({
        type: type + '_FAILURE',
        payload: err.message
      });

      return false;
    }
  };

  return request;
}
