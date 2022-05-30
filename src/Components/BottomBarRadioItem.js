import React from 'react'
import styles from './BottomBarRadioItem.module.css'
const BottomBarRadioItem = ({label, id, setRadio}) => {

  function handleChange(event){
    setRadio(event.target.value)
  }
  return (
    <>
        <input type="radio" name="radio-input" id={id} value={id} className={styles.input} onChange={handleChange} />
        <label htmlFor={id} className={styles.label}>{label}</label>
    </>
  )
}

export default BottomBarRadioItem