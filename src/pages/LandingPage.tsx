import React from 'react'
import './style.css'
import { StyleSheet, css } from 'aphrodite'
import Map from 'pigeon-maps'

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '80%',
    justifyContent: 'center'
  }
})

const LandingPage: React.FC = () => {
  return (
    <div className={css(styles.form)}>
      <Map center={[50.879, 44.6997]} zoom={12} width={600} height={400} />
    </div>
  )
}

export default LandingPage
