import { useRepublicaDispatch } from '../store/reducers/republicas-reducer';
import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { ProcurarRepublicaInput, ProcurarRepublicaPayload } from 'src/generated/graphql';
import { Payload } from 'src/types/types';

const MUTATION_FETCH_REPUBLICA = graphql`
  mutation useRepublicaActionsProcurarRepublicaMutation($input: ProcurarRepublicaInput!) {
    payload: procurarRepublica(input: $input) {
      success
      error
      republicas {
        nome
        distancia
        descricao
        localizacao {
          latitude
          longitude
        }
      }
      centro {
        latitude
        longitude
      }
    }
  }
`;

export function useRepublicaActions() {
  const { fetch } = useRepublicaDispatch();
  const [fetchRepublicaMutation] = useMutation(MUTATION_FETCH_REPUBLICA);

  return {
    fetchRepublicas: (input: ProcurarRepublicaInput) =>
      fetch(async () => {
        const { payload }: Payload<ProcurarRepublicaPayload> = await fetchRepublicaMutation({ variables: { input } });

        if (payload.error) {
          throw new Error(payload.error);
        }

        return payload;
      })
  };
}
