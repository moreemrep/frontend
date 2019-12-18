import React, { useState, useEffect } from 'react';
import { useAuthActions } from 'src/actions/useAuthActions';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { Tipo } from 'src/generated/graphql';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Map, { MapClickEvent } from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { usePosition } from 'src/hooks/device/usePosition';
import { Form, Col, Row, Button, Container, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useGeocode } from 'src/services/useGeocode';
import useDebounce from 'src/hooks/useDebounce';

export const CadastrarRepublicaForm = () => {
  const { register } = useAuthActions();
  const [, error, loading] = useAuthStore();
  const { push } = useHistory();
  const { setFieldValue, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
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
    },
    validationSchema: object().shape({
      nome: string().required('obrigatório')
    }),
    onSubmit: async (values, helpers) => {
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
          },
          {
            email: values.email,
            senha: values.senha
          }
        )
      ) {
        push('editar');
      }
    }
  });

  const endereco = useDebounce(values.endereco, 500);
  const [gps, setGps] = useState(false);
  const { location, loading: loadingGeo, error: errorGeo } = useGeocode(endereco);
  const { position, error: errorGps } = usePosition(gps);

  useEffect(() => {
    if (!location) return;
    setFieldValue('latitude', location.latitude);
    setFieldValue('longitude', location.longitude);
  }, [location]);

  useEffect(() => {
    if (!position) return;
    setFieldValue('latitude', position.latitude);
    setFieldValue('longitude', position.longitude);
    setGps(false);
  }, [position]);

  // if (loading.REGISTER) return <div>loading</div>;

  function onMapClick(ev: MapClickEvent) {
    setFieldValue('latitude', ev.latLng[0]);
    setFieldValue('longitude', ev.latLng[1]);
  }

  function toggleGps() {
    setGps(!gps);
  }

  return (
    <div>
      {error.REGISTER}
      {loading.REGISTER && 'loading'}
      
      <Form className="FormStyle" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="NomeRep">
            <Form.Label>Nome da República</Form.Label>
            <Form.Control name="nome" onChange={handleChange} type="Name" placeholder="República" />
          </Form.Group>

          <Form.Group controlId="SexoRep">
            <Form.Label>Tipo</Form.Label>
            <Form.Control name="tipo" as="select" onChange={handleChange}>
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
            <Form.Control name="email" onChange={handleChange} type="email" placeholder="Digite o email" />
          </Form.Group>

          <Form.Group as={Col} controlId="Senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control name="senha" onChange={handleChange} type="password" placeholder="Mínimo 6 digitos" />
          </Form.Group>
        </Form.Row>

        {/* <Form.Row>
          <Form.Group as={Col} controlId="EnderecoRep">
            <Form.Label>Endereço{loadingGeo && '(carregando)'}</Form.Label>
            <Form.Control name="endereco" onChange={handleChange} placeholder="Rua:..., nº" />
          </Form.Group>
        </Form.Row> */}
          <Row>
          <Form.Group as={Col} controlId="Contato" className="telStyle">
            <Form.Label>Contato</Form.Label>
            <Form.Control name="contato" onChange={handleChange} type="text" placeholder="(DDD) + Número" />
          </Form.Group>
          </Row>

        <Form className="locStyle">
          <Form.Label>Coordenadas</Form.Label>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                value={'' + values.latitude}
                name="latitude"
                onChange={handleChange}
                type="Text"
                placeholder="Latitude"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                value={'' + values.longitude}
                name="longitude"
                onChange={handleChange}
                type="Text"
                placeholder="Longitude"
              />
            </Form.Group>
          </Form.Row>

          <Container>
            <Row>
              <Button size="sm" variant="outline-secondary" onClick={toggleGps}>
                {gps ? 'desligar' : 'Pegar do GPS'}
              </Button>
            </Row>
            <Row className="Alink">
              <a href="https://justgetflux.com/map.html" target="blank">
                Descobrir
              </a>
            </Row>
          </Container>
        </Form>
        <Container>
          <Row className="RowCadastrar">
            <Button className="BtCadastrar" variant="primary" type="submit">
              Cadastrar
            </Button>
          </Row>
        </Container>
        {values.latitude !== 0 && values.longitude !== 0 && (
          <Map onClick={onMapClick} center={[values.latitude, values.longitude]} zoom={15} width={300} height={400}>
            <Marker anchor={[values.latitude, values.longitude]} />
          </Map>
        )}
      </Form>
    </div>
  );
};
