import React from 'react'
import { useAuthActions } from '../actions/useAuthActions';
import { useAuthStore } from '../store/reducers/auth-reducer';

export const CadastrarRepublica: React.FC = () => {
  const { register } = useAuthActions()
  const [, error, loading] = useAuthStore()

  if (loading.REGISTER) return <div>loading...</div>

  return (
    <div>
      {error.REGISTER}
      <button onClick={()=>register({email: 'asd', password: 'dd', republica: 'bat'})}>
       Cadastrar
      </button>
    </div>
  )
}
