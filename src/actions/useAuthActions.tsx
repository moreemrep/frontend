import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'relay-hooks'
import { useAuthDispatch } from 'src/store/reducers/auth-reducer'
import { CriarRepublicaInput, ResponsePayload } from 'src/generated/graphql'
import { Payload } from 'src/types/types'

const MUTATION_REGISTER = graphql`
  mutation useAuthActionsRegisterMutation($input: CriarRepublicaInput!) {
    payload: criarRepublica(input: $input) {
      success
      error
    }
  }
`

export function useAuthActions() {
  const { login, register, forgotPassword } = useAuthDispatch()
  const [registerMutation] = useMutation(MUTATION_REGISTER)

  return {
    login: async ({ email, password }: any) => {
      try {
        login.request()

        setTimeout(() => {
          login.success({ email: 'a@a.com', republica: 'batcaverna' })
        }, 2000)
      } catch (err) {
        login.failure(err.message)
      }
    },

    register: async (input: CriarRepublicaInput) => {
      try {
        register.request()

        const { payload }: Payload<ResponsePayload> = await registerMutation({ variables: { input } })

        if (payload.error) {
          register.failure(payload.error)
          return false
        }

        register.success({ email: 'a@a.com', republica: 'batcaverna' })
        return true
      } catch (err) {
        register.failure(err.message)
        return false
      }
    },

    forgotPassword: async ({ email }: any) => {
      try {
        forgotPassword.request()

        setTimeout(() => {
          forgotPassword.success()
        }, 2000)
      } catch (err) {
        forgotPassword.failure(err.message)
      }
    }
  }
}
