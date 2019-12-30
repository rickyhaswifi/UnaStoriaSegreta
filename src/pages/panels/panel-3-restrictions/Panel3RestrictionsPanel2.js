import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import HeroRestriction from '../../../components/images/panels/restrictions/HeroRestriction.jpg';
import P11Cartoons1 from '../../../components/images/panels/restrictions/P11Cartoons1.jpg'
import P11Cartoons2 from '../../../components/images/panels/restrictions/P11Cartoons2.jpg'
import P11Cartoons3 from '../../../components/images/panels/restrictions/P11Cartoons3.jpg'
// END IMPORTS

class Panel3RestrictionsPanel2 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P11Cartoons1}`,
        info:`Newspapers carried cartoons like these emphasizing the dangers that enemy aliens might present to the nation. They greatly exaggerated the danger enemy aliens represented to the public. Newspapers also carried stories and photos of contraband being turned in to local authorities by enemy aliens.`,
      },
      {
        photo:`${P11Cartoons2}`,
        info:`Two dangers authorities warned about: using (now banned) shortwave radios to signal the enemy, and posing as members of U.S. Armed forces.`,
      },
      {
        photo:`${P11Cartoons3}`,
        info:`This photo from the Dec. 30, 1941 San Francisco Chronicle depicts an alien turning in his radio with shortwave band to the police. The headline of the accompanying article reads: “Alien Cameras, Radios, Guns Deluge Police.”`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${HeroRestriction})` }}/>
    <PanelTitle>Restrictions :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Cartoons
    </PanelContentTitle>

    <Menu pointing secondary widths={3}>
    <Menu.Item
    name="Notice To Aliens"
    href='/restrictions/notice'
    />
    <Menu.Item
    active={'.'}
    name='Cartoons'
    href='/restrictions/cartoons'
    />
    <Menu.Item
    name="Don't Speak The Enemy's Language"
    href='/restrictions/language'
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
      
    <Menu pointing secondary widths={3}>
    <Menu.Item
    name="Notice To Aliens"
    href='/restrictions/notice'
    />
    <Menu.Item
    active={'.'}
    name='Cartoons'
    href='/restrictions/cartoons'
    />
    <Menu.Item
    name="Don't Speak The Enemy's Language"
    href='/restrictions/language'
    />
    </Menu>

    <Crumbs>
    <CrumbLeft
    href='/internment'
    >
    <Icon name='angle left' /> 
    Back
    </CrumbLeft>

    <CrumbRight
    href='/evacuation'
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

export default Panel3RestrictionsPanel2;