import React from 'react'

const Heading = ({text,className }) => {
  return (
    <div className={`text-[45px] text-third font-inter font-bold ${className}`}>
   {text}
    </div>
  )
}

export default Heading
