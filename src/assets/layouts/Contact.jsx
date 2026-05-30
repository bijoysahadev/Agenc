import Container from "../../Components/Container";
import React from "react";
import Flex from "../../Components/Flex";
import Heading from "../../Components/Heading";
import SubHeading from "../../Components/SubHeading";

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
            <div className="h-[622px] w-[536px] bg-white rounded-[20px] py-[61px] px-[43px]">
              <h4 className="text-third text-[30px] text-center font-bold">
                Get a free quote now
              </h4>

              <label className="text-base text-third font-medium font-inter ">Name
                <input type="text"  className="mt-2 w-full py-[19px] px-[23px] rounded-[10px] border border-[#E8E8E8]" placeholder="Enter Your Name" />
              </label>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Contact;
