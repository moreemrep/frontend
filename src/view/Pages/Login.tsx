import React from 'react';
import { useAuthActions } from 'src/actions/useAuthActions';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { Form, Button } from 'react-bootstrap';

const Login: React.FC = () => {
  const { login, forgotPassword } = useAuthActions();
  const [, error, loading] = useAuthStore();

  if (loading.LOGIN || loading.FORGOT_PASSWORD) return <div>loading...</div>;

  return (
    <div>
      {error.LOGIN}
      {error.FORGOT_PASSWORD}
      <Form className="formEnter">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entre com Email" />
          <Form.Text className="text-muted">Seu e-mail não será compartilhado</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicSenha">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Button variant="primary" size="lg">
          Entar
        </Button>
        <Button variant="secondary" size="sm">
          Esqueci a senha
        </Button>
      </Form>
    </div>
  );
};

export default Login;
