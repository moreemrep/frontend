import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { StyleSheet, css } from 'aphrodite'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
})
export function Input({ name, label }: InputProps) {
  const [field, meta] = useField(name)
  return (
    <div className={css(styles.container)}>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} onChange={field.onChange} value={field.value} onBlur={field.onBlur} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
  )
}
