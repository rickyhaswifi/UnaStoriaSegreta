import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P18Restrictions1 from '../../../components/images/panels/aftermath/P18Restrictions1.jpg'
import P18Restrictions2 from '../../../components/images/panels/aftermath/P18Restrictions2.jpg'
import P18Restrictions3 from '../../../components/images/panels/aftermath/P18Restrictions3.jpg'
import P18Restrictions4 from '../../../components/images/panels/aftermath/P18Restrictions4.jpg'
import P18Restrictions5 from '../../../components/images/panels/aftermath/P18Restrictions5.jpg'
import P18Restrictions6 from '../../../components/images/panels/aftermath/P18Restrictions6.jpg'
import P18Restrictions7 from '../../../components/images/panels/aftermath/P18Restrictions7.jpg'
import P18Restrictions8 from '../../../components/images/panels/aftermath/P18Restrictions8.jpg'
// END IMPORTS

class Panel6AftermathPanel1 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P18Restrictions1}`,
        info:`On Columbus Day, Oct. 12, 1942, restrictions on Italian enemy aliens were lifted when Attorney General Francis Biddle gave a speech at Carnegie Hall praising the long, friendly relationship between Italy and the United States. Italians throughout the nation rejoiced that they were enemies no more. In the Fall of 1943, Italy surrendered and joined the Allied cause; this led shortly to the release of all Italian internees.`,
      },
      {
        photo:`${P18Restrictions2}`,
        info:`This October 18 Boston Globe article describes the joy in Boston’s North End when restrictions were lifted. The underlined sentence speaks to the shame of enemy alien status: “Italian girls in North End schools sometimes said they were “Polish” to escape the discrimination they felt in the stigma placed upon their unnaturalized mothers or grandmothers.” As to the fishermen who’d been forcibly idled, the president of the Fishermen’s Association described what that had been like: “Take a man off the water after he’s fished 30 or 40 years and give him a laborer’s job ashore, and he’s dead”.`,
      },
      {
        photo:`${P18Restrictions3}`,
        info:`In North Beach, San Francisco’s Italian neighborhood, the mood was the same. “I am no longer enemy alien? This is wonderful. This is living again.” It meant no more curfew. It meant radios again. It meant spiritual as well as physical freedom. It meant, “Now we can help to win the war.”`,
      },
      {
        photo:`${P18Restrictions4}`,
        info:``,
      },
      {
        photo:`${P18Restrictions5}`,
        info:``,
      },
      {
        photo:`${P18Restrictions6}`,
        info:``,
      },
      {
        photo:`${P18Restrictions7}`,
        info:``,
      },
      {
        photo:`${P18Restrictions8}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P18Restrictions1})` }}/>
    <PanelTitle>Aftermath :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Restrictions Lifted
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

export default Panel6AftermathPanel1;