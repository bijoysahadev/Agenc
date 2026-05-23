import React from 'react'
import Image from '../Components/Image'
import SubHeading from './SubHeading'
import Heading from './Heading'

const ServiceCard = ({className,text,tittle,icon}) => {
  return (
    <div className='w-[424px] h-[428px] flex items-center  justify-center flex-col shadow-lg hover:scale-[1.07]  duration-300 rounded-[20px]'>
      <Image  src={icon}/>
      <Heading  className={ `pt-10 pb-5 !text-[25px]` }text={tittle}/>
      <SubHeading className={`w-[326px] mx-auto text-center leading-[26px]  `} text={text}/>

    </div>
  )
}

export default ServiceCard
