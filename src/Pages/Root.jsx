import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

export default function Root() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
           </div>
  )
}
