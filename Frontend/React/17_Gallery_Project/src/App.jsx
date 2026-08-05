import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]); // useState --> snippet

  const [index, setIndex] = useState(1)

  const getData = async () =>{
    // console.log('data aa gya');
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)

    setUserData(response.data)
    
    console.log(response.data);
    
  }

  useEffect(function(){
      getData
  },[index])

  let printUserData = <h3 className='text-gray-400'>No User Available</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>

     <a href={elem.url}>
       <div className='h-40 w-44 overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
     </a>

      </div>
    })
  }
  return (
    <div className='h-screen bg-black text-white'>
      <button onClick={getData}
      className='bg-green-600 text-white active:scale-95 px-10 py-5 m-10 rounded text-3xl'>
      Get data
      </button>

      <h1 className='fixed text-4xl'>{index}</h1>
      <div className='bg-black flex flex-wrap gap-5 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>

        <button 
        style={{opacity: index==1?0.5:1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
          
        }}
        className='bg-amber-400 text-sm cursor-pointer text-black rounded-xl px-4 py-3'>
          Prev
        </button>

        <button onClick={()=>{
          setIndex(index+1)
          
        }}
        className='bg-amber-400  text-sm cursor-pointer text-black rounded-xl px-4 py-3'>
        Next
        </button>

      </div>
    </div>
  )
}

export default App
