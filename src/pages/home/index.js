import React from 'react';
import HomeHeroBanner from './HeroBanner';
import PanelFeature from './PanelFeature';
import StoryIntro from "./StoryIntro";
import Fade from 'react-reveal/Reveal';

const Home = () => (
  <>
<HomeHeroBanner />
  <Fade bottom>
<StoryIntro />
  </Fade>
<PanelFeature />
  </>
)

export default Home