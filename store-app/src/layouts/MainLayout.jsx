import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='container'>
         <Navbar />
         <h1>Main Layout</h1>
         <Outlet />
    </div>
  )
}

export default MainLayout