import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Contact from './pages/Contact'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'


const App = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/womens' element={<Women/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/mens' element={<Men/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/courses/:id' element={<CourseDetail/>}/>

        </Routes>
      <Footer/>
    </div>
  )
}

export default App

