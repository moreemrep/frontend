import React from 'react';
import { Toast } from 'react-bootstrap';

const ToastRep: React.FC = () => {
  return (
    <div>
      <Toast>
        <Toast.Header>
          <strong className="mr-auto">Nome Rep</strong>
          <small>Distância da facul</small>
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: '#191919' }}>Descrição</Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastRep;
