import React from 'react'
import styles from './BottomBarDiv.module.css'
import BottomRadioItems from './BottomRadioItems'

const BottomBarDiv = ({darkMode, setRadio, radio, children}) => {
  return (
    <div className={`${styles.BottomBar} ${darkMode ? styles.darkMode : ''}`}>
        {children && children[0]}

        <div className={styles.showItems}>
            <BottomRadioItems setRadio={setRadio} radio={radio}> </BottomRadioItems>
        </div>

        {children && children[1]}

       
    </div>
  )
}

export default BottomBarDiv