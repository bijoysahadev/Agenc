import Container from "../../Components/Container";
import Flex from "../../Components/Flex";
import Image from "../../Components/Image";
import React from "react";
import RatingCarrd from "../../Components/RatingCarrd";
import ProfileOne from "../profile1.png"; //  Correct path
import ProfileTwo from "../profile2.png"; //  Correct path
import ProfileThree from "../profile3.png"; //  Correct path
import ProfileFour from "../profile4.png"; //  Correct path
import ProfileFive from "../profile5.png"; //  Correct path
import RatingProfile from "../../Components/RatingProfile";
import { FaStar } from 'react-icons/fa';

const Rating = () => {
  return (
    <section>
      <Container>
        <Flex className="bg-[rgba(0,0,0,0.1)] py-[86px] px-[50px] rounded-[20px]">
          <div className="w-4/12 ">
            <p className="text-primary text-2xl font-medium font-inter">
              Our Success
            </p>
            <h3 className=" w-[387px] pt-4 text-[35px] font-semibold text-dark font-inter">
              West cost Brand makers-Global Edge
            </h3>
          </div>
          <div className=" w-8/12 ">
            <Flex className="justify-around">
              <div className="relative ">
                <RatingCarrd tittle="200+" text="Customer Satisfied" />
                <div>
                  <RatingProfile className="left-[20px] " image={ProfileOne} />
                  <RatingProfile className="left-[40px] " image={ProfileTwo} />
                  <RatingProfile
                    className="left-[60px] "
                    image={ProfileThree}
                  />
                  <RatingProfile className=" left-[80px]" image={ProfileFour} />
                  <RatingProfile
                    className=" left-[100px]"
                    image={ProfileFive}
                  />
                </div>
              </div>
              <div className="relative ">
                <RatingCarrd tittle="4.5+" text="200+ Avg rating" />
                <div className="absolute bottom-[20px]">
                  <Flex className={`gap-1`}>
               <li className="list-none"><a href="#"><FaStar className="text-[#FFAC4A]" /></a></li>
               <li className="list-none"><a href="#"><FaStar className="text-[#FFAC4A]" /></a></li>
               <li className="list-none"><a href="#"><FaStar className="text-[#FFAC4A]" /></a></li>
               <li className="list-none"><a href="#"><FaStar className="text-[#FFAC4A]" /></a></li>
               <li className="list-none"><a href="#"><FaStar className="text-[#FFAC4A]" /></a></li>
            
                  </Flex>
                </div>
              </div>
              <div className="relative ">
                <RatingCarrd tittle="351+" text="Project Delivered" />
                <a href="#" className="absolute bottom-[20px] underline decoration-solid text-primary">
                  See Works
                </a>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Rating;
