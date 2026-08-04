import React, { useState } from 'react'

const App = () => {

  const [title,setTitle] = useState('aman')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input 
        type="text" 
        placeholder='Enter Your Name:'
        value={title}
        onChange={(e)=>{
          // console.log(e.target);
          setTitle(e.target.value);
          
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
