import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAuth } from '../authProvider/AuthProvider';
export default function Root() {
  const {title} = useAuth();
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header/>
        <Outlet/>
        <Footer/>
      </HelmetProvider>
      </div>
  )
}
