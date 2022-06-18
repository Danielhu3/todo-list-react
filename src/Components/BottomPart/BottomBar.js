import React from 'react'
import { ITEM_DELETE } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import styles from './BottomBar.module.css'
import BottomBarRadioItem from './BottomBarRadioItem'

const BottomBar = ({darkMode, data, radio, setRadio, setDataRefresh}) => {

  const [itemsLeft, setItemsLeft] = React.useState(0)

  React.useEffect(()=>{
    setItemsLeft(0)
    data && data.map((item) => item.done ? null : setItemsLeft((actual) => actual + 1))
    console.log(itemsLeft)
    
  }, [data, itemsLeft])


  const {request} = useFetch()
  
  function clearCompleted(){
    
    async function fetch(id){
      const {url, options} = ITEM_DELETE(id)
      
      const {response} = await request(url,options)
      if(response.ok) setDataRefresh((data)=> !data)
      
      

    }
    

    data.filter((item) => item.done ? fetch(item.id) : null)
    
    
  }

  
  return (
    <div className={`${styles.BottomBar} ${darkMode ? styles.darkMode : ''}`}>
      <p className={styles.itemsLeft}>{itemsLeft} item(s) left</p>
      <div className={styles.showItems}>
        <BottomBarRadioItem label='All' id='all' setRadio={setRadio} radio={radio}/>
        <BottomBarRadioItem label='Active' id='active' setRadio={setRadio} radio={radio}/>
        <BottomBarRadioItem label='Completed' id='completed' setRadio={setRadio} radio={radio}/>
      </div>
      <button className={`${styles.clearCompleted} ${darkMode ? styles.darkMode : ''}`}
      onClick={clearCompleted}>Clear Completed</button>
      
    </div>
  )
}

export default BottomBar