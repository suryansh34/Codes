import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [Theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}/>
    </div>
  )
}

export default App
