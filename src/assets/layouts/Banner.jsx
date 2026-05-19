import  Container  from '../../Components/Container'
import React from 'react'
import Flex from '../../Components/Flex'
import Image from '../../Components/Image'
import BannerImage from '../banner-image.png';
import Button from '../../Components/Button'
const Banner = () => {
  return (
    <div>
      <section className='pt-8 pb-[150px]'>
        <Container >
         <Flex className="item-center">
              <div className='w-1/2 '>
              <h1 className='leading[120%] text-[75px] text-dark font-bold font-inter'>We Help brands with high quality services </h1>
              <p className='leading-7 pt-5  pb-8 text-base text-secondary font-inter font-normal w-[604px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
              <Button text="Get Started"/>
              </div>
            <div className='w-1/2 '>
            <Image src={BannerImage}/>
            </div>
         </Flex>
        </Container>
      </section>
    </div>
  )
}

export default Banner
