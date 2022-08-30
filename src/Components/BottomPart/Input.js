import React from 'react'
import { ITEM_POST, ITEM_PUT, DONE_PUT, ITEM_DELETE } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import styles from './Input.module.css'
import { useDrag, useDrop } from 'react-dnd'
import Context from './context'



const Input = ({text, id, index, done, placeholder, darkMode, AddItem, setData, setDataRefresh}) => {
  
  const [value, setValue] = React.useState(text)
  const [checked, setChecked] = React.useState(done)

  const {request} = useFetch()

  const ref = React.useRef()

  const {move} = React.useContext(Context)
  
   function todoPost(event){
    async function fetch(){
      const {url, options} = ITEM_POST({
        id: null,
        text : event.target.value,
        done: false
      })

      const {json} = await request(url,options)
      setData((data) => [...data, json])

    }

    if(event.target.value !== ''){
      fetch()
      event.target.blur()
      setValue('')
    }
    
  } 

  function todoEdit(event){
    async function fetch(){
      const {url,options} = ITEM_PUT({
        id: id,
        text: event.target.value,
        done: done
      }, id)

      await request(url, options)
      
    }
    
    if(event.target.value !== ''){
      fetch()
      event.target.blur()
    }
    

  }

  function todoDelete(event){
    async function fetch(){
      const {url, options} = ITEM_DELETE(id)
      const {response} = await request (url, options)

      if(response.ok) setDataRefresh((data)=> !data)
    }
    fetch()
    

  }

  function setDone(){
    const newDone = !checked

    async function fetch(){
      const {url, options} =  DONE_PUT({
        id:id,
        text:text,
        done: newDone
      }, id)

      

      await request(url, options)
      setChecked(newDone)
      setDataRefresh((data)=> !data)
    }

    fetch()
  }

  
  const [, dragRef] = useDrag({
    type:'INPUT',
    item:{index},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept:'INPUT',
    hover(item, monitor){

      const draggedIndex = item.index
      const targetIndex = index

      if(draggedIndex === targetIndex){
        return
      }

      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = targetSize.height / 2
     
      const draggedOffset = monitor.getClientOffset()
      const draggedTop = draggedOffset.y - targetSize.top

      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return
      }

      move(draggedIndex, targetIndex)

      // avoid items to flicking
      item.index = targetIndex

      
     
    }
  })

  // faz com que o ref tenha a referência do drag e do drop
  dragRef(dropRef(ref))

  return (
  <div ref={ref}>
  
     <input type='checkbox' className={`${styles.checkbox} ${darkMode ? styles.darkMode : ''}`} checked={checked} onChange={setDone}></input>
  
      <input type='text' placeholder={placeholder}
      value={value ? value : ''} onChange={(event)=> setValue(event.target.value)}

      onKeyDown ={(event) => AddItem ? event.key === 'Enter' ? todoPost(event) : null
      : event.key === 'Enter' ? todoEdit(event) : null}

      className={`${styles.input} ${darkMode ? styles.darkMode : ''} ${checked ? styles.checked : ''}`}
      
      >
    </input> 
    <button className={styles.close} onClick={todoDelete}></button>
  </div>
   
   
     
  )
}

export default Input

/* explaning onKeyDown: if the value AddItem is true, this input component is the one that allows user to add new todo items, so
it will comparate the key pressed, if is Enter, do the fetch to add a new item.
if AddItem is false, this input componet is one of the added to lists,
so, it will edit the content.

*/
