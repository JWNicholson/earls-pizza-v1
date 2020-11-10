import React from 'react';
import { FeatureContainer,FeatureButton } from './FeatureStyles';

const Feature = () => {
    return (
      <FeatureContainer>
          <h1>Today's Special</h1>
          <p>The Cryin Hawaiin Pizza</p>
          <p>Pineapples,Wild Hog Sausage, and lots of Onions</p>
        <FeatureButton >Order Now</FeatureButton>
      </FeatureContainer>
    )
}

export default Feature;
