import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar  theme="colored" />
      <Navbar />
      <Container sx={{mt:3}}>
        <Outlet />
      </Container>
    </>
  )
}

export default MainLayout