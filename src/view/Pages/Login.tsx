import React, { useEffect } from 'react';
import { useAuthActions } from 'src/actions/useAuthActions';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import { object, string } from 'yup';

const Login: React.FC = () => {
  const { login, forgotPassword } = useAuthActions();
  const [, error, loading] = useAuthStore();
  const history = useHistory();

  const { handleChange, handleSubmit, values, errors, touched, handleBlur, setFieldError } = useFormik({
    initialValues: {
      email: '',
      senha: ''
    },
    validationSchema: object().shape({
      email: string()
        .required('Email inválido')
        .email('Email inválido'),
      senha: string()
        .required('Senha obrigatória')
        .min(6, 'minimo 6 caracteres')
    }),
    onSubmit: async (values, helpers) => {
      if (await login(values)) {
        history.push('editar');
      }
    }
  });

  useEffect(() => {
    if (!error.FORGOT_PASSWORD) return;

    setFieldError('email', error.FORGOT_PASSWORD);
  }, [error.FORGOT_PASSWORD]);

  useEffect(() => {
    if (!error.LOGIN) return;

    if (error.LOGIN.includes('password')) {
      setFieldError('senha', error.LOGIN);
    } else {
      setFieldError('email', error.LOGIN);
    }
  }, [error.LOGIN]);

  return (
    <Form className="formEnter">
      <Form.Group as={Col} md="6" controlId="validationFormikUsername">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">Email:</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Digite o Email"
            aria-describedby="inputGroupPrepend"
            isInvalid={touched.email && !!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationFormikSenha">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">Senha:</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="password"
            name="senha"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Digite a Senha"
            aria-describedby="inputGroupPrepend"
            isInvalid={touched.senha && !!errors.senha}
          />
          <Form.Control.Feedback type="invalid">{errors.senha}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Button disabled={loading.LOGIN} variant="outline-primary" size="lg" onClick={() => handleSubmit()}>
        {loading.LOGIN ? 'Carregando' : 'Entrar'}
      </Button>
      <Button
        disabled={loading.FORGOT_PASSWORD}
        onClick={() => forgotPassword(values.email)}
        className="BtEsqueceuSh"
        variant="outline-secondary"
        size="sm"
      >
        {loading.FORGOT_PASSWORD ? 'Carregando' : 'Esqueceu a senha'}
      </Button>
    </Form>
  );
};

export default Login;
