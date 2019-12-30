import React from 'react';
import Gate from "../../components/images/home/gates.jpg";
import {HeroBanner, HomeHeroTitle, HomeHeroSub, HeroTextCont} from '../../styled-compoments/HeroStyles';
import Fade from 'react-reveal/Reveal';

const HomeHeroBanner = () => (
  <>
  <HeroTextCont>
    <HomeHeroSub>
      <Fade left>
    The American Italian Historical Association Presents
      </Fade>
    </HomeHeroSub>
    <HomeHeroTitle>
      <Fade right>
      Una Storia Segreta
      </Fade>
    </HomeHeroTitle>
  </HeroTextCont>
  <HeroBanner style={{ background: `url(${Gate})` }}>
  </HeroBanner>
  </>
)

export default HomeHeroBanner;