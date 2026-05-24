import Container  from '../../Components/Container'
import React from 'react'
import Heading from '../../Components/Heading'
import SubHeading from '../../Components/SubHeading'
import Flex from '../../Components/Flex'
import RecentCard from '../../Components/RecentCard'
import RecentCard1 from '../RecentCard1.png'
import RecentCard2 from '../RecentCard2.png'
import RecentCard3 from '../RecentCard3.png'
import RecentCard4 from '../RecentCard4.png'
import RecentCard5 from '../RecentCard5.png'
import RecentCard6 from '../RecentCard6.png'

import Image from '../../Components/Image'
const Recent = () => {
  return (
    <div >
     <section className={`bg-[#F3F3F3] py-[150px]`}>
       <Container >
        <Heading text={`Our Recent Work`  } className={`text-center `}/>
        <SubHeading text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`} className={`text-center w-[620px] mx-auto leading-[26px]`}/>
        <Flex className={`justify-between pt-4` }>
      <SubHeading text={`All`} className={`!text-[rgba(106,77,244,1)]`}/>
      <SubHeading text={`Mobile Design`} />
      <SubHeading text={`Web design`}/>
      <SubHeading text={`Branding`}/>
      <SubHeading text={`Illustration`}/>
      <SubHeading text={`Digital Marketing`}/>
        </Flex> 
        <Flex className={`flex-wrap justify-center items-center gap-4 pt-[50px] `}>
            <RecentCard text={`This is a task management application that can help you be more `} tittle={`Task Management App`} icon={RecentCard1}/>
            <RecentCard text={`This is a task management application that can help you be more `} tittle={` Saas Landing Page Design App`} icon={RecentCard2}/>
            <RecentCard text={`This is a task management application that can help you be more `} tittle={`App Design`} icon={RecentCard3}/>
            <RecentCard text={`This is a task management application that can help you be more `} tittle={`Landing Page Design`} icon={RecentCard4}/>
            <RecentCard text={`This is a task management application that can help you be more `} tittle={`Dashboard Design`} icon={RecentCard5}/>
            <RecentCard text={`This is a task management application that can help you be more `} tittle={`Dashboard Design`} icon={RecentCard6}/>
        
        </Flex>
     </Container>
     </section>
    </div>
  )
}

export default Recent
