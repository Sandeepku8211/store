import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-4 text-2xl p-4 m-4'>
      <NavLink to='/'>
        <div className='flex gap-1.5 border-2 p-2  '>
            <h1 className='text-4xl font-bold' >Kyara</h1><br />
            <span className='mt-2 font-semibold'><h3>Beverages</h3></span>
        </div>
        
      </NavLink>
      <div className='mt-2 gap-5 flex font-semibold'>
        <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>about</NavLink>
      <NavLink to='/contact'> contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
