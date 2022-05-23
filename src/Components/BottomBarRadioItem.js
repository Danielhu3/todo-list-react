import React from 'react'
import styles from './BottomBarRadioItem.module.css'
const BottomBarRadioItem = ({label, id}) => {
  return (
    <>
        <input type="radio" name="radio-input" id={id} value={id} className={styles.input} />
        <label htmlFor={id} className={styles.label}>{label}</label>
    </>
  )
}

export default BottomBarRadioItem