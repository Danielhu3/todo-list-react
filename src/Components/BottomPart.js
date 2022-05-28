import React from 'react'
import BottomBar from './BottomBar'
import Input from './Input'


const BottomPart = ({darkMode, data, setData}) => {
  return (
    <>
         <div className={`bottom ${darkMode ? 'dark-mode' : ''}`}>
          <div className='bottom-list'>
            <div className='bottom-list-create'>
              <Input placeholder='Create a new todo...' darkMode={darkMode} AddItem={true} setData={setData}/>
            </div>
            <div className='bottom-list-created'>
              {
                data ? data.map((item) => <Input text={item.text} key={item.id} id={item.id} done={item.done}darkMode={darkMode}/>)
                : null
              }
              <BottomBar darkMode={darkMode} data={data}/>
            </div>  
          </div>
          <div className={`bottom-description ${darkMode ? 'dark-mode' : ''}`}>Drag and drop to reorder list</div>
      </div>
    </>
  )
}

export default BottomPart