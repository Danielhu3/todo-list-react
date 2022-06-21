import React from 'react'
import styles from './BottomBarDiv.module.css'
import BottomBarRadioItem from './BottomBarRadioItem'

const BottomBarDiv = ({darkMode, setRadio, radio, children}) => {
  return (
    <div className={`${styles.BottomBar} ${darkMode ? styles.darkMode : ''}`}>
        {children && children[0]}

        <div className={styles.showItems}>
            <BottomBarRadioItem label='All' id='all' setRadio={setRadio} radio={radio}/>
            <BottomBarRadioItem label='Active' id='active' setRadio={setRadio} radio={radio}/>
            <BottomBarRadioItem label='Completed' id='completed' setRadio={setRadio} radio={radio}/>
        </div>

        {children && children[1]}

       
    </div>
  )
}

export default BottomBarDiv