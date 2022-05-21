import React from 'react'

const TopPart = ({darkMode, setDarkMode}) => {
  return (
    <>
        <div className={`top ${darkMode ? 'dark-mode': 'light-mode'}`}>
            <div className='top-header'>
                <h1 className='title'>TODO</h1>
                <button className={`change-theme ${darkMode ? 'dark-mode': 'light-mode'}`}
                 onClick={()=> setDarkMode(!darkMode)}></button>
            </div>
        </div>
    </>
  )
}

export default TopPart