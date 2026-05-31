import Container from "../../Components/Container";
import React from "react";
import Flex from "../../Components/Flex";
import Heading from "../../Components/Heading";
import SubHeading from "../../Components/SubHeading";
import Label from "../../Components/Label";
import Button from '../../Components/Button'
const Contact = () => {
  return (
    <section className="py-[150px] bg-[#F3F3F3]">
      <Container>
        <Flex className={`items-center`}>
          <div className="w-1/2 h-[400px]  ">
            <Heading
              className={`w-[470px]`}
              text={`We Do design, Code & Development`}
            />
            <SubHeading
              className={`w-[514px]`}
              text={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`}
            />
            <SubHeading
              className={`528px pt-5 pb-2`}
              text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`}
            />
          </div>
          <div className="w-1/2  ">
            <form className="pb-[30px] w-[536px] bg-white rounded-[20px] py-[61px] px-[43px]">
              <h4 className="text-third text-[30px] text-center font-bold">
                Get a free quote now
              </h4>

            <Label text={`Enter your name`} tittle={`Name`} type1={`name`} type2={`name`}/>
            <Label className={`py-5 block` } text={`Enter your email`} tittle={`Email`} type1={`email`} type2={`email`}/>
            <Label type1={`number`} type2={`number`} text={`Enter your phone number`} tittle={`Phone`}/>
           <Button className={`w-full mt-[30px] py-[19px]`} text={`Get Pricing Now`} />
            </form>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Contact;
