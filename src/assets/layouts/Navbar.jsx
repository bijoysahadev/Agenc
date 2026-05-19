

import Container from '../../Components/Container';
import React from 'react'
import Flex from '../../Components/Flex';
import Logo from '../../assets/logo.png'
import Image from '../../Components/Image'; //  Correct path
import Listitem from '../../Components/Listitem';
import Button from '../../Components/Button';
const Navbar = () => {
  return (
    <nav className='py-[20px]'>
      <Container>
       <Flex className="justify-between items-center">
          <div>
           <Image src={Logo} alt="logo"/>
          </div>
        <div>
          <ul className='flex gap-x-10'>
            <Listitem text="Home"/>
            <Listitem text="About"/>
            <Listitem text="Servicee"/>
            <Listitem text="Careers"/>
            <Listitem text="Contact"/>
        
          </ul>
        </div>
        <div>
          <Button text="Contact"/>
        </div>
       </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
