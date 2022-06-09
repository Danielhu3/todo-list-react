import React from 'react'
import styles from './BottomBarRadioItem.module.css'
const BottomBarRadioItem = ({label, id, radio,setRadio}) => {

  function handleChange(event){
    setRadio(event.target.value)
    
  }
  return (
    <>
        <input type="radio" name="radio-input" id={id} value={id} className={styles.input} onChange={handleChange}
        checked={radio === id}/>
        <label htmlFor={id} className={styles.label}>{label}</label>
    </>
  )
}

export default BottomBarRadioItem