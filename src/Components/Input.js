import React from 'react'
import { ITEM_POST } from '../Api'
import useFetch from '../Hooks/useFetch'
import styles from './Input.module.css'

const Input = ({text, placeholder, darkMode, AddItem, setData}) => {
  const {request} = useFetch()
  
   function todoFetch(event){
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
  } 
  return (
  <input type='text' value={text} placeholder={placeholder} 
  onKeyDown ={(event) => AddItem ? event.key === 'Enter' ? todoFetch(event) : null
  : null}
  className={`${styles.input} ${darkMode ? styles.darkMode : ''}`}></input>      
  )
}

export default Input

/* explaning onKeyDown: if the value AddItem is true, this input component is the one that allows user to add new todo items, so
it will comparate the key pressed, if is Enter, do the fetch. if AddItem is false, this input componet is one of the added to lists,
so, it is'nt allowed to add new todo items

*/
