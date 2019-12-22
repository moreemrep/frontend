import React, { useEffect } from 'react';
import { useAuthActions } from 'src/actions/useAuthActions';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { Form, Button, InputGroup, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import { object } from 'yup';
import { StyleSheet, css } from 'aphrodite';
import { useDimensions } from 'src/hooks/useDimensions';
import { useBreakpoints } from 'src/hooks/useBreakpoints';
import { useValidation } from 'src/validations/useValidation';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderColor: 'green',
    color: 'white',
    paddingTop: 25,
    paddingBottom: 25
  },
  error: {
    borderColor: 'red'
  }
});

const Login: React.FC = () => {
  const { login, forgotPassword } = useAuthActions();
  const [, error, loading] = useAuthStore();
  const history = useHistory();
  const { height, width } = useDimensions();
  const { medium, large } = useBreakpoints();
  const validation = useValidation();

  // pequeno por padrão
  const responsive = {
    inputContainer: {
      width: width * 0.9
    },
    input: {
      fontSize: 25,
      paddingTop: 40,
      paddingBottom: 40
    }
  };

  if (medium) {
    responsive.inputContainer.width = width * 0.7;
    responsive.input.fontSize = 25;
  } else if (large) {
    responsive.inputContainer.width = width * 0.6;
    responsive.input.fontSize = 30;
  }

  const responsiveStyles = StyleSheet.create({
    ...responsive,
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: height * 0.9
    }
  });

  const { handleChange, handleSubmit, values, errors, touched, handleBlur, setFieldError, validateForm } = useFormik({
    initialValues: {
      email: '',
      senha: ''
    },
    validationSchema: object().shape({
      email: validation.email,
      senha: validation.senha
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

  const handleForgotPassword = async () => {
    const errors = await validateForm(values);
    if (errors.email) {
      alert(errors.email);
    } else {
      forgotPassword(values.email);
    }
  };

  const errorEmail = () => touched.email && !!errors.email;
  const errorSenha = () => touched.senha && !!errors.senha;

  return (
    <Form className={css(responsiveStyles.container)}>
      <Form.Group as={Row}>
        <InputGroup className={css(responsiveStyles.inputContainer)}>
          <Form.Control
            type="text"
            name="email"
            className={css(styles.input, responsiveStyles.input, errorEmail() && styles.error)}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            isInvalid={errorEmail()}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group as={Row}>
        <InputGroup className={css(responsiveStyles.inputContainer)}>
          <Form.Control
            type="password"
            name="senha"
            className={css(styles.input, responsiveStyles.input, errorSenha() && styles.error)}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Senha"
            isInvalid={errorSenha()}
          />
          <Form.Control.Feedback type="invalid">{errors.senha}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group>
        <Button disabled={loading.LOGIN} variant="primary" size="lg" onClick={() => handleSubmit()}>
          {loading.LOGIN ? 'Carregando' : 'Entrar'}
        </Button>
      </Form.Group>

      <Form.Group>
        <Button
          disabled={loading.FORGOT_PASSWORD}
          onClick={handleForgotPassword}
          variant="outline-secondary"
          size="sm"
          className="BtEsqueceuSh"
        >
          {loading.FORGOT_PASSWORD ? 'Carregando' : 'Esqueci minha senha'}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Login;
