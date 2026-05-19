import Container from '../../Components/Container';
import Flex from '../../Components/Flex';
import Image from '../../Components/Image';
import React from 'react'
import RatingCarrd from '../../Components/RatingCarrd';
import ProfileOne from '../profile1.png'; //  Correct path
import RatingProfile from '../../Components/RatingProfile';

const Rating = () => {
  return (
 <section >
     <Container>
        <Flex className='bg-[rgba(0,0,0,0.1)] py-[86px] px-[50px] rounded-[20px]'>
          <div className='w-4/12 '>
          <p className='text-primary text-2xl font-medium font-inter'>Our Success</p>
            <h3 className=' w-[387px] pt-4 text-[35px] font-semibold text-dark font-inter'>West cost Brand makers-Global Edge</h3>
          </div>
          <div className=' w-8/12 '>
          <Flex className="justify-around">
            <div > 
                 <RatingCarrd tittle="200+" text="Customer Satisfied"/>
                 <div className='relative'>
                
            
              <RatingProfile className="left-[20px] " image ={ProfileOne}/>
              <RatingProfile className="left-[40px] " image ={ProfileOne}/>
              <RatingProfile className="left-[60px] " image ={ProfileOne}/>
              <RatingProfile className=" left-[80px]" image ={ProfileOne}/>
       
              
            

                 </div>

            </div>
            <RatingCarrd tittle="4.5" text="200+ Avg rating"   />
            <RatingCarrd  tittle="351+" text="Project Delivered" />
          </Flex>
          </div>  
        </Flex>
    </Container>
 </section>
  )
}

export default Rating
