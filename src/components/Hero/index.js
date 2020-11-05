import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems, HeroTitle, HeroP, HeroBtn } from './HeroStyles';

const Hero = () => {
   return (
      <>
       <HeroContainer>
          <Navbar />
      
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
