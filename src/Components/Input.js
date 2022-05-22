import React from 'react'
import styles from './Input.module.css'

const Input = ({text, placeholder, darkMode}) => {
  return (
  <input type='text' value={text} placeholder={placeholder}
  className={`${styles.input} ${darkMode ? styles.darkMode : ''}`}></input>      
  )
}

export default Input