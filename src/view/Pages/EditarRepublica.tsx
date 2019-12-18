import React from 'react';
import { Button, Card } from 'react-bootstrap';

const EditarRepublica: React.FC = () => {
  return (
    <div>
      <Card>
        <Card.Header>Nome República</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditarRepublica;
