import React from 'react'
import { ITEM_DELETE } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import styles from './BottomBar.module.css'
import BottomBarDiv from './BottomBarDiv'

const BottomBar = ({darkMode, data, radio, setRadio, setDataRefresh}) => {
  const [itemsLeft, setItemsLeft] = React.useState(0)

  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(()=>{
    setItemsLeft(0)
    data && data.map((item) => item.done ? null : setItemsLeft((actual) => actual + 1))
    
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
  
  
  React.useState(()=>{
    checkWindowSize()
  },[])

  function checkWindowSize(){
  
    const checkMedia = window.matchMedia("(max-width: 560px)")
    
    if(checkMedia.matches){
      setIsMobile(true)
    } 
    else {
      setIsMobile(false)
    }

   
  }

  window.matchMedia("(max-width: 560px)").addEventListener('change', checkWindowSize);

  return (
    <>
      <BottomBarDiv darkMode={darkMode} setRadio={setRadio} radio={radio}>
      <p className={styles.itemsLeft}>{itemsLeft} item(s) left</p>
      <button className={`${styles.clearCompleted} ${darkMode ? styles.darkMode : ''}`}
      onClick={clearCompleted}>Clear Completed</button>

      </BottomBarDiv>

      {  
        isMobile &&
        <BottomBarDiv darkMode={darkMode} setRadio={setRadio} radio={radio} />    
        
      }
    </>
  )
}

export default BottomBar