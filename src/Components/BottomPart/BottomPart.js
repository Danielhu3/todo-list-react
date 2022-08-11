import React from 'react'
import BottomBar from './BottomBar'
import Input from './Input'
import Context from './context'
import produce from 'immer'

const BottomPart = ({darkMode, data, setData, setDataRefresh}) => {
  const [radio, setRadio] = React.useState('all')

  // this will be used to change items order with drag and drop
   const [lists, setLists] = React.useState()
  
  React.useEffect(()=>{
    setLists(data)
  },[data])

  function move(from,to){
    setLists(produce(lists, draft =>{
      const dragged = draft[from]
      
      draft.splice(from,1)
      draft.splice(to, 0, dragged)

      
    }))
  }
  

  
  
  return (
    <Context.Provider value={{lists, move}}>
         <div className={`bottom ${darkMode ? 'dark-mode' : ''}`}>
          <div className='bottom-list' >
            <div className='bottom-list-create' >
              <Input placeholder='Create a new todo...' darkMode={darkMode} AddItem={true} setData={setData} />
            </div>
            
            <ul className='bottom-list-created' >
              { 
              
              radio === 'all' ?  
              lists ? lists.map((item, index) => 
              <li key={item.id} ><Input text={item.text} key={item.id} id={item.id} index ={index} done={item.done}darkMode={darkMode}
              setDataRefresh={setDataRefresh}/></li>
              )
              : null
              :
                
              radio === 'active' ? 
              lists ? lists.map((item, index) => 
              item.done ? null
              : <li key={item.id} ><Input text={item.text} key={item.id} id={item.id} index ={index} done={item.done}darkMode={darkMode}
              setDataRefresh={setDataRefresh}/></li>
              )
              : null
              :

              radio === 'completed' ? 
              lists ? lists.map((item, index) => 
              item.done ? <li key={item.id}><Input text={item.text} key={item.id} id={item.id} index ={index} done={item.done}darkMode={darkMode}
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
    </Context.Provider>
  )
  
}

export default BottomPart