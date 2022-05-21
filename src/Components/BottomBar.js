import React from 'react'
import styles from './BottomBar.module.css'
import BottomBarRadioItem from './BottomBarRadioItem'

const BottomBar = () => {
  return (
    <div className={styles.BottomBar}>
      <p className={styles.itemsLeft}>5 items left</p>
      <div className={styles.showItems}>
        <BottomBarRadioItem label='All' id='all'/>
        <BottomBarRadioItem label='Active' id='active'/>
        <BottomBarRadioItem label='Completed' id='completed'/>
      </div>
      <button className={styles.clearCompleted}>Clear Completed</button>
      
    </div>
  )
}

export default BottomBar