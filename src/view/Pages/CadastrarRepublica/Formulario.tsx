import React, { useEffect } from 'react';
import { useAuthActions } from 'src/actions/useAuthActions';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { Tipo, RepublicaUser } from 'src/generated/graphql';
import { useFormik } from 'formik';
import { object } from 'yup';
import { MapClickEvent } from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { usePosition } from 'src/hooks/device/usePosition';
import { Form, Col, Button, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useGeocode } from 'src/services/useGeocode';
import useDebounce from 'src/hooks/useDebounce';
import { Mapa } from 'src/view/Componentes/Mapa';
import { useValidation } from 'src/validations/useValidation';
import { StyleSheet, css } from 'aphrodite';
import { useDimensions } from 'src/hooks/useDimensions';
import { useBreakpoints } from 'src/hooks/useBreakpoints';

// todo: refactor me
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderColor: 'green',
    paddingTop: 25,
    paddingBottom: 25,
    color: 'white'
  },
  areaInput: {
    backgroundColor: 'transparent',
    borderColor: 'green',
    color: 'white'
  },
  option: {
    color: 'black'
  },
  error: {
    borderColor: 'red'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

interface RepublicaFormProps {
  republica?: RepublicaUser;
}

export const CadastrarRepublicaForm: React.FC<RepublicaFormProps> = ({ republica }) => {
  const EDIT_PAGE = !!republica;
  const { register } = useAuthActions();
  const [, error, loading] = useAuthStore();
  const { push } = useHistory();

  // largura da tela
  const { width } = useDimensions();

  // breakpoints da tela, medio de 600 a 999px
  const { medium, large } = useBreakpoints();

  // tamanhos para tela pequena (< 600px)
  const responsive = {
    inputContainer: {
      width: width * 0.9 // 90% do tamanho da tela
    },
    input: {
      fontSize: 25,
      paddingTop: 0,
      paddingBottom: 0
    },
    areaInput: {
      padding: 10,
      fontSize: 25,
      height: 300
    }
  };

  if (medium) {
    // se tela media
    responsive.inputContainer.width = width * 0.7;
    responsive.input.fontSize = 25;
  } else if (large) {
    // se tela grande
    responsive.inputContainer.width = width * 0.6;
    responsive.input.fontSize = 30;
  }

  const responsiveStyles = StyleSheet.create({
    ...responsive
  });

  const validation = useValidation();
  const { setFieldValue, values, handleSubmit, handleChange, errors, touched, handleBlur } = useFormik({
    initialValues: republica
      ? {
          nome: republica.nome,
          tipo: republica.tipo,
          disponivel: republica.disponivel,
          endereco: '',
          mostrarNoMapa: republica.mostrarNoMapa,
          longitude: republica.localizacao.longitude,
          latitude: republica.localizacao.latitude,
          email: '',
          senha: '',
          descricao: republica.descricao
        }
      : {
          nome: '',
          tipo: Tipo.Mista,
          disponivel: true,
          endereco: '',
          mostrarNoMapa: true,
          longitude: 0,
          latitude: 0,
          email: '',
          senha: '',
          descricao: ''
        },
    validationSchema: EDIT_PAGE
      ? object().shape({
          nome: validation.nome,
          tipo: validation.tipo,
          longitude: validation.longitude,
          latitude: validation.latitude,
          descricao: validation.descricao
        })
      : object().shape({
          nome: validation.nome,
          tipo: validation.tipo,
          longitude: validation.longitude,
          latitude: validation.latitude,
          email: validation.email,
          senha: validation.senha,
          descricao: validation.descricao
        }),
    onSubmit: async (values, helpers) => {
      if (EDIT_PAGE) {
        console.log('chamar action editar');
        return;
      }
      if (
        await register(
          {
            disponivel: values.disponivel,
            endereco: '',
            localizacao: {
              latitude: values.latitude,
              longitude: values.longitude
            },
            mostrarNoMapa: values.mostrarNoMapa,
            nome: values.nome,
            tipo: values.tipo,
            descricao: values.descricao
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
  const { location, loading: loadingGeo, error: errorGeo } = useGeocode(endereco);

  const [toggleGps, gpsStatus] = usePosition(coords => {
    setFieldValue('latitude', coords.latitude);
    setFieldValue('longitude', coords.longitude);
  });

  useEffect(() => {
    if (location.latitude === 0 || location.longitude === 0) return;
    setFieldValue('latitude', location.latitude);
    setFieldValue('longitude', location.longitude);
  }, [location]);

  function onMapClick(ev: MapClickEvent) {
    setFieldValue('latitude', ev.latLng[0]);
    setFieldValue('longitude', ev.latLng[1]);
  }

  return (
    <Form className={css(styles.container)}>
      <Form.Group as={Row}>
        <Form.Group as={Col}>
          <Form.Label>Nome da República</Form.Label>
          <InputGroup className={css(responsiveStyles.inputContainer)}>
            <Form.Control
              className={css(styles.input, responsiveStyles.input, touched.nome && !!errors.nome && styles.error)}
              isInvalid={touched.nome && !!errors.nome}
              name="nome"
              onChange={handleChange}
              onBlur={handleBlur}
              type="Name"
              placeholder="República"
              value={values.nome}
            />
            <Form.Control.Feedback type="invalid">{errors.nome}</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Group as={Col}>
          <Form.Label>Tipo</Form.Label>
          <InputGroup className={css(responsiveStyles.inputContainer)}>
            <Form.Control
              className={css(styles.input, responsiveStyles.input)}
              value={values.tipo}
              name="tipo"
              as="select"
              onChange={handleChange}
            >
              <option className={css(styles.option)}>Selecione</option>
              <option className={css(styles.option)} value={Tipo.Feminina}>
                Feminina
              </option>
              <option className={css(styles.option)} value={Tipo.Masculina}>
                Masculina
              </option>
              <option className={css(styles.option)} value={Tipo.Mista}>
                Mista
              </option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errors.tipo}</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Group as={Col}>
          <Form.Label>Descrição</Form.Label>
          <InputGroup className={css(responsiveStyles.inputContainer)}>
            <Form.Control
              as="textarea"
              rows="2"
              maxLength="500"
              minLength="10"
              name="descricao"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.descricao}
              type="text"
              placeholder="Descrição + Contatos"
              className={css(
                styles.areaInput,
                responsiveStyles.areaInput,
                touched.descricao && !!errors.descricao && styles.error
              )}
              isInvalid={touched.descricao && !!errors.descricao}
            />
            <Form.Control.Feedback type="invalid">{errors.descricao}</Form.Control.Feedback>
          </InputGroup>
          <Form.Check
            type="checkbox"
            label="Tem vaga disponível (se não tiver vagas, não aparecerá nas buscas)"
            name="disponivel"
            onChange={() => setFieldValue('disponivel', !values.disponivel)}
            checked={values.disponivel}
          />
        </Form.Group>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Group as={Col}>
          <Form.Label>
            Endereço{loadingGeo && '(carregando)'} (utilizado apenas para pegar as coordenadas da república)
          </Form.Label>
          <InputGroup className={css(responsiveStyles.inputContainer)}>
            <Form.Control
              className={css(styles.input, responsiveStyles.input)}
              name="endereco"
              onChange={handleChange}
              placeholder="Rua:..., nº"
            />
            <Button size="sm" variant="outline-secondary" onClick={toggleGps}>
              {gpsStatus ? 'desligar' : 'Pegar do GPS'}
            </Button>
            <Mapa onClick={onMapClick} center={[values.latitude, values.longitude]} zoom={15}>
              <Marker anchor={[values.latitude, values.longitude]} />
            </Mapa>
            <Form.Check
              type="checkbox"
              label="Aparecer no Mapa(se desativado, mostraremos apenas a distância da república até a universidade)"
              name="mostrarNoMapa"
              onChange={() => setFieldValue('mostrarNoMapa', !values.mostrarNoMapa)}
              checked={values.mostrarNoMapa}
            />
          </InputGroup>
          <Form.Control.Feedback type="invalid">{errors.mostrarNoMapa}</Form.Control.Feedback>
        </Form.Group>
      </Form.Group>

      {!EDIT_PAGE && (
        <Form.Group as={Row}>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <InputGroup className={css(responsiveStyles.inputContainer)}>
              <Form.Control
                className={css(styles.input, responsiveStyles.input, touched.email && !!errors.email && styles.error)}
                onBlur={handleBlur}
                name="email"
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
                type="email"
                placeholder="Digite o email"
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Group>
      )}

      {!EDIT_PAGE && (
        <Form.Group as={Row}>
          <Form.Group as={Col}>
            <Form.Label>Senha</Form.Label>
            <InputGroup className={css(responsiveStyles.inputContainer)}>
              <Form.Control
                className={css(styles.input, responsiveStyles.input, touched.senha && !!errors.senha && styles.error)}
                name="senha"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.senha && !!errors.senha}
                type="password"
                placeholder="Mínimo 6 digitos"
              />
              <Form.Control.Feedback type="invalid">{errors.senha}</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Group>
      )}

      {EDIT_PAGE ? ( //todo: edit action
        <Button disabled={loading.REGISTER} variant="primary" onClick={() => handleSubmit()}>
          {loading.REGISTER ? 'carregando' : 'Salvar alterações'}
        </Button>
      ) : (
        <Button disabled={loading.REGISTER} variant="primary" onClick={() => handleSubmit()}>
          {loading.REGISTER ? 'carregando' : 'Cadastrar república'}
        </Button>
      )}
    </Form>
  );
};
