import React, { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {PanelBanner, PanelCTA, PanelText, PanelImage, PanelDetail, Horizontal, PanelContent} from '../../styled-compoments/PanelFeatureStyles';
import Fade from 'react-reveal/Fade'; 
import IntroHero from "../../components/images/panels/intro/intro-hero2.jpg";
import HeroMusso from "../../components/images/panels/prelude/hero-musso.jpg";
import HeroCamp from '../../components/images/panels/internment/camp-hero.jpg';
import HeroRestriction from '../../components/images/panels/restrictions/HeroRestriction.jpg';
import HeroEvac from '../../components/images/panels/evacuation/HeroEvacuation.jpg';
import HeroExclusion from '../../components/images/panels/exclusion/HeroExclusion.jpg';
import HeroAfter from '../../components/images/panels/aftermath/HeroAfter.jpg';
import HeroSup from '../../components/images/panels/supplement/P7Sup1.jpg';

class PanelFeature extends Component {
  state = { 
    panels: [
      {
        number:0,
        title: "Introduction",
        detail: "By the 1930s, the Italian population was at its peak: Italian Americans comprised the largest immigrant group not only in San Francisco, but in the entire United States",
        image: IntroHero,
        link: "/intro",
        buttonText:'Read More',
      },
      {
        number:1,
        title: "PRELUDE TO WAR",
        detail: "Benito Mussolini came to power in 1922 with the now-famous march of his blackshirts to Rome. Although the American left opposed him from the beginning, he was widely touted in the popular press as a “black-shirted Garibaldi.” ",
        image: HeroMusso,
        link: "/prelude",
        buttonText:'The Panels',
      },
      {
        number:2,
        title: "Internment",
        detail: "Beginning on the night of December 7, 1941, Japanese, German and Italian aliens were arrested by the FBI. How could this happen? The U.S. had not declared war by that date.",
        image: HeroCamp,
        link: "/internment",
        buttonText:'The Panels',
      },
      {
        number:3,
        title: "Restrictions",
        detail: "In January of 1942, all enemy aliens were required to register at local post offices around the country. Although all resident aliens had already registered in 1940 under the terms of the Smith Act, now, those branded as ‘enemy’ aliens.",
        image: HeroRestriction,
        link: "/restrictions",
        buttonText:'The Panels',
      },
      {
        number:4,
        title: "Evacuation",
        detail: "For enemy aliens, February was the “cruelest month.” Fears of a Japanese invasion of the West Coast ran wild. After a Japanese submarine apparently landed some torpedoes in Santa Barbara, the pressure to move the Japanese population soared.",
        image: HeroEvac,
        link: "/evacuation",
        buttonText:'The Panels',
      },
      {
        number:5,
        title: "Exclusion",
        detail: "The Western Defense Commander, Lt. General John L. DeWitt, wanted to remove not only aliens, but also naturalized citizens from the “sensitive” military zones along the Pacific Coast.",
        image: HeroExclusion,
        link: "/exclusion",
        buttonText:'The Panels',
      },
      {
        number:6,
        title: "Aftermath",
        detail: "It is time America realized what is fundamental to its creed: to condemn one of us on the basis of our origins, national or otherwise, is to condemn us all.",
        image: HeroAfter,
        link: "/aftermath",
        buttonText:'The Panels',
      },
      {
        number:7,
        title: "Supplements",
        detail: "The photos and documents that appear in Una Storia Segreta were gathered when the exhibit was mounted in late 1993 and 1994. Since that time, additional information, materials, documents and photographs have been discovered through research and from informants.",
        image: HeroSup,
        link: "/supplements",
        buttonText:'The Panels',
      },
    ],    
   }
   
  render() { 
    return ( 
      <>
      <div className="">
      {this.state.panels.map(panel => {
      return (
      <section key={`${panel.id}`} className="">
  <PanelBanner >
    <Grid columns={2} doubling>
      <Grid.Row>
        <Grid.Column>
          <Fade left>
          <PanelCTA >
          <PanelText>
          {panel.title}
          </PanelText><br />
          <PanelDetail>
          {panel.detail}
          </PanelDetail>
          <Link to={{pathname:`${panel.link}`}}>
          <Button animated color='yellow' size='huge' inverted>
          <Button.Content visible style={{color:'white'}}>{panel.buttonText}</Button.Content>
          <Button.Content hidden>
          <Icon name='angle double right' />
          </Button.Content>
          </Button>
          </Link>
          </PanelCTA>    

          </Fade>
        </Grid.Column>

        <Grid.Column>
          <Fade right>
          <Link to={{pathname:`${panel.link}`}} >
            <PanelContent>
          <PanelImage style={{ background: `url(${panel.image})` }}>
             </PanelImage>
            </PanelContent>
            </Link>
          </Fade>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </PanelBanner>
  </section>
            );
          })}
        </div>
          <Horizontal />
      </>
     );
  }
}
 
export default PanelFeature;