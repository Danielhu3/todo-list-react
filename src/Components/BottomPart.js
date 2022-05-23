import React from 'react'
import { ALL_GET } from '../Api'
import useFetch from '../Hooks/useFetch'
import BottomBar from './BottomBar'
import Input from './Input'


const BottomPart = ({darkMode}) => {
  const {data, request} = useFetch()

  React.useEffect(()=>{
    async function fetchList(){
      const {url, options} = ALL_GET()
      const {response, json} = await request(url, options)
      console.log(response)
      console.log(json)
    }
    
    fetchList()
  },[request])
 

  return (
    <>
         <div className={`bottom ${darkMode ? 'dark-mode' : ''}`}>
          <div className='bottom-list'>
            <div className='bottom-list-create'>
              <Input placeholder='Create a new todo...' darkMode={darkMode}/>
            </div>
            <div className='bottom-list-created'>
              {
                data ? data.map((item) => <Input text={item.text} key={item.id} darkMode={darkMode}/>)
                : null
                
              }
              <BottomBar darkMode={darkMode}/>
            </div>  
          </div>
          <div className={`bottom-description ${darkMode ? 'dark-mode' : ''}`}>Drag and drop to reorder list</div>
      </div>
    </>
  )
}

export default BottomPart