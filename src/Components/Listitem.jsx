import React from 'react'

const Listitem = ({text,className}) => {
  return ( <li className={`'text-lg text-secondary font-inter font-normal cursor-pointer hover:text-primary  duration-500 ' ${className}`}>{text}</li>

  )
}

export default Listitem
