import { useRepublicaDispatch } from '../store/reducers/republicas-reducer'

export function useRepublicaActions () {
  const { fetch } = useRepublicaDispatch()

  return {
    fetchRepublicas: async () => {
      try {
        fetch.request()

        setTimeout(()=>{
          fetch.success([{ nome: 'asd' },{ nome: 'ddd' }])
        }, 2000)

      } catch (err) {
        fetch.failure(err.message)
      }
    }
  }
}