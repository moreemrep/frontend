import React, { useState, useEffect } from 'react';
import { useRepublicaStore } from 'src/store/reducers/republicas-reducer';
import { useRepublicaActions } from 'src/actions/useRepublicaActions';
import { Tipo } from 'src/generated/graphql';
import { Accordion, useAccordionToggle, Card, Toast } from 'react-bootstrap';

export function ListaReps() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" style={{ backgroundColor: 'green' }}>
            Carregar Lista de Reps
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {
                <Toast>
                  <Toast.Header>
                    <img src="" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Nome Rep</strong>
                    <small>Distância da facul</small>
                  </Toast.Header>
                  <Toast.Body style={{ backgroundColor: 'grey' }}>Descrição</Toast.Body>
                </Toast>
              }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
