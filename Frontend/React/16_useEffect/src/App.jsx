import React, { useEffect } from 'react'
import { useState } from 'react';

const App = () => {

  const [a,setA] = useState(0)
  const [b,setB] = useState(0)

  function aChanging(){
    console.log('A ki value change ho gyi');
    
  }

  function bChanging(){
    console.log('B ki value change ho gyi');
    
  }

  // useEffect(function(){
  //   console.log('use effect is running...');
    
  // },[a,b])

  useEffect(function(){
    aChanging()    
  },[a])

  const [num, setNum] = useState(1)
  const [num2, setNum2] = useState(10)

  //Mounting

  useEffect(function(){
    console.log('use effect is running...');
    
  },[num]) // ye '[]' use karne par log bar bar nahi chalega 
  return (
    <div>
      <h1>Value of num1:{num}</h1>
      <h1>Value of num2:{num2}</h1>
      <h1></h1>
      <button onMouseEnter={()=>{
          setNum(num+1)
          
      }}
      
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}>Hover to See Magic</button>

      <div>
        <h1> A is {a}</h1>
        <h1> B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}
      >Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
      </div>
    </div>



  )
}

export default App
