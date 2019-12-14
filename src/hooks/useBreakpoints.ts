import { useMedia } from './useMedia'

export function useBreakpoints() {
  const small = useMedia('(max-width: 599px)')
  const medium = useMedia('(min-width: 600px) and (max-width: 999px)')
  const large = useMedia('(min-width: 1000px)')

  return { small, medium, large }
}
