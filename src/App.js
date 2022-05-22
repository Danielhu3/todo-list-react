import './App.css';
import BottomPart from './Components/BottomPart';
import TopPart from './Components/TopPart';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div className="App">
      <TopPart darkMode={darkMode} setDarkMode={setDarkMode}/> 
      <BottomPart darkMode={darkMode}/>
    </div>
  );
}

export default App;
