import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { ProcurarUniversidadeInput, ProcurarUniversidadePayload } from 'src/generated/graphql';
import { Payload } from 'src/types/types';
import { useUniversidadeDispatch } from 'src/store/reducers/universidades-reducer';

const MUTATION_FETCH_UNIVERSIDADE = graphql`
  mutation useUniversidadeActionsProcurarUniversidadeMutation($input: ProcurarUniversidadeInput!) {
    payload: procurarUniversidade(input: $input) {
      success
      error
      universidades {
        id
        nome
        sigla
      }
    }
  }
`;

export function useUniversidadeActions() {
  const { fetch } = useUniversidadeDispatch();
  const [fetchUniversidadeMutation] = useMutation(MUTATION_FETCH_UNIVERSIDADE);

  return {
    fetchUniversidades: (input: ProcurarUniversidadeInput) =>
      fetch(async () => {
        const { payload }: Payload<ProcurarUniversidadePayload> = await fetchUniversidadeMutation({
          variables: { input }
        });

        if (payload.error) {
          throw new Error(payload.error);
        }

        return payload.universidades;
      })
  };
}
