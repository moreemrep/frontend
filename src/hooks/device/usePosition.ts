import { useState, useEffect } from 'react';

export const usePosition = (status: boolean) => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState('');

  const onChange = ({ coords }: Position) => {
    setPosition({ latitude: coords.latitude, longitude: coords.longitude });
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
  return { position, error };
};
