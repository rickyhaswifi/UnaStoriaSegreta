import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P21Proclomations1 from '../../../components/images/panels/aftermath/P21Proclomations1.jpg'
import P21Proclomations2 from '../../../components/images/panels/aftermath/P21Proclomations2.jpg'
import P21Proclomations3 from '../../../components/images/panels/aftermath/P21Proclomations3.jpg'
import P21Proclomations4 from '../../../components/images/panels/aftermath/P21Proclomations4.jpg'
// END IMPORTS

class Panel6AftermathPanel4 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P21Proclomations1}`,
        info:`This panel displays three of what turned out to be more than a dozen state, city, and national resolutions and proclamations heralding the history-making display of Una Storia Segreta in seven state houses and the Rayburn Office Building in Washington, DC during its long run. One is a resolution by the California State Assembly commending the exhibit; the second is a similar resolution by the New Jersey Senate; the third is a resolution by Congressman Norman Mineta in the U.S. House of Representatives. Not known at the time this panel was made was that the United States Congress would pass, and President Clinton would sign The Wartime Violation of Italian American Civil Liberties Act (Public Law #106-451) on November 7, 2000, thus correcting the persistent official denial that these violations had even taken place.`,
      },
      {
        photo:`${P21Proclomations2}`,
        info:``,
      },
      {
        photo:`${P21Proclomations3}`,
        info:``,
      },
      {
        photo:`${P21Proclomations4}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P21Proclomations1})` }}/>
    <PanelTitle>Aftermath :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Proclamations and Resolutions
    </PanelContentTitle>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    active={'.'}
    name="Restrictions Lifted"
    href='/aftermath/lifted'
    />
    <Menu.Item
    name="Now We're Friends"
    href='/aftermath/friends'
    />
    <Menu.Item
    name='Acknowledgments'
    href='/aftermath/acknowledgments'
    />
    <Menu.Item
    name='Proclamations and Resolutions'
    href='/aftermath/proclamations'
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
    active={'.'}
    name="Restrictions Lifted"
    href='/aftermath/lifted'
    />
    <Menu.Item
    name="Now We're Friends"
    href='/aftermath/friends'
    />
    <Menu.Item
    name='Acknowledgments'
    href='/aftermath/acknowledgments'
    />
    <Menu.Item
    name='Proclamations and Resolutions'
    href='/aftermath/proclamations'
    />
    </Menu>

    <Crumbs>
  <CrumbLeft
  href='/exclusion'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/supplements'
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

export default Panel6AftermathPanel4;