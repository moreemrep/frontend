import React, { useState } from 'react'
import { useAuthActions } from 'src/actions/useAuthActions'
import { useAuthStore } from 'src/store/reducers/auth-reducer'
import { Tipo } from 'src/generated/graphql'
import { Formik } from 'formik'
import { Input } from 'src/view/Componentes/input'
import { object, string } from 'yup'
import Map, { MapClickEvent } from 'pigeon-maps'
import Marker from 'pigeon-marker'
import { useDimensions } from 'src/hooks/useDimensions'

export const CadastrarRepublicaForm: React.FC = () => {
  const { register } = useAuthActions()
  const [, error, loading] = useAuthStore()
  const { width } = useDimensions()
  const [geolocation, setGeolocation] = useState(false)

  function toggleGeolocation() {
    setGeolocation(!geolocation)
  }

  return (
    <Formik
      initialValues={{
        nome: '',
        tipo: Tipo.Mista,
        descricao: '',
        disponivel: false,
        endereco: '',
        localizacao: [-23.1878, -50.6519]
      }}
      validationSchema={object().shape({
        nome: string().required('obrigatório')
      })}
      onSubmit={async (values, helpers) => {
        const { resetForm } = helpers
        if (await register(values)) {
          resetForm()
        }
      }}
      render={helpers => {
        const { setFieldValue, values } = helpers

        if (loading.REGISTER) return <div>loading</div>

        function onMapClick(ev: MapClickEvent) {
          setFieldValue('localizacao', ev.latLng)
        }

        return (
          <div>
            {error.REGISTER}
            <Input name="nome" label="Nome da republica" />
            <Input name="descricao" label="Descrição" />
            <button onClick={toggleGeolocation}>ligar</button>
            {values.localizacao[0]},{values.localizacao[1]}
            {values.localizacao[0] !== 0 && values.localizacao[1] !== 0 && (
              <Map onClick={onMapClick} center={values.localizacao} zoom={15} width={width} height={400}>
                <Marker anchor={values.localizacao} />
              </Map>
            )}
            <button onClick={() => helpers.handleSubmit()} type="submit">
              Submit
            </button>
          </div>
        )
      }}
    />
  )
}
