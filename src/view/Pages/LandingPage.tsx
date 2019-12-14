import React from 'react'
import { FomIput } from '../Componentes/form'
import { StyleSheet, css } from 'aphrodite'
import Map from 'pigeon-maps'

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '80%',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})

const LandingPage: React.FC = () => {
  return (
    <div className={css(styles.form)}>
      <FomIput></FomIput>
      <Map onClick={ev => console.log({ ev })} center={[-23.186077, -50.657391]} zoom={15} width={600} height={400} />
    </div>
  )
}

export default LandingPage
