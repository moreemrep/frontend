import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { useAuthDispatch } from 'src/store/reducers/auth-reducer';
import { CriarRepublicaInput, CriarRepublicaPayload, LoginPayload } from 'src/generated/graphql';
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
        localizacao
        mostrarNoMapa
        tipo
      }
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
        localizacao
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
  const { login, register, forgotPassword, logout } = useAuthDispatch();
  const [registerMutation] = useMutation(MUTATION_REGISTER);
  const [loginMutation] = useMutation(MUTATION_LOGIN);
  const { auth } = useFirebase();

  return {
    login: async ({ email, senha }: RegistrarInput) =>
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

    loginFirebase: async (email: string) =>
      login(async () => {
        const { payload }: Payload<LoginPayload> = await loginMutation({ variables: {} });

        if (payload.error) throw new Error(payload.error);

        return {
          email,
          republica: payload.republica
        };
      }),

    register: async (republica: CriarRepublicaInput, crendenciais: RegistrarInput) =>
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

    forgotPassword: async (email: string) =>
      forgotPassword(async () => {
        await auth.sendPasswordResetEmail(email);
        return;
      }),

    logout: async () =>
      logout(async () => {
        await auth.signOut();
        return;
      })
  };
}
