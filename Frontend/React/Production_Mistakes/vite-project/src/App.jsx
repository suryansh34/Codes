import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(NaN)

  return (
   <div style={{padding: "2rem"}}>
    <h1>Welcome to.. </h1>
    <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>
      Toggle Login
    </button>

    <div>
      <h3>&& Operator</h3>
      {!!isLoggedIn && <p> Welcome to this video</p>}
    </div>

    <div>
      <h3>Ternary Operator</h3>
      {isLoggedIn ? <p>Welcome to this video</p>: "Please login"}
    </div>
   </div>
  )
}

export default App
