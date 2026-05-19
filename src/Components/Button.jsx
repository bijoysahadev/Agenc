import React from 'react'

const Button = ({text,className}) => {
  return (
       <button className={`text-xl text-white font-inter font -semibold bg-primary px-[42px] py-[15px] rounded-[10px] hover:bg-transparent duration-300 hover:text-primary border border:transparent hover:border-primary ${className}` }>{text}</button>
  )
}

export default Button
