import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  cx: {
    background: '#FFFFFF88',
    padding: 40,
    borderRadius: 19
  },
  textU: {
    color: 'black',
    fontWeight: 'bold'
  }
})

export function FomIput() {
  return (
    <Form className={css(styles.cx)}>
      <Form.Group as={Row}>
        <Form.Label className={css(styles.textU)} column sm="auto">
          Universidade
        </Form.Label>
        <Col sm="6">
          <Form.Control type="text" placeholder="Selecione" />
        </Col>
      </Form.Group>
    </Form>
  )
}
