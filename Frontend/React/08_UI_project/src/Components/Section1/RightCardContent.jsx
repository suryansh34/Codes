import React from 'react'
import {ArrowRight} from 'lucide-react';

const RightCardContent = (props) => {
  return (
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-between">
        <h2 className='bg-white w-8 h-8 rounded-full flex justify-center items-center font-semibold text-2xl'>{props.id+1}</h2>
        <div className="bg-black/40 backdrop-blur-xxs p-4 rounded-xl mb--5">
            <p className="text-white font-semibold leading-relaxed mb-15">{props.intro}</p>
            <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' rounded-full py-2 px-7 font-medium'>{props.tag}</button>
                    <button className=' rounded-full py-3 px-3 font-medium'><ArrowRight size={15}/></button>

            </div>
        </div>

      </div>
  )
}

export default RightCardContent
