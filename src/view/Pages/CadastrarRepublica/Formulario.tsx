import React, { useState } from 'react';
import { useAuthActions } from 'src/actions/useAuthActions';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { Tipo } from 'src/generated/graphql';
import { Formik } from 'formik';
import { Input } from 'src/view/Componentes/input';
import { object, string } from 'yup';
import Map, { MapClickEvent } from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { useDimensions } from 'src/hooks/useDimensions';
import { useLocation } from 'react-router';
import { usePosition } from 'src/hooks/usePosition';

export const CadastrarRepublicaForm = () => {
  const [geolocation, setGeolocation] = useState(false);

  function toggleGeolocation() {
    setGeolocation(!geolocation);
  }

  if (geolocation) return <FormWithLocation toggleGeolocation={toggleGeolocation} />;

  return <FormWithoutLocation toggleGeolocation={toggleGeolocation} />;
};

export const Formulario = ({ toggleGeolocation, location }: any) => {
  const { register } = useAuthActions();
  const [, error, loading] = useAuthStore();

  return (
    <Formik
      initialValues={{
        nome: '',
        tipo: Tipo.Mista,
        descricao: '',
        disponivel: false,
        endereco: '',
        mostrarNoMapa: true,
        longitude: 0,
        latitude: 0
      }}
      validationSchema={object().shape({
        nome: string().required('obrigatório')
      })}
      onSubmit={async (values, helpers) => {
        const { resetForm } = helpers;
        if (
          await register({
            descricao: values.descricao,
            disponivel: values.disponivel,
            endereco: values.endereco,
            localizacao: [values.longitude, values.latitude],
            mostrarNoMapa: values.mostrarNoMapa,
            nome: values.nome,
            tipo: values.tipo
          })
        ) {
          resetForm();
        }
      }}
      render={helpers => {
        const { setFieldValue, values } = helpers;

        if (loading.REGISTER) return <div>loading</div>;

        function onMapClick(ev: MapClickEvent) {
          setFieldValue('latitude', ev.latLng[0]);
          setFieldValue('longitude', ev.latLng[1]);
        }
        console.log({ values });
        const center =
          values.longitude !== 0 && values.latitude !== 0
            ? [values.latitude, values.longitude]
            : location || [values.latitude, values.longitude];
        return (
          <div>
            {error.REGISTER}
            <Input name="nome" label="Nome da republica" />
            <Input name="descricao" label="Descrição" />
            {!location && (
              <div>
                <Input name="longitude" label="longitude" />
                <Input name="latitude" label="latitude" />
              </div>
            )}
            <button onClick={toggleGeolocation}>{location ? 'desligar' : 'ligar'}</button>
            <Map onClick={onMapClick} center={center} zoom={15} width={300} height={400}>
              <Marker anchor={center} />
            </Map>
            <button onClick={() => helpers.handleSubmit()} type="submit">
              Submit
            </button>
          </div>
        );
      }}
    />
  );
};

const FormWithLocation = ({ toggleGeolocation }: any) => {
  const { position } = usePosition();

  return <Formulario location={position} toggleGeolocation={toggleGeolocation} />;
};

const FormWithoutLocation = ({ toggleGeolocation }: any) => {
  return <Formulario toggleGeolocation={toggleGeolocation} />;
};
