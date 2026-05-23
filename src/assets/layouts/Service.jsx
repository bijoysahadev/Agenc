
import React from 'react'
import Heading from '../../Components/Heading'
import SubHeading from '../../Components/SubHeading'
import  Container  from '../../Components/Container'
import ServiceCard from '../../Components/ServiceCard'
import ServiceIconOne from '../../assets/ServiceCard1.png'
import ServiceIconTwo from '../../assets/ServiceCard2.png'
import ServiceIconThree from '../../assets/ServiceCard3.png'
import ServiceIconFour from '../../assets/ServiceCard4.png'
import ServiceIconFive from '../../assets/ServiceCard5.png'
import ServiceIconSix from '../../assets/ServiceCard6.png'
import Flex from '../../Components/Flex'
const Service = () => {
  return (
    <div>
      <section className='py-[150px]'>
      <Container>
     <Heading className={`text-center`} text="Our Provided Services"/>
     <SubHeading className={`text-center  mx-auto w-[609px] leading-[26px] pt-5`}text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
  <Flex className={`flex-wrap justify-between items-center gap-y-14 pt-20`}>
            <ServiceCard  tittle={`Web Design`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`}  icon={ServiceIconOne}/>
        <ServiceCard  tittle={`UI/UX Design`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look..`}  icon={ServiceIconTwo}/>
        <ServiceCard  tittle={`Web Development`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`}  icon={ServiceIconThree}/>
        <ServiceCard  tittle={`Motion Graphics`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`}  icon={ServiceIconFour}/>
        <ServiceCard  tittle={`3D Animation`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`}  icon={ServiceIconFive}/>
        <ServiceCard  tittle={`Digital Marketing`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`}  icon={ServiceIconSix}/>
  </Flex>

      </Container>
  
      </section>
    </div>
  )
}

export default Service
