import React from 'react'
import Image from '../Components/Image'
import SubHeading from './SubHeading'
import Heading from './Heading'

const AgencyCard = ({className,text,tittle,icon}) => {
  return (
    <div className={`w-[344px]  flex items-start  justify-center flex-col  ${className} `}>
      <Image  src={icon}/>
      <Heading  className={ `pt-5 pb-2.5 !text-[25px] ${className}`  }text={tittle}/>
      <SubHeading className={`!w-[344px] text-start leading-[26px]   ${className}`} text={text}/>

    </div>
  )
}

export default AgencyCard