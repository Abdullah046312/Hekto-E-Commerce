import React from 'react'
import Header from './Header'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import FooterPart from './FooterPart'

const Layout = () => {
  return (
   <>
   <Header/>
   <Navber/>
   <Outlet/>
   <FooterPart/>
   </>
  )
}

export default Layout
