import { useState, useEffect } from 'react';

export const usePosition = (cb: (pos: Coordinates) => void): [() => void, boolean, string] => {
  const [error, setError] = useState('');
  const [status, setStatus] = useState(false);

  const toggleStatus = () => setStatus(!status);

  const onChange = ({ coords }: Position) => {
    cb(coords);
    toggleStatus();
  };

  const onError = (error: PositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!status) return;

    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, [status]);

  return [toggleStatus, status, error];
};
