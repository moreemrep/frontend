import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import '../style.css'

export function FomIput() {
  return (
    <Form className="cx">
      <Form.Group as={Row}>
        <Form.Label className="textU" column sm="auto">
          Universidade
        </Form.Label>
        <Col sm="6">
          <Form.Control type="text" placeholder="Selecione" />
        </Col>
      </Form.Group>
    </Form>
  )
}
