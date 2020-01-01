import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { RepublicaPayload } from 'src/generated/graphql';
import { StyleSheet, css } from 'aphrodite';

interface ModalRepublicaProps {
  republica: RepublicaPayload;
  onHide: () => void;
}

const styles = StyleSheet.create({
  text: {
    color: '#000'
  }
});

export function ModalRepublica({ republica, onHide }: ModalRepublicaProps) {
  const { nome, distancia, descricao } = republica;

  return (
    <Modal show={!!republica} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title className={css(styles.text)} id="contained-modal-title-vcenter">
          {nome}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={css(styles.text)}>
        <h4>{distancia.toFixed(2)} km</h4>
        <p>
          {descricao.split('\n').map((item, idx) => (
            <span key={idx}>
              {item}
              <br />
            </span>
          ))}
        </p>
      </Modal.Body>
      <Modal.Footer className={css(styles.text)}>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
