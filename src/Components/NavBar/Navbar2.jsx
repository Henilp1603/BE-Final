import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
      <NavBar toggleS={false}/>
      <Outlet/> 
    </>
  )
}

export default Navbar2
