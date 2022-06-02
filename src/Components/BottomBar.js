import React from 'react'
import styles from './BottomBar.module.css'
import BottomBarRadioItem from './BottomBarRadioItem'

const BottomBar = ({darkMode, data}) => {
  const [radio, setRadio] = React.useState('')

  React.useEffect(()=>{
    if(radio) console.log(radio)
  },[radio])
  
  return (
    <div className={`${styles.BottomBar} ${darkMode ? styles.darkMode : ''}`}>
      <p className={styles.itemsLeft}>{data && data.length} item(s) left</p>
      <div className={styles.showItems}>
        <BottomBarRadioItem label='All' id='all' setRadio={setRadio}/>
        <BottomBarRadioItem label='Active' id='active' setRadio={setRadio}/>
        <BottomBarRadioItem label='Completed' id='completed' setRadio={setRadio}/>
      </div>
      <button className={`${styles.clearCompleted} ${darkMode ? styles.darkMode : ''}`}>Clear Completed</button>
      
    </div>
  )
}

export default BottomBar