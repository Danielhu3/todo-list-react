import React from 'react'
import BottomBarRadioItem from './BottomBarRadioItem'

const BottomRadioItems = ({radio, setRadio}) => {
  return (
    <>
        <BottomBarRadioItem label='All' id='all' setRadio={setRadio} radio={radio}/>
        <BottomBarRadioItem label='Active' id='active' setRadio={setRadio} radio={radio}/>
        <BottomBarRadioItem label='Completed' id='completed' setRadio={setRadio} radio={radio}/>
    </>
  )
}

export default BottomRadioItems