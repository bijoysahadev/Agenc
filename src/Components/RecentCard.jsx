import React from 'react'
import Heading from './Heading'
import Image from './Image'
import SubHeading from '../Components/SubHeading'
import RecentCard1 from '../assets/RecentCard1.png'
const RecentCard = ({tittle,text,icon}) => {
  return (
    <div className={`w-[424px] h-[457px] bg-[#FFFFFF] rounded-[20px]` }>
       <div className={`w-[424px] h-[311px]  rounded-[20px] border` }>
        <Image src={icon} className={`w-full h-full rounded-[20px] `}/>
       </div>
     <Heading text={tittle} className={`text-inter text-center text-dark !text-bold !text-[20px] pt-[30px] pb-[10px]`} />
      <SubHeading text={text  } className={`mx-auto text-center !w-[340px ] text-regular text-inter text-[16px] leading-[26px] `}/>
    </div>
  )
}

export default RecentCard
