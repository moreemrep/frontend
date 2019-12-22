import React, { useState, useEffect } from 'react';
import { useRepublicaStore } from 'src/store/reducers/republicas-reducer';
import { useRepublicaActions } from 'src/actions/useRepublicaActions';
import { Tipo } from 'src/generated/graphql';
import { Accordion, useAccordionToggle, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import ToastRep from './ToastRep';

export function ListaReps() {
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
