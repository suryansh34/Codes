import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
          <h3>Suryansh</h3>
          <div>
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
             */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
          </div>
        </div>
        <h2 className='footer'>This is Footer</h2>
    </div>
  )
}

export default Navbar
