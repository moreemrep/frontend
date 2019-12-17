/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { LocationIq } from 'src/locationiq';

const locationiq = new LocationIq({
  // eslint-disable-next-line no-undef,
  key: process.env.REACT_APP_LOCATION_IQ!
});

export function useGeocode(endereco: string | null) {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!endereco || endereco.length < 5 || loading) return;
    setLoading(true);
    locationiq
      .search(endereco)
      .then(data => {
        if (!data.results || !data.results[0] || !data.results[0].lat || !data.results[0].lon) return;
        setLocation({ latitude: data.results[0].lat, longitude: data.results[0].lon });
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [endereco]);

  return {
    location,
    error,
    loading
  };
}
