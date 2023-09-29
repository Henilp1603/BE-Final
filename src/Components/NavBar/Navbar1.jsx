import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default Navbar1
