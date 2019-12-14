import React from 'react'
import { FomIput } from '../Componentes/form'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const LandingPage: React.FC = () => {
  return (
    <div className={css(styles.form)}>
      <FomIput></FomIput>
    </div>
  )
}

export default LandingPage
