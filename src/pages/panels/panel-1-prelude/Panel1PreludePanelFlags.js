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

import PreImage1 from "../../../components/images/panels/prelude/Prelude-11-Panel1.jpg";
import PreImage3 from "../../../components/images/panels/prelude/Prelude-12-Roosevelt.jpg";
import PreImage4 from "../../../components/images/panels/prelude/Prelude-13-MussoRoos.jpg";
import PreImage5 from "../../../components/images/panels/prelude/Prelude-14-threenewspapers.jpg";
import PreImage6 from "../../../components/images/panels/prelude/Prelude-15-EveningPost.jpg";
// IMAGE IMPORTS // 
// END IMPORTS

class Panel1PreludePanel extends Component {
  state = {
    panelDetail: [
      {
        photo:`${PreImage1}`,
        info:`Mussolini was at first treated with near-adulation in the U.S. press. The <span class='italic'>Saturday Evening Post</span> featured him in three successive issues in 1928. Cole Porter used him in his song, “You’re the Top,” while Time Magazine featured him on its cover, paired here with a Time cover of President Franklin Roosevelt, who at one point referred to him as “that admirable gentleman.” <span class='italic'>The Wall Street Journal</span> had led the chorus in a 1923 poem depicted here, praising Mussolini as “a new Columbus” whose strong hand was guiding Italians to a new society of “will and work”.`,
      },
      {
        photo:`${PreImage3}`,
        info:``,
      },
      {
        photo:`${PreImage4}`,
        info:`<span class='italic'>Time Magazine</span> devoted its covers to both Mussolini (April 8, 1940) and Roosevelt (June 10, 1940). The Roosevelt quote below refers to Mussolini as "that admirable gentleman": "I don't mind telling you that I am keeping in fairly close touch with that admirable gentleman."`,
      },
      {
        photo:`${PreImage5}`,
        info:`These three issues of the 1928 <span class='italic'>Saturday Evening Post</span> (one of the most-popular weekly magazines of the time) featured excerpts from Mussolini's biograph on May 5, May 19, and June 2.`,
      },
      {
        photo:`${PreImage6}`,
        info:`The May 5 cover of the <span class='italic'>Saturday Evening Post</span> highlights the Mussolini story as the feature of this issue. The poem beside it comes from the January 23, 1923 <span class='italic'>The Wall Street Journal</span>. It lauds the Italian leader as no less than “A new Columbus,” a “two-fisted guy” who has awakened “langorous Italy” to become a “New world of will and work”—presumably one like the U.S.A. The poem notes particularly that Mussolini’s black-shirts, though in brutal “ways not graced or grooved,” had “curbed and quelled” the “Red nonsense” and “mischief” of Italian socialists and communists.`,
      },
    ]
  }
  
  render() {
    
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${PreImage1})` }}/>
    <PanelTitle>Prelude To War :: Panels
    </PanelTitle>
    <ParaPanel>
      <p>Hover Images to see details</p>
      
        <PanelContentTitle>
          FLAGS/MUSSOLINI
          </PanelContentTitle>


    <Menu pointing secondary widths={4}>
    <Menu.Item
    name='Flags'
    active={'.'}
    href='/prelude/flags'
    />
    <Menu.Item
    name="L'italia"
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
          <div dangerouslySetInnerHTML={{__html: pDetail.info}} />
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
    active={'.'}
    href='/prelude/flags'
    />
    <Menu.Item
    name="L'italia"
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

export default Panel1PreludePanel;