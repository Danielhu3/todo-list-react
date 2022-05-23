import React from 'react'
import BottomBar from './BottomBar'
import Input from './Input'


const BottomPart = ({darkMode}) => {
  const comments = ['aaa','bbb','ccc','ddd','5','a']
  return (
    <>
         <div className={`bottom ${darkMode ? 'dark-mode' : ''}`}>
          <div className='bottom-list'>
            <div className='bottom-list-create'>
              <Input placeholder='Create a new todo...' darkMode={darkMode}/>
            </div>
            <div className='bottom-list-created'>
              {
                comments.map((item) => <Input text={item} key={item} darkMode={darkMode}/>)
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