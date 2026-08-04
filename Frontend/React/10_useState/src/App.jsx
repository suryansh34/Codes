import React, { useState } from 'react'
// import Top from './Components/Top'
import App2 from './Components/App2'
import App3 from './Components/App3'


const App = () => {
  

  const [a,b] = useState(0)

  function increase(){
    b(a+1)
  }
  function decrease(){
    b(a-1)
  }
  function jump5(){
    b(a+5)
  }
  function unjump5(){
    b(a-5)
  }
  
  return (
    <div>
      <h1 className='h1'>{a}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jump5}>jump by 5</button>
      <button onClick={unjump5}>unjump by 5</button>
      <App2/>
      <App3/>
    </div>
  )
}

export default App
