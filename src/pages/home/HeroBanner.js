import React from 'react';
import Gate from "../../components/images/home/gates.jpg";
import {HeroBanner, HomeHeroTitle, HomeHeroSub, HeroTextCont} from '../../styled-compoments/HeroStyles';
import Fade from 'react-reveal/Reveal';

const HomeHeroBanner = () => (
  <>
  <HeroTextCont>
    <HomeHeroTitle>
      <Fade right>
      Una Storia Segreta
      </Fade>
    </HomeHeroTitle>
    <HomeHeroSub>
      <Fade left>
      WHEN ITALIAN AMERICANS WERE “ENEMY ALIENS”
      </Fade>
    </HomeHeroSub>
    {/* <HomeHeroSub>
      <Fade left>
    The American Italian Historical Association Presents
      </Fade>
    </HomeHeroSub> */}
  </HeroTextCont>
  <HeroBanner style={{ background: `url(${Gate})` }}>
  </HeroBanner>
  </>
)

export default HomeHeroBanner;