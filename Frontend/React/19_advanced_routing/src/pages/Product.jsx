import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-xl font-semibold' to='/mens'>Men's Clothing</Link>
            <Link className='text-xl font-semibold' to='/womens'>Women's Clothing</Link>
        </div>

      <h1>Product Page</h1>
    </div>
  )
}

export default Product
