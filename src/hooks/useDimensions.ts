import { useState, useEffect } from 'react'

export function useDimensions() {
  function getWindowDimensions() {
    return { width: window.innerWidth, height: window.innerHeight }
  }
  const [dimensions, setDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function updateWindowDimensions() {
      setDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  return dimensions
}
