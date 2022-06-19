import React from 'react'

const TopPart = ({darkMode, setDarkMode}) => {
  function changeTheme(){
   
    setDarkMode(!darkMode)
    if(darkMode === true){
      localStorage.setItem('theme', 'light')
    }
    else{
      localStorage.setItem('theme', 'dark')
    }



  }
  return (
    <>
        <div className={`top ${darkMode ? 'dark-mode': 'light-mode'}`}>
            <div className='top-header'>
                <h1 className='title'>TODO</h1>
                <button className={`change-theme ${darkMode ? 'dark-mode': 'light-mode'}`}
                 onClick={changeTheme}></button>
            </div>
        </div>
    </>
  )
}

export default TopPart