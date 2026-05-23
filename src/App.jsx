import React from 'react'
import Listitem from './Components/Listitem'
import Button from './Components/Button'
import Logo from './assets/logo.png';
import Image from './Components/Image';

import Flex from './Components/Flex';
import Navbar from './assets/layouts/Navbar'
import Banner from './assets/layouts/Banner';
import Rating from './assets/layouts/Rating';
import Heading from './Components/Heading';
import SubHeading from './Components/SubHeading';
import Service from './assets/layouts/Service';
const App = () => {
  return (
    <>
   <Navbar/>
   <Banner/>
   <Rating/>
   <Service/>
    </>
    
  )
}

export default App
