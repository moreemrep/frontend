import React from 'react'
import { useAuthActions } from 'src/actions/useAuthActions'
import { useAuthStore } from 'src/store/reducers/auth-reducer'
import { Tipo } from 'src/generated/graphql'

const CadastrarRepublicaPage: React.FC = () => {
  const { register } = useAuthActions()
  const [, error, loading] = useAuthStore()

  if (loading.REGISTER) return <div>loading...</div>

  return (
    <div>
      {error.REGISTER}
      <button
        onClick={() => {
          register({
            descricao: 'asd',
            disponivel: true,
            endereco: 'sad',
            localizacao: [1, 2],
            nome: 'asd',
            tipo: Tipo.Masculina
          })
        }}
      >
        Cadastrar
      </button>
    </div>
  )
}

export default CadastrarRepublicaPage
