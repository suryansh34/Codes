import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // const getData = async () =>{
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

  //     console.log(response);
      
  // }
  // de-structuring above these:
  // const getData = async () =>{
  //     const {data} = await axios.get('https://picsum.photos/v2/list')

  //     console.log(data);
  // }

  //  async function getData(){
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    //     console.log(response);
    //  }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response); //or can use .then     
  // }

  const [data, setData] = useState([])
    
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')  
    
    console.log(response);

    setData(response.data)
    
  }
   

  return (
    <div>
      <button onClick={getData} >Click Here to get Data</button>
      <div>
      {data.map(function(elem,idx){        
        return <h3>Hello, {elem.author} {idx}</h3>
      })}
      </div>
    </div>
  )
}

export default App
