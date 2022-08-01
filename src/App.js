import './App.css';
import BottomPart from './Components/BottomPart/BottomPart';
import TopPart from './Components/TopPart';
import React from 'react';
import useFetch from './Hooks/useFetch';
import { ALL_GET } from './Api';
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [data, setData] = React.useState()
  const [dataRefresh, setDataRefresh] = React.useState(false)




  const {request} = useFetch()

   React.useEffect(()=>{
    async function fetchList(){
      const {url, options} = ALL_GET()
      const {json} = await request(url, options)
      setData(json)
    }
    fetchList()
    // dataRefresh is needeed to when an item is checked or unchecked it will refresh list
  },[request, dataRefresh])

  // get theme from localstorage
  React.useEffect(()=>{
    const theme = localStorage.getItem('theme')

    if(theme === 'light'){
      setDarkMode(false)
    }
    if(theme === 'dark'){
      setDarkMode(true)

    }
  },[darkMode])

  
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <TopPart darkMode={darkMode} setDarkMode={setDarkMode}/> 
      <BottomPart darkMode={darkMode} data={data} setData={setData} setDataRefresh={setDataRefresh}/>
    </div>
    </DndProvider>
  );
}

export default App;
