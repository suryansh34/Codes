// destructuring 
import React, { useState } from 'react'

const App2 = () => {
    const [num,setNum] = useState({user:'Aman',age: 18})

    const btnClicked = ()=>{
        const newName = {...num};
        newName.user = 'Sarthak'
        newName.age = 24
        setNum(newName)
    }
    
    

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default App2
