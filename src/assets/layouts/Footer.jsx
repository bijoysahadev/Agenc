import  Container  from '../../Components/Container'
import React from 'react'
import Flex from '../../Components/Flex'
import Logo from '../../assets/logo.png'
import Image from '../../Components/Image'
import SubHeading from '../../Components/SubHeading'
import Listitem from '../../Components/Listitem'
const Footer = () => {
  return (
   <footer className={`pt-[150px] bg-white`}>
    <Container>
     <Flex className={` items-start justify-around`} >
    <div className='w-4/12   '>
    <Image src={Logo}/>
    <SubHeading className={`w-[356px] pt-[30px]` } text={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`}/>
    </div>
    <div className='w-2/12 '> 
    <strong className='inline-block text-xl text-third text-inter font-semibold pb-10 pl-[78px]'> About</strong>
     <ul className='flex flex-col items-center gap-y-4'>
        <Listitem className={`!text-base !text-secondary `} text={`About Us`}/>
        <Listitem    className={`!text-base !text-secondary `} text={`Features`}/>
        <Listitem    className={`!text-base !text-secondary `} text={`News`}/>
        <Listitem    className={`!text-base !text-secondary `} text={` Careers`}/>
     </ul>
    </div>
    <div className='w-2/12  '>
      <strong className='inline-block text-xl text-third text-inter font-semibold pb-10 pl-[78px]'>Company</strong>
     <ul className='flex flex-col items-center gap-y-4 text-start'>
        <Listitem className={`!text-base !text-secondary `} text={`Our Teams`}/>
        <Listitem    className={`!text-base !text-secondary `} text={`Partner With Us`}/>
        <Listitem    className={`!text-base !text-secondary `} text={`FAQ`}/>
        <Listitem    className={`!text-base !text-secondary `} text={` Blog`}/>
     </ul>
    </div>
    <div className='w-2/12  '>
       <strong className='inline-block text-xl text-third text-inter font-semibold pb-10 pl-[78px]'>Support</strong>
     <ul className='flex flex-col items-center gap-y-4 text-start'>
        <Listitem className={`!text-base !text-secondary `} text={`About`}/>
        <Listitem    className={`!text-base !text-secondary `} text={`Support Center`}/>
        <Listitem    className={`!text-base !text-secondary `} text={`FeedbackQ`}/>
        <Listitem    className={`!text-base !text-secondary `} text={` Contact Us`}/>
        <Listitem    className={`!text-base !text-secondary `} text={` Accesbility`}/>
     </ul>
    </div>
    <div className='w-2/12  '>
       <strong className='inline-block text-xl text-third text-inter font-semibold pb-10 pl-[50px]'>Get in toucht</strong>
     <ul className='flex flex-col items-center gap-y-4 text-start'>
        <Listitem className={`!text-base !text-secondary `} text={`info@gmail.com`}/>
        <Listitem    className={`!text-base !text-secondary `} text={`+88 0121 0212`}/>
      
     </ul>
    </div>
     </Flex>
     <div className='pt-[10px] mt-[50px] border-t border-[#E8E8E8] pb-10'>
      <p className='text-center text-[#D0D0D0] font-inter font text-[16px]'>All credit goes to @agence.com</p>
     </div>
    </Container>
   </footer>
  )
}

export default Footer
