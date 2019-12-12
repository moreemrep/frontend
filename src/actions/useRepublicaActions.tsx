import { useRepublicaDispatch } from '../store/reducers/republicas-reducer'
import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'relay-hooks'
import { ProcurarRepublicaInput, ProcurarRepublicaPayload } from '../generated/graphql'
import { Payload } from '../generated/types'

const MUTATION_FETCH_REPUBLICA = graphql`
  mutation useRepublicaActionsProcurarRepublicaMutation($input: ProcurarRepublicaInput!) {
    payload: procurarRepublica(input: $input) {
      success
      error
      republicas {
        nome
        distancia
        descricao
      }
    }
  }
`

export function useRepublicaActions() {
  const { fetch } = useRepublicaDispatch()
  const [fetchRepublicaMutation] = useMutation(MUTATION_FETCH_REPUBLICA)

  return {
    fetchRepublicas: async (input: ProcurarRepublicaInput) => {
      try {
        fetch.request()

        const { payload }: Payload<ProcurarRepublicaPayload> = await fetchRepublicaMutation({ variables: { input } })

        if (payload.error) {
          fetch.failure(payload.error)
          return false
        }

        fetch.success(payload.republicas)
      } catch (err) {
        fetch.failure(err.message)
      }
    }
  }
}
