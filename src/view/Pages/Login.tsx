import React from 'react'
import { useAuthActions } from 'src/actions/useAuthActions'
import { useAuthStore } from 'src/store/reducers/auth-reducer'

const Login: React.FC = () => {
  const { login, forgotPassword } = useAuthActions()
  const [, error, loading] = useAuthStore()

  if (loading.LOGIN || loading.FORGOT_PASSWORD) return <div>loading...</div>

  return (
    <div>
      {error.LOGIN}
      {error.FORGOT_PASSWORD}
      <button onClick={() => login({ email: 'asd', password: 'dd' })}>Login</button>
      <button onClick={() => forgotPassword({ email: 'asd' })}>Esqueceu a senha</button>
    </div>
  )
}

export default Login