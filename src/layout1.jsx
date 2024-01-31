import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Navbar1 from './navbar/navbar1'
import Footer from './foooter/foorer'
import { Container } from '@chakra-ui/react'





function Layout() {
  return (
    <div>
      <Navbar />
      <Navbar1 />
       <Container maxW={'1580px'}>
        <Outlet />
       </Container>
      
        
        <Footer/>
    </div>
  )
}

export default Layout