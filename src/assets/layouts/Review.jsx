import React from 'react'
import Heading from '../../Components/Heading'
import SubHeading from '../../Components/SubHeading'
import ReviewCard from '../../Components/ReviewCard'
import Flex from '../../Components/Flex'
import ReviewCardImage1 from '../ReviewCard1.png';
import ReviewCardImage2 from '../ReviewCard2.png';
import ReviewCardImage3 from '../ReviewCard3.png';
const Review = () => {
  return (
    <section className='py-[150px]'>
        <Heading text={`Some Client Reviews`} className={`text-center`}/>
        <SubHeading text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`} className={`text-center mx-auto w-[620px] pb-[100px]`}/>
         <Flex >
             <ReviewCard  object={`Digital Marketor`} tittle={`Eric Drake`} icon={ReviewCardImage1} text={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`}/>
             <ReviewCard  object={`UX Researcher`} tittle={`Awlad Hossain`}  icon={ReviewCardImage2} text={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`}/>
             <ReviewCard  object={`UI Designer`} tittle={`Rosa Farmer`} icon={ReviewCardImage3}  text={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`}/>
         </Flex>
    </section>
  )
}

export default Review
