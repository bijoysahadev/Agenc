import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <p className={`text-base text-secondary font-normal font-inter  ${className}`}>
    {text}
    </p>
  )
}

export default SubHeading
