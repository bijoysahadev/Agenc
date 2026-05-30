import  Container  from '../../Components/Container'
import React from 'react'
import Flex from '../../Components/Flex'
import AgencyImage from '../Agency.png'
import Image from '../../Components/Image'
import Heading from '../../Components/Heading'
import SubHeading from '../../Components/SubHeading'
import AgencyCard from '../../Components/AgencyCard'
import AgencyImage1 from '../AgencyCard1.png'
const Agency = () => {
  return (
  <section className='py-[150px]'>
    <Container>
     <Flex  className={``}>
           <div className='w-7/12 '>
           <Heading className={`w-[518px] `} text={`Why You Should Choose Agenc`}/>
           <SubHeading className={`w-[508px] pt-5 pb-20 leading-[26px]` } text={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}/>
        <Flex className={`flex-wrap justify-center  gap-6 `}>
              <AgencyCard className={``} tittle={`Innovative Ideas`} icon={AgencyImage1} text={`Because each project is different, we adapt to your business model.`}/>
            <AgencyCard className={``} tittle={`Innovative Ideas`} icon={AgencyImage1} text={`Because each project is different, we adapt to your business model.`}/>
            <AgencyCard className={`mt-2.5`} tittle={`Innovative Ideas`} icon={AgencyImage1} text={`Because each project is different, we adapt to your business model.`}/>
        </Flex>
           </div>
        <div className='w-5/12 '>
         <Image src={AgencyImage} />
        </div>
     </Flex>
    </Container>
  </section>
  )
}

export default Agency
