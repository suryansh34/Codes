import React from 'react'

function Products({naam,data}) {
  return (
    <div className=' bg-grey w-full h-60 bg-zinc-800 text-white '>
        <h1>{naam} </h1>
          
        <h2>{data.age} </h2>
        <h2>{data.name} </h2>
    </div>
  )
}

export default Products