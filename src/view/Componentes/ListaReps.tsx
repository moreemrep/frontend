import React from 'react';
import { Accordion, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import ToastRep from './ToastRep';
import { useSelector } from 'src/store/hooks/useSelector';

export function ListaReps() {
  const republicas = useSelector(state => state.republicas.republicas);

  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header>
            <InputGroup className="mb-3">
              <FormControl placeholder="Digite o raio de busca" aria-describedby="basic-addon2" />
              <InputGroup.Append>
                <Accordion.Toggle as={Button} variant="outline-primary" eventKey="0">
                  Buscar
                </Accordion.Toggle>
              </InputGroup.Append>
            </InputGroup>
            <Accordion.Toggle as={Button} variant="outline-dark" eventKey="1">
              Sair Lista
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ToastRep></ToastRep>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
