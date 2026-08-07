import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()  

  const btnClicked = ()=> {
    navigate('/')
  }

  return (
    <div>
      <button onClick= {()=>{
        navigate('/')
      }} className="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
        Return to Home Page
      </button>
      <h1>About Us</h1>
    </div>
  )
}


export default About
