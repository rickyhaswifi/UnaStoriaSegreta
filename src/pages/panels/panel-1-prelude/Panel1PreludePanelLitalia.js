import React, { Component } from 'react';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, Quote, Horizontal, PanelTitle, Crumbs, CrumbLeft, CrumbRight,PanelSub, GalleryContainer, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';
import HeroMuso from '../../../components/images/panels/prelude/hero-musso.jpg';


import PreImage7 from "../../../components/images/panels/prelude/Prelude-16-YouretheTop.jpg";
import PreImage8 from "../../../components/images/panels/prelude/Prelude-17-ItLegionltr.jpg";
import PreImage9 from "../../../components/images/panels/prelude/Prelude-18-CasaFugazi.JPG";
import PreImage10 from "../../../components/images/panels/prelude/Prelude-19-cWomen swords.JPG";
import PreImage11 from "../../../components/images/panels/prelude/Prelude-19-Panel2.JPG";
import PreImage12 from "../../../components/images/panels/prelude/Prelude-20-twogroup photos.JPG";
import PreImage13 from "../../../components/images/panels/prelude/Prelude-20aPacificWarPeril.jpg";
import PreImage14 from "../../../components/images/panels/prelude/Prelude-21-aMussoNewsweek.jpg";
import PreImage15 from "../../../components/images/panels/prelude/Prelude-21-Panel3.jpg";
import PreImage16 from "../../../components/images/panels/prelude/Prelude-22-IlCorriere.jpg";
import PreImage17 from "../../../components/images/panels/prelude/Prelude-23-IlCorriere2.jpg";
import PreImage18a from "../../../components/images/panels/prelude/Prellude-19a-LItalia.jpg";
import PreImage19a from "../../../components/images/panels/prelude/Prelude-19-Panel2a.JPG";
import PreImage18 from "../../../components/images/panels/prelude/Prelude-24-SteelRing.jpg";
import PreImage19 from "../../../components/images/panels/prelude/Prelude-25-LittleCityNews.jpg";
import PreImage20 from "../../../components/images/panels/prelude/Prelude-27-Panel4.jpg";
import PreImage21 from "../../../components/images/panels/prelude/Prelude-28-USDeclareWar.jpg";
import PreImage22 from "../../../components/images/panels/prelude/Prelude-29-ControlPress.jpg";
import PreImage23 from "../../../components/images/panels/prelude/Prelude-30-War.jpg";
// IMAGE IMPORTS // 
// END IMPORTS

class Panel1PreludePanelLitalia extends Component {
  state = {
    panelDetail: [
      {
        photo:`${PreImage19}`,
        info:`Mussolini was at first treated with near-adulation in the U.S. press. The Saturday Evening Post featured him in three successive issues in 1928. Cole Porter used him in his song, “You’re the Top,” while Time Magazine featured him on its cover, paired here with a Time cover of President Franklin Roosevelt, who at one point referred to him as “that admirable gentleman.” The Wall Street Journal had led the chorus in a 1923 poem depicted here, praising Mussolini as “a new Columbus” whose strong hand was guiding Italians to a new society of “will and work”.)`,
      },
      {
        photo:`${PreImage19a}`,
        info:`Ettore Patrizi, editor and publisher of L’Italia, the Italian newspaper of California; the exterior of his San Francisco office is pictured in the bottom photo.`,
      },
      {
        photo:`${PreImage18a}`,
        info:`The August 1935 edition of L’Italia depicts the relative amounts of colonial territory held by other European powers compared to Italy’s, to defuse protests about Mussolini’s moves into Africa.

        `,
      },
      {
        photo:`${PreImage10}`,
        info:`Three fencers from the Doposcuola (after-school Italian language school) fencing team at Casa Fugazi in San Francisco’s North Beach. The government closed the school during the war. Nella Panelli, middle, donated these photos.`,
      },
      
    ]
  }
  
  render() {
    
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${PreImage19})` }}/>
    <PanelTitle>Prelude To War :: Panels
    </PanelTitle>
    <ParaPanel>
      
    <PanelContentTitle>
    L'Italia
    </PanelContentTitle>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    name='Flags'
    href='/prelude/flags'
    />
    <Menu.Item
    name="L'italia"
    active={'.'}
    href='/prelude/litalia'
    />
    <Menu.Item
    name='Stab In The Back'
    href='/prelude/stab'
    />
    <Menu.Item
    name='War!'
    href='/prelude/war'
    />
    </Menu>

    <Message info>
    <Message.Header>
    Hover Images to see details
    </Message.Header>
    </Message>

      {this.state.panelDetail.map(pDetail => {
      return (
      <section key={`${pDetail.id}`} className="">

      <Grid doubling stackable>
        <Grid.Row>
          <Grid.Column>
          <SideBySideMagnifier 
          alwaysInPlace='false'
          imageSrc={pDetail.photo}
          largeImageSrc={pDetail.photo} 
          overlayOpacity={0.5}
          />
          <p>
          {pDetail.info}
          </p>
          </Grid.Column>

        </Grid.Row>
      </Grid>

      </section>
            );
          })}

<Menu pointing secondary widths={4}>
    <Menu.Item
    name='Flags'
    href='/prelude/flags'
    />
    <Menu.Item
    name="L'italia"
    active={'.'}
    href='/prelude/litalia'
    />
    <Menu.Item
    name='Stab In The Back'
    href='/prelude/stab'
    />
    <Menu.Item
    name='War!'
    href='/prelude/war'
    />
    </Menu>

        <Crumbs>
    <CrumbLeft
    href='/'
    >
    <Icon name='angle left' /> 
    Home
    </CrumbLeft>

    <CrumbRight
    href='/internment'
    >
    Next
    <Icon name='angle right' /> 
    </CrumbRight>
    </Crumbs>      
      
    </ParaPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel1PreludePanelLitalia;