import React from 'react';
import {Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <section className="container">
        <Link to='/' className='navbar-brand'>Auth</Link>
        <ul className="navbar-nav">
          <li className='nav-item'>
            <NavLink to='/' className="nav-link active">Home</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/register' className="nav-link">Register</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/login' className="nav-link">Login</NavLink>
          </li>
        </ul>
        
      </section>
    </nav>
  )
}
