import React from 'react'
import styles from './Input.module.css'

const Input = ({text, placeholder}) => {
  return (
  <input type='text' value={text} placeholder={placeholder} className={styles.input}></input>      
  )
}

export default Input