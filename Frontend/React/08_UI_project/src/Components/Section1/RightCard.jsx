import React from 'react'
import {ArrowRight} from 'lucide-react';
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full w-80 object-cover overflow-hidden relative bg-red-500 rounded-4xl fit-content'>
      <img className='h-full w-full' src={props.img} alt="" />
      <RightCardContent intro={props.intro} color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
