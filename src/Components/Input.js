import React from 'react'
import { ITEM_POST, ITEM_PUT } from '../Api'
import useFetch from '../Hooks/useFetch'
import styles from './Input.module.css'

const Input = ({text, id, done, placeholder, darkMode, AddItem, setData}) => {
  const [value, setValue] = React.useState(text)
  

  const {request} = useFetch()
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
    fetch()
    event.target.blur()
  } 

  function todoEdit(event){
    async function fetch(){
      const {url,options} = ITEM_PUT({
        id: id,
        text: event.target.value,
        done:done
      }, id)

      await request(url, options)
      
    }
    fetch()
    event.target.blur()

  }
  return (
  <input type='text' placeholder={placeholder}
  value={value} onChange={(event)=> setValue(event.target.value)}

  onKeyDown ={(event) => AddItem ? event.key === 'Enter' ? todoPost(event) : null
  : event.key === 'Enter' ? todoEdit(event) : null}

  className={`${styles.input} ${darkMode ? styles.darkMode : ''}`}></input>      
  )
}

export default Input

/* explaning onKeyDown: if the value AddItem is true, this input component is the one that allows user to add new todo items, so
it will comparate the key pressed, if is Enter, do the fetch to add a new item.
if AddItem is false, this input componet is one of the added to lists,
so, it will edit the content.

*/
