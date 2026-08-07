import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About_Us from './pages/About_Us'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Products from './pages/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About_Us />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/product' element={<Products />}/>
      </Routes>
        

    </div>
  )
}

export default App
