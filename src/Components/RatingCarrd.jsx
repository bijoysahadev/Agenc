import React from 'react'

const RatingCarrd = ({text,tittle}) => {
  return (
    
         <div>
            <h3 className='text-[50px] text-dark  font-inter font-bold '>{tittle}</h3>
            <p className=  'pb-20 text-secondary font-inter font-medium'>{text}</p>
          </div>
    
  )
}

export default RatingCarrd
