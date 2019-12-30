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

// IMAGE IMPORTS // 
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
// END IMPORTS

class Panel1PreludePanelWar extends Component {
  state = {
    panelDetail: [
      {
        photo:`${PreImage20}`,
        info:`The War Panel depicts the news on December 7, 1941, when Japanese air and naval forces attacked the United States at Pearl Harbor. President Roosevelt quickly declared war on the Axis powers: on Japan on December 8, and on Germany and Italy on December 11. Two days before Pearl Harbor, on December 5, the San Francisco Call Bulletin featured an article reporting on accusations that the Italian-language school in North Beach was dominated by Mussolini, and was L’Italia, whose editor, Ettore Patrizi, was pro-fascist. The hearings where these charges were aired were the first phase of the Tenney Committee Hearings that would resume in May (see Panel 15).`,
      },
      {
        photo:`${PreImage22}`,
        info:`San Francisco Call-Bulletin article on the first of the Tenney Committee hearings on the alleged “Un-American Activities in California.” The hearings took place two days before Pearl Harbor, and accused both the Italian language schools and the newspaper, L’Italia, of being controlled by Mussolini.`,
      },    
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${PreImage20})` }}/>
    <PanelTitle>Prelude To War :: Panels
    </PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    War!
    </PanelContentTitle>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    name='Flags'
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
    active={'war'}
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
    href='/prelude/litalia'
    />
    <Menu.Item
    name='Stab In The Back'
    href='/prelude/stab'
    />
    <Menu.Item
    name='War!'
    active={'war'}
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

export default Panel1PreludePanelWar;