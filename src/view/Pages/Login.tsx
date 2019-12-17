import React from 'react';
import { useAuthActions } from 'src/actions/useAuthActions';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { Form, Button, InputGroup, Col } from 'react-bootstrap';

const Login: React.FC = () => {
  const { login, forgotPassword } = useAuthActions();
  const [, error, loading] = useAuthStore();

  if (loading.LOGIN || loading.FORGOT_PASSWORD) return <div>loading...</div>;

  return (
    <div>
      {error.LOGIN}
      {error.FORGOT_PASSWORD}
      <Form className="formEnter">
        <Form.Group as={Col} md="6" controlId="validationFormikUsername">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Email:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Digite o Email"
              aria-describedby="inputGroupPrepend"
              // name="username"
              // onChange={handleChange}
              // isInvalid={!!errors.username}
            />
            {/* <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback> */}
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationFormikSenha">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Senha:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="password"
              placeholder="Digite a Senha"
              aria-describedby="inputGroupPrepend"
              // onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>

        <Button variant="outline-primary" size="lg">
          Entrar
        </Button>
        <Button className="BtEsqueceuSh" variant="outline-secondary" size="sm">
          Esqueceu a senha
        </Button>
      </Form>
    </div>
  );
};

export default Login;
