import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { useAuthDispatch } from 'src/store/reducers/auth-reducer';
import {
  CriarRepublicaInput,
  CriarRepublicaPayload,
  LoginPayload,
  EditarRepublicaInput,
  ResponsePayload
} from 'src/generated/graphql';
import { Payload } from 'src/types/types';
import { useFirebase } from 'src/services/useFirebase';

const MUTATION_REGISTER = graphql`
  mutation useAuthActionsRegisterMutation($input: CriarRepublicaInput!) {
    payload: criarRepublica(input: $input) {
      success
      error
      republica {
        nome
        disponivel
        endereco
        localizacao {
          latitude
          longitude
        }
        mostrarNoMapa
        tipo
      }
    }
  }
`;

const MUTATION_EDIT = graphql`
  mutation useAuthActionsEditarMutation($input: EditarRepublicaInput!) {
    payload: editarRepublica(input: $input) {
      success
      error
    }
  }
`;

const MUTATION_LOGIN = graphql`
  mutation useAuthActionsLoginMutation {
    payload: login {
      success
      error
      republica {
        nome
        disponivel
        endereco
        descricao
        localizacao {
          latitude
          longitude
        }
        mostrarNoMapa
        tipo
      }
    }
  }
`;

interface RegistrarInput {
  email: string;
  senha: string;
}

export function useAuthActions() {
  const { login, register, edit, forgotPassword, logout } = useAuthDispatch();
  const [registerMutation] = useMutation(MUTATION_REGISTER);
  const [loginMutation] = useMutation(MUTATION_LOGIN);
  const [editMutation] = useMutation(MUTATION_EDIT);
  const { auth } = useFirebase();

  return {
    login: ({ email, senha }: RegistrarInput) =>
      login(async () => {
        const res = await auth.signInWithEmailAndPassword(email, senha);

        if (!res.user) throw new Error('erou');

        const { payload }: Payload<LoginPayload> = await loginMutation({ variables: {} });

        if (payload.error) throw new Error(payload.error);

        return {
          email,
          republica: payload.republica
        };
      }),

    loginFirebase: (email: string) =>
      login(async () => {
        const { payload }: Payload<LoginPayload> = await loginMutation({ variables: {} });
        console.log({ payload });
        if (payload.error) throw new Error(payload.error);

        return {
          email,
          republica: payload.republica
        };
      }),

    register: (republica: CriarRepublicaInput, crendenciais: RegistrarInput) =>
      register(async () => {
        const res = await auth.createUserWithEmailAndPassword(crendenciais.email, crendenciais.senha);
        if (!res.user) {
          throw new Error('erou');
        }
        const { payload }: Payload<CriarRepublicaPayload> = await registerMutation({
          variables: { input: republica }
        });

        if (payload.error || !payload.republica) {
          await res.user.delete();
          throw Error(payload.error || 'nao foi possivel criar');
        }
        return {
          email: crendenciais.email,
          republica: payload.republica
        };
      }),

    edit: (input: EditarRepublicaInput) =>
      edit(async () => {
        const { payload }: Payload<ResponsePayload> = await editMutation({
          variables: { input }
        });

        if (payload.error) {
          throw Error(payload.error);
        }
        return input;
      }),

    forgotPassword: async (email: string) =>
      forgotPassword(async () => {
        await auth.sendPasswordResetEmail(email);
        return;
      }),

    logout: () =>
      logout(async () => {
        await auth.signOut();
        return;
      })
  };
}
