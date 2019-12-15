import React, { useState } from 'react';
import { useAuthActions } from 'src/actions/useAuthActions';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { Tipo } from 'src/generated/graphql';
import { Formik } from 'formik';
import { object, string } from 'yup';
import Map, { MapClickEvent } from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { usePosition } from 'src/hooks/usePosition';
import { Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

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
  const { push } = useHistory();

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
          push('home');
        }
      }}
      render={helpers => {
        const { setFieldValue, values } = helpers;

        if (loading.REGISTER) return <div>loading</div>;

        function onMapClick(ev: MapClickEvent) {
          setFieldValue('latitude', ev.latLng[0]);
          setFieldValue('longitude', ev.latLng[1]);
        }
        const center =
          values.longitude !== 0 && values.latitude !== 0
            ? [values.latitude, values.longitude]
            : location || [values.latitude, values.longitude];
        return (
          <div>
            {error.REGISTER}
            <Form className="FormStyle" onSubmit={helpers.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Digite o email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Endereço</Form.Label>
                  <Form.Control placeholder="Rua:..., nº" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control as="select">
                    <option>Selecione...</option>
                    <option>Acre (AC)</option>
                    <option>Alagoas (AL)</option>
                    <option>Amapá (AP)</option>
                    <option>Amazonas (AM)</option>
                    <option>Bahia (BA)</option>
                    <option>Ceará (CE)</option>
                    <option>Distrito Federal (DF)</option>
                    <option>Espírito Santo (ES)</option>
                    <option>Goiás (GO)</option>
                    <option>Maranhão (MA)</option>
                    <option>Mato Grosso (MT)</option>
                    <option>Mato Grosso do Sul (MS)</option>
                    <option>Minas Gerais (MG)</option>
                    <option>Pará (PA)</option>
                    <option>Paraíba (PB)</option>
                    <option>Paraná (PR)</option>
                    <option>Pernambuco (PE)</option>
                    <option>Piauí (PI)</option>
                    <option>Rio de Janeiro (RJ)</option>
                    <option>Rio Grande do Norte (RN)</option>
                    <option>Rio Grande do Sul (RS)</option>
                    <option>Rondônia (RO)</option>
                    <option>Roraima (RR)</option>
                    <option>Santa Catarina (SC)</option>
                    <option>São Paulo (SP)</option>
                    <option>Sergipe (SE)</option>
                    <option>Tocantins (TO)</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Masculina" />
                <Form.Check type="checkbox" label="Feminina" />
                <Form.Check type="checkbox" label="Mista" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {!location && (
              <Form className="locStyle">
                <Form.Label>Coordenadas</Form.Label>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control type="Text" placeholder="Latitude" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Control type="Text" placeholder="Longitude" />
                  </Form.Group>
                </Form.Row>
                <a href="https://justgetflux.com/map.html" target="blank">
                  Descobrir coordenadas da Rep
                </a>
              </Form>
            )}
            <button onClick={toggleGeolocation}>{location ? 'desligar' : 'ligar'}</button>
            <Map onClick={onMapClick} center={center} zoom={15} width={300} height={400}>
              <Marker anchor={center} />
            </Map>
            <button type="submit">Submit</button>
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
