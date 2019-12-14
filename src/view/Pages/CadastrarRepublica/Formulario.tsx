import React from 'react'
import { useAuthActions } from 'src/actions/useAuthActions'
import { useAuthStore } from 'src/store/reducers/auth-reducer'
import { Tipo } from 'src/generated/graphql'
import { Formik } from 'formik'
import { Input } from 'src/view/Componentes/input'
import { object, string } from 'yup'
import Map from 'pigeon-maps'
import { usePosition } from 'src/hooks/usePosition'

export const CadastrarRepublicaForm: React.FC = () => {
  const { register } = useAuthActions()
  const [, error, loading] = useAuthStore()
  const { position } = usePosition()

  return (
    <Formik
      initialValues={{
        nome: '',
        tipo: Tipo.Mista,
        descricao: '',
        disponivel: false,
        endereco: '',
        localizacao: [0, 0]
      }}
      validationSchema={object().shape({
        nome: string().required('obrigatório')
      })}
      onSubmit={async (values, helpers) => {
        const { resetForm } = helpers
        console.log(values)
        if (await register(values)) {
          resetForm()
        }
      }}
      render={helpers => {
        if (loading.REGISTER) return <div>loading</div>

        return (
          <div>
            {error.REGISTER}
            <Input name="nome" label="Nome da republica" />
            <Input name="descricao" label="Descrição" />
            <Map
              onClick={ev => {
                helpers.setFieldValue('localizacao', ev.latLng)
              }}
              center={position}
              zoom={15}
              width={600}
              height={400}
            />

            <button onClick={() => helpers.handleSubmit()} type="submit">
              Submit
            </button>
          </div>
        )
      }}
    />
  )
}
