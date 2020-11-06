import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroTitle, HeroP, HeroBtn } from './HeroStyles';

const Hero = () => {
   const [isOpen,setIsOpen] =  useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   }

   return (
      <>
       <HeroContainer>
          <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
       <HeroContent>
       <HeroItems>
          <HeroTitle>The Only Pizza You Want</HeroTitle>
             <HeroP>Ready when we say it is</HeroP>
             <HeroBtn>Order Now!</HeroBtn>
       </HeroItems>
       </HeroContent>
       </HeroContainer>
       </>
   );
}

export default Hero;
