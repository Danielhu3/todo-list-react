import React from 'react'
import BottomBar from './BottomBar'
import Input from './Input'


const BottomPart = ({darkMode}) => {
  return (
    <>
         <div className={`bottom ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <div className='bottom-list'>
            <div className='bottom-list-create'>
              <Input placeholder='Create a new todo...'/>
            </div>
            <div className='bottom-list-created'>
              <Input text='aaa'/>
              <Input text='bbb'/>
              <Input text='cc'/>
              <Input text='aaa'/>
              <Input text='bbb'/>
              <Input text='cc'/>
              <BottomBar />
            </div>  
          </div>
          <div className={`bottom-description ${darkMode ? 'dark-mode' : 'light-mode'}`}>Drag and drop to reorder list</div>
      </div>
    </>
  )
}

export default BottomPart