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
        disponivel: false,
        endereco: '',
        mostrarNoMapa: true,
        longitude: 0,
        latitude: 0,
        email: '',
        senha: '',
        cidade: '',
        estado: ''
      }}
      validationSchema={object().shape({
        nome: string().required('obrigatório')
      })}
      onSubmit={async (values, helpers) => {
        if (
          await register(
            {
              disponivel: values.disponivel,
              endereco: values.endereco,
              localizacao: [values.longitude, values.latitude],
              mostrarNoMapa: values.mostrarNoMapa,
              nome: values.nome,
              tipo: values.tipo,
              descricao: ''
              // cidade: values.cidade,
              // estado: values.estado
            },
            {
              email: values.email,
              senha: values.senha
            }
          )
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

        const setValue = (nome: string, ev: any) => setFieldValue(nome, ev.target.value);

        return (
          <div>
            {error.REGISTER}
            <Form className="FormStyle" onSubmit={helpers.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="NomeRep">
                  <Form.Label>Nome da República</Form.Label>
                  <Form.Control onChange={(ev: any) => setValue('nome', ev)} type="Name" placeholder="República" />
                </Form.Group>

                <Form.Group controlId="SexoRep">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Control as="select" onChange={(ev: any) => setValue('tipo', ev)}>
                    <option>Selecione</option>
                    <option value={Tipo.Masculina}>Masculina</option>
                    <option value={Tipo.Feminina}>Feminina</option>
                    <option value={Tipo.Mista}>Mista</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={(ev: any) => setValue('email', ev)}
                    type="email"
                    placeholder="Digite o email"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="Senha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control onChange={(ev: any) => setValue('senha', ev)} type="password" placeholder="Senha" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="EnderecoRep">
                  <Form.Label>Endereço</Form.Label>
                  <Form.Control onChange={(ev: any) => setValue('endereco', ev)} placeholder="Rua:..., nº" />
                </Form.Group>

                <Form.Group as={Col} controlId="CidadeRep">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control onChange={(ev: any) => setValue('cidade', ev)} placeholder="Cidade" />
                </Form.Group>
                {/* 
                <Form.Group as={Col} controlId="EstadoRep">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control onChange={(ev: any) => setValue('estado', ev)} as="select">
                    <option>Selecione...</option>
                    <option value={Tipo.AC}>Acre (AC)</option>
                    <option value={Tipo.AL}>Alagoas (AL)</option>
                    <option value={Tipo.AP}>Amapá (AP)</option>
                    <option value={Tipo.AM}>Amazonas (AM)</option>
                    <option value={Tipo.BA}>Bahia (BA)</option>
                    <option value={Tipo.CE}>Ceará (CE)</option>
                    <option value={Tipo.DF}>Distrito Federal (DF)</option>
                    <option value={Tipo.ES}>Espírito Santo (ES)</option>
                    <option value={Tipo.GO}>Goiás (GO)</option>
                    <option value={Tipo.MA}>Maranhão (MA)</option>
                    <option value={Tipo.MT}>Mato Grosso (MT)</option>
                    <option value={Tipo.MS}>Mato Grosso do Sul (MS)</option>
                    <option value={Tipo.MG}>Minas Gerais (MG)</option>
                    <option value={Tipo.PA}>Pará (PA)</option>
                    <option value={Tipo.PB}>Paraíba (PB)</option>
                    <option value={Tipo.PR}>Paraná (PR)</option>
                    <option value={Tipo.PE}>Pernambuco (PE)</option>
                    <option value={Tipo.PI}>Piauí (PI)</option>
                    <option value={Tipo.RJ}>Rio de Janeiro (RJ)</option>
                    <option value={Tipo.RN}>Rio Grande do Norte (RN)</option>
                    <option value={Tipo.RS}>Rio Grande do Sul (RS)</option>
                    <option value={Tipo.RO}>Rondônia (RO)</option>
                    <option value={Tipo.RR}>Roraima (RR)</option>
                    <option value={Tipo.SC}>Santa Catarina (SC)</option>
                    <option value={Tipo.SP}>São Paulo (SP)</option>
                    <option value={Tipo.SE}>Sergipe (SE)</option>
                    <option value={Tipo.TO}>Tocantins (TO)</option>
                  </Form.Control>
                </Form.Group> */}
              </Form.Row>

              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </Form>
            {!location && (
              <Form className="locStyle">
                <Form.Label>Coordenadas</Form.Label>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control onChange={(ev: any) => setValue('latitude', ev)} type="Text" placeholder="Latitude" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Control
                      onChange={(ev: any) => setValue('longitude', ev)}
                      type="Text"
                      placeholder="Longitude"
                    />
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
