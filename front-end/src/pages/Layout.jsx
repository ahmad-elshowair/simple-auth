import { Outlet } from 'react-router-dom';
import React from 'react'
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';

export const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}
