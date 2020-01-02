import React from 'react';
import { CadastrarRepublicaForm } from './CadastrarRepublica/Formulario';
import { useSelector } from 'src/store/hooks/useSelector';

const EditarRepublica: React.FC = () => {
  const user = useSelector(state => state.auth);

  if (!user) return <div></div>;

  return (
    <div>
      <CadastrarRepublicaForm republica={user.republica} />
    </div>
  );
};

export default EditarRepublica;
