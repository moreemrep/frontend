import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthStore } from 'src/store/reducers/auth-reducer';
import { CadastrarRepublicaForm } from './CadastrarRepublica/Formulario';

const EditarRepublica: React.FC = () => {
  const [user] = useAuthStore();
  console.log({ user });
  if (!user || !user.republica) return <div></div>;

  return (
    <div>
      <CadastrarRepublicaForm republica={user.republica} />
    </div>
  );
};

export default EditarRepublica;
