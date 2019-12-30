import React, { Component } from 'react';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
import { Grid, Menu, Message, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, Quote, Horizontal, PanelTitle, Crumbs, CrumbLeft, CrumbRight,PanelSub, GalleryContainer, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';
import HeroMuso from '../../../components/images/panels/prelude/hero-musso.jpg';


// IMAGE IMPORTS // 
import PreImage13 from "../../../components/images/panels/prelude/Prelude-20aPacificWarPeril.jpg";
import PreImage14 from "../../../components/images/panels/prelude/Prelude-21-aMussoNewsweek.jpg";
import PreImage15 from "../../../components/images/panels/prelude/Prelude-21-Panel3.jpg";
import PreImage16 from "../../../components/images/panels/prelude/Prelude-22-IlCorriere.jpg";
import PreImage18 from "../../../components/images/panels/prelude/Prelude-24-SteelRing.jpg";
// END IMPORTS

class Panel1PreludePanelStab extends Component {
  state = {
    panelDetail: [
      {
        photo:`${PreImage15}`,
        info:`This panel is named for Roosevelt’s statement in 1940 when Italy attacked France: “The hand that held the dagger has thrust it into the back of its neighbor.” Italian Americans resented how it played into the stereotype of Italian immigrants as knife-wielding criminals. Other items of interest are the copper postcard—bought by Italian Americans and sent to Italy to contribute copper to Italy’s war effort—and the stainless-steel ring worn by Italian immigrant women to replace their gold wedding bands sent to Italy for the same purpose. On the other side of the political spectrum was Carmelo Zito, who, in his newspaper, Il Corriere del Popolo, ridiculed and castigated pro-Mussolini organs like L’Italia. Zito would soon denounce L’Italia’s editor, Ettore Patrizi, as a leader of the pro-fascist movement in California (see Exclusion Panel).`,
      },
      {
        photo:`${PreImage14}`,
        info:``,
      },
      {
        photo:`${PreImage16}`,
        info:`Carmelo Zito’s socialist newspaper, Il Corriere del Popolo, engaged in running duels with Ettore Patrizi’s more pro-Mussolini L’Italia. Zito was a master of ridicule, which he here uses to mock the Italian attempt to put the celebration of Mussolini’s birthday on a par with that of Jesus Christ. Zito would later testify against Patrizi in the Tenney Committee hearings (see next panel and Section 5).`,
      }, 
      {
        photo:`${PreImage13}`,
        info:`Not only does FDR’s use of the back-stabbing image reignite old stereotypes about Italians, it also raised anxieties among Italian Americans that their greatest fear—war by Italian Americans against their cousins in Italy—could be imminent.`,
      },
      {
        photo:`${PreImage18}`,
        info:`The copper postcard and the stainless steel ring were methods Italians urged their American cousins to use to circumvent the U.S. embargo on the export of metals to Italy during the pre-war years. Copper “postcards” could be mailed to Italy while women could substitute stainless steel rings for their gold wedding bands. Both copper and gold could be used in the Italian war effort.`,
      }, 
    ]
  }
  
  render() {
    
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${PreImage15})` }}/>
    <PanelTitle>Prelude To War :: Panels
    </PanelTitle>
    <ParaPanel>
      <p>Hover Images to see details</p>
      
    <PanelContentTitle>
    Stab In The Back
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
    active={'.'}
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
    href='/prelude/litalia'
    />
    <Menu.Item
    name='Stab In The Back'
    active={'.'}
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

export default Panel1PreludePanelStab;