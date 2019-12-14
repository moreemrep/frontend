import React from 'react'
import './style.css'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '80%',
    justifyContent: 'center'
  }
})

export const LandingPage: React.FC = () => {
  return (
    <div className={css(styles.form)}>
      <input type="text" name="inp1" />
      <button> Procurar </button>
    </div>
  )
}
