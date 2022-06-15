import React from 'react'
import BottomBar from './BottomBar'
import Input from './Input'


const BottomPart = ({darkMode, data, setData, setDataRefresh}) => {
  const [radio, setRadio] = React.useState('all')
  return (
    <>
         <div className={`bottom ${darkMode ? 'dark-mode' : ''}`}>
          <div className='bottom-list'>
            <div className='bottom-list-create'>
              <Input placeholder='Create a new todo...' darkMode={darkMode} AddItem={true} setData={setData} />
            </div>
            <ul className='bottom-list-created'>
              { 
              
              radio === 'all' ?  
              data ? data.map((item) => 
              <li key={item.id}><Input text={item.text} key={item.id} id={item.id} done={item.done}darkMode={darkMode}
              setDataRefresh={setDataRefresh}/></li>
              )
              : null
              :
                
              radio === 'active' ? 
              data ? data.map((item) => 
              item.done ? null
              : <li key={item.id}><Input text={item.text} key={item.id} id={item.id} done={item.done}darkMode={darkMode}
              setDataRefresh={setDataRefresh}/></li>
              )
              : null
              :

              radio === 'completed' ? 
              data ? data.map((item) => 
              item.done ? <li key={item.id}><Input text={item.text} key={item.id} id={item.id} done={item.done}darkMode={darkMode}
              setDataRefresh={setDataRefresh}/></li>
              : null
              )
              : null
              : null
                
              
                
              }
              
             
                
              
              <BottomBar darkMode={darkMode} data={data} radio={radio} setRadio={setRadio} setDataRefresh={setDataRefresh}/>
            </ul>  
          </div>
          <div className={`bottom-description ${darkMode ? 'dark-mode' : ''}`}>Drag and drop to reorder list</div>
      </div>
    </>
  )
}

export default BottomPart