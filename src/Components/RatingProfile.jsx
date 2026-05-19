import React from 'react'
import Image from './Image'
const RatingProfile = ({className,image}) => {
  return (
    <div>
        <div className={`absolute top-0 left-0   w-[35px] h-[35px] rounded-full bg-red-700 ${className}`}>
                  <Image className='w-full' src={image}/>
             
                 </div>
    </div>
  )
}

export default RatingProfile
