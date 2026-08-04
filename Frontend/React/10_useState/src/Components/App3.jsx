// destructuring for array
import React, { useState } from 'react'

const App3 = () => {
    
    const [num,setNum] = useState([10,20,30])

    const btnClicked = ()=> {
        const newNum = [...num]
        newNum.push(99)

        setNum(newNum)
        // setNum(prev=>({...prev,age:50}))

        // setNum(prev=>(prev + 1))
        // setNum(prev=>(prev + 1))
        // setNum(prev=>(prev + 1))
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default App3
