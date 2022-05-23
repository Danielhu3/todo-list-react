import './App.css';
import BottomPart from './Components/BottomPart';
import TopPart from './Components/TopPart';
import React from 'react';
import { ALL_GET } from './Api';
import useFetch from './Hooks/useFetch';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const {data, error, loading, request} = useFetch()

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
    <div className="App">
      <TopPart darkMode={darkMode} setDarkMode={setDarkMode}/> 
      <BottomPart darkMode={darkMode}/>
      
      
      
    </div>
  );
}

export default App;
