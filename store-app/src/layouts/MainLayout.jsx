import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{mt:3}}>
        <Outlet />
      </Container>
    </>
  )
}

export default MainLayout