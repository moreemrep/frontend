/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { useAuthDispatch } from 'src/store/reducers/auth-reducer';
import { CriarRepublicaInput, ResponsePayload, CriarRepublicaPayload, LoginPayload } from 'src/generated/graphql';
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
    login: async ({ email, password }: any) => {
      login.request();
      try {
        const res = await auth.signInWithEmailAndPassword(email, password);

        if (!res.user) throw new Error('erou');

        const { payload }: Payload<LoginPayload> = await loginMutation({ variables: {} });

        login.success({
          email,
          republica: payload.republica
        });
      } catch (err) {
        login.failure(err.message);
      }
    },

    loginFirebase: async (email: string) => {
      try {
        login.request();

        const { payload }: Payload<LoginPayload> = await loginMutation({ variables: {} });

        login.success({
          email,
          republica: payload.republica
        });
      } catch (err) {
        login.failure(err.message);
      }
    },

    register: async (republica: CriarRepublicaInput, crendenciais: RegistrarInput) => {
      try {
        register.request();

        const res = await auth.createUserWithEmailAndPassword(crendenciais.email, crendenciais.senha);
        if (!res.user) {
          throw new Error('erou');
        }

        const { payload }: Payload<CriarRepublicaPayload> = await registerMutation({ variables: { input: republica } });

        if (payload.error || !payload.republica) {
          register.failure(payload.error || 'Republica nao encontrada');
          return false;
        }

        register.success({
          email: crendenciais.email,
          republica: payload.republica
        });
        return true;
      } catch (err) {
        register.failure(err.message);
        return false;
      }
    },

    forgotPassword: async ({ email }: any) => {
      try {
        forgotPassword.request();

        setTimeout(() => {
          forgotPassword.success('');
        }, 2000);
      } catch (err) {
        forgotPassword.failure(err.message);
      }
    },

    logout: async () => {
      await auth.signOut();
      logout();
    }
  };
}
