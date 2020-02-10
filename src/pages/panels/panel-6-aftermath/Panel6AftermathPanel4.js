import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner,} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P21Proclomations1 from '../../../components/images/panels/aftermath/P21Proclomations1.jpg'
// END IMPORTS

class Panel6AftermathPanel4 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P21Proclomations1}`,
        HeaderDetails:`This panel displays three of what turned out to be more than a dozen state, city, and national resolutions and proclamations heralding the history-making display of <span class='italic'>Una Storia Segreta</span> in seven state houses and the Rayburn Office Building in Washington, DC during its long run. 
        <br /><br />
        One is a resolution by the California State Assembly commending the exhibit; the second is a similar resolution by the New Jersey Senate; the third is a resolution by Congressman Norman Mineta in the U.S. House of Representatives. 
        <br /><br />
        Not known at the time this panel was made was that the United States Congress would pass, and President Clinton would sign <span class='italic'>The Wartime Violation of Italian American Civil Liberties Act</span> (Public Law #106-451) on November 7, 2000, thus correcting the persistent official denial that these violations had even taken place.`,
      },
    ],
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
   
    <PanelBanner style={{ background: `url(${P21Proclomations1})` }}/>
    <PanelTitle>Proclamations and Resolutions
      <h2>Aftermath :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    name="Restrictions Lifted"
    href='/aftermath/lifted'
    />
    <Menu.Item
    name="Now We Are Friends"
    href='/aftermath/friends'
    />
    <Menu.Item
    name='Acknowledgments'
    href='/aftermath/acknowledgments'
    />
    <Menu.Item
    active={'.'}
    name='Proclamations and Resolutions'
    href='/aftermath/proclamations'
    />
    </Menu>

    <Message info>
    <Message.Header>
    <Icon name='info circle'/>Hover panel to see details
    </Message.Header>
    </Message>
<section>
    {this.state.panelHeader.map(pHeader => {
    return (
    <section key={`${pHeader.id}`}>
    <SideBySideMagnifier 
    alwaysInPlace='false'
    imageSrc={pHeader.photopanel}
    largeImageSrc={pHeader.photopanel} 
    overlayOpacity={0.5}
    />
    <Segment>
    <div dangerouslySetInnerHTML={{__html: pHeader.HeaderDetails}}/>
    </Segment>
      </section>
            );
          })}
</section>
      
      <Menu pointing secondary widths={4}>
    <Menu.Item
    name="Restrictions Lifted"
    href='/aftermath/lifted'
    />
    <Menu.Item
    name="Now We Are Friends"
    href='/aftermath/friends'
    />
    <Menu.Item
    name='Acknowledgments'
    href='/aftermath/acknowledgments'
    />
    <Menu.Item
    active={'.'}
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

    </DetailPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel6AftermathPanel4;