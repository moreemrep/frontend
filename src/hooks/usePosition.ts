import { useState, useEffect } from 'react'

export const usePosition = () => {
  const [position, setPosition] = useState([0, 0])
  const [error, setError] = useState('')

  const onChange = ({ coords }: Position) => {
    setPosition([coords.latitude, coords.longitude])
  }
  const onError = (error: PositionError) => {
    setError(error.message)
  }

  useEffect(() => {
    const geo = navigator.geolocation
    if (!geo) {
      setError('Geolocation is not supported')
      return
    }
    const watcher = geo.watchPosition(onChange, onError)
    return () => geo.clearWatch(watcher)
  }, [])
  return { position, error }
}
