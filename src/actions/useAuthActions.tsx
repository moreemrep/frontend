import { useAuthDispatch } from "../store/reducers/auth-reducer";

export function useAuthActions () {
  const { login, register, resetPassword } = useAuthDispatch()

  return {
    login: async ({ email, password }: any) => {
      try {
        login.request()

        setTimeout(()=>{
          login.success({ email: 'a@a.com', republica: 'batcaverna' })
        }, 2000)

      } catch (err) {
        login.failure(err.message)
      }
    },

    register: async ({ email, password, republica }: any) => {
      try {
        register.request()

        setTimeout(()=>{
          register.success({ email: 'a@a.com', republica: 'batcaverna' })
        }, 2000)

      } catch (err) {
        register.failure(err.message)
      }
    },

    resetPassword: async ({ email }: any) => {
      try {
        resetPassword.request()

        setTimeout(()=>{
          resetPassword.success(null)
        }, 2000)

      } catch (err) {
        resetPassword.failure(err.message)
      }
    }
  }
}