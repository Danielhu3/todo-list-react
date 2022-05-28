import React from 'react'
import styles from './BottomBar.module.css'
import BottomBarRadioItem from './BottomBarRadioItem'

const BottomBar = ({darkMode, data}) => {
  
  return (
    <div className={`${styles.BottomBar} ${darkMode ? styles.darkMode : ''}`}>
      <p className={styles.itemsLeft}>{data && data.length} items left</p>
      <div className={styles.showItems}>
        <BottomBarRadioItem label='All' id='all'/>
        <BottomBarRadioItem label='Active' id='active'/>
        <BottomBarRadioItem label='Completed' id='completed'/>
      </div>
      <button className={`${styles.clearCompleted} ${darkMode ? styles.darkMode : ''}`}>Clear Completed</button>
      
    </div>
  )
}

export default BottomBar