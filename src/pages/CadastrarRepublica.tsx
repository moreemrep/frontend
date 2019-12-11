import React from 'react'
import { useAuthActions } from '../actions/useAuthActions';
import { useAuthStore } from '../store/reducers/auth-reducer';
import { Tipo } from '../generated/graphql';

export const CadastrarRepublica: React.FC = () => {
  const { register } = useAuthActions()
  const [, error, loading] = useAuthStore()

  if (loading.REGISTER) return <div>loading...</div>

  return (
    <div>
      {error.REGISTER}
      <button onClick={()=>{
        register({ 
          descricao: "asd", 
          disponivel: true,
          endereco: 'sad',
          localizacao: [1, 2],
          nome: 'asd',
          tipo: Tipo.Masculina
        })
      }}>
       Cadastrar
      </button>
    </div>
  )
}
