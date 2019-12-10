import React from 'react';
import {Grid, Card} from 'semantic-ui-react';
import Panel31 from '../images/31-Panel-5.jpg';
import Panel36 from '../images/125-Panel-36.jpeg';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";

const Home = () => (
  <>
  <h1>Segreta</h1>

  <hr />
  <h2>Hover Zoom</h2>
  <SideBySideMagnifier 
  imageSrc={Panel31}
  imageAlt="Example"
  largeImageSrc={Panel31} 
  />
  <p></p>
  <SideBySideMagnifier 
  imageSrc={Panel36}
  imageAlt="Example"
  largeImageSrc={Panel36} 
  />

<h2>Glass Viewer</h2>
  <GlassMagnifier 
  imageSrc={Panel31}
  imageAlt="Example"
  />

  </>
)

export default Home