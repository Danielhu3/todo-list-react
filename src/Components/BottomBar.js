import React from 'react'
import styles from './BottomBar.module.css'
import BottomBarRadioItem from './BottomBarRadioItem'

const BottomBar = ({darkMode, data, radio, setRadio}) => {
  

  React.useEffect(()=>{
    if(radio) console.log(radio)
  },[radio])
  
  return (
    <div className={`${styles.BottomBar} ${darkMode ? styles.darkMode : ''}`}>
      <p className={styles.itemsLeft}>{data && data.length} item(s) left</p>
      <div className={styles.showItems}>
        <BottomBarRadioItem label='All' id='all' setRadio={setRadio} radio={radio}/>
        <BottomBarRadioItem label='Active' id='active' setRadio={setRadio} radio={radio}/>
        <BottomBarRadioItem label='Completed' id='completed' setRadio={setRadio} radio={radio}/>
      </div>
      <button className={`${styles.clearCompleted} ${darkMode ? styles.darkMode : ''}`}>Clear Completed</button>
      
    </div>
  )
}

export default BottomBar