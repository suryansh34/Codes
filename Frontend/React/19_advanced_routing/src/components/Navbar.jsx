import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='flex py-4 justify-between items-center px-8 bg-blue-800 gap-8'>
        <h2 className='text-2xl font-bold'>Suryansh</h2>
        <div className='flex gap-8'>
          <Link className='text-xl font-semibold' to='/'>Home</Link>
          <Link className='text-xl font-semibold' to='/about'>About Us</Link>
          <Link className='text-xl font-semibold' to='/product'>Product</Link>
          <Link className='text-xl font-semibold' to='/contact'>Contact</Link>
          <Link className='text-xl font-semibold' to='/courses'>Courses</Link>
        </div>
      </div>
  )
}

export default Navbar
