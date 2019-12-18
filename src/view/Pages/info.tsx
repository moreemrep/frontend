import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default function Info(): JSX.Element {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Informaçoes</h1>
          <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
