import React from 'react'

const Card = (props) => {
  return (    
    <div className='parentCard'>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>{props.description}</p>
        <button>Click Here</button>
      </div>
    </div>
    
      
  )
}

export default Card
