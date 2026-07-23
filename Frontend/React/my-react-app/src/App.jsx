import React, { useState } from 'react'
import Products from './Products';

function App() {
  // var [a,b] = useState(69);
  const [a,b] = useState(false);
  return (
    <div className='w-full h-screen bg-black text-white'>
      <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`} >{a === false ? "hello false": "hey true"}</h4>
      <button onClick={()=> b(!a)}>change</button>
    </div>
  )
}

export default App