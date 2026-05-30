import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'
import  Container  from '../Components/Container'
import Image from './Image'
import ReviewCardImage1 from '../assets/ReviewCard1.png'
import Review1 from '../assets/Review1.png'
import Flex from './Flex'
import { FaStar } from "react-icons/fa";
const ReviewCard = ({tittle,className,text,icon,object}) => {
  return (
  <Container>
      <div className={`w-[424px] h-[422px] pt-[55px] px-[57px] bg-[#FFFFFF] hover:shadow-lg  hover:scale-110 duration-300`}>
        <Image src={Review1}/>
      <SubHeading className={`pt-[20px] text-[16px] font-regular`} text={text}/>
    <ul className='flex gap-[6px] items-center text-[#F9BD2C] py-[20px]'>
  <li><FaStar /></li>
  <li><FaStar /></li>
  <li><FaStar /></li>
  <li><FaStar /></li>
  <li><FaStar /></li>
</ul>
      <Flex className={`items-center `}>
        <div className='w-[47px] h-[47px] bg-red-600 rounded-full  '>
              <Image src={icon}/>
        </div>
       <div className='pl-4'>
           <h2 className='text-inter font-semibold text-[20px] text-[rgb(35,35,35,)] '>{tittle}</h2>
      <h3 className='text-inter font-regular text-[16px]  text-[#7B7B7B]'>{object}</h3>
       </div>
      </Flex>
    </div>
  </Container>
  )
}

export default ReviewCard
