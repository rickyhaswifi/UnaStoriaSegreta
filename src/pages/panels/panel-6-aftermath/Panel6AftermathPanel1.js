import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P18Restrictions1 from '../../../components/images/panels/aftermath/P18Restrictions1.jpg'
import P18Restrictions2 from '../../../components/images/panels/aftermath/P18Restrictions2.jpg'
import P18Restrictions3 from '../../../components/images/panels/aftermath/P18Restrictions3.jpg'
// END IMPORTS

class Panel6AftermathPanel1 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P18Restrictions1}`,
        HeaderDetails:`On Columbus Day, Oct. 12, 1942, restrictions on Italian enemy aliens were lifted when Attorney General Francis Biddle gave a speech at Carnegie Hall praising the long, friendly relationship between Italy and the United States. Italians throughout the nation rejoiced that they were enemies no more. In the Fall of 1943, Italy surrendered and joined the Allied cause; this led shortly to the release of all Italian internees.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P18Restrictions2}`,
        info:`This October 18 <span class='italic'>Boston Globe</span> article describes the joy in Boston’s North End when restrictions were lifted. The underlined sentence speaks to the shame of enemy alien status: “Italian girls in North End schools sometimes said they were “Polish” to escape the discrimination they felt in the stigma placed upon their unnaturalized mothers or grandmothers.” As to the fishermen who’d been forcibly idled, the president of the Fishermen’s Association described what that had been like: “Take a man off the water after he’s fished 30 or 40 years and give him a laborer’s job ashore, and he’s dead”.`,
      },
      {
        photo:`${P18Restrictions3}`,
        info:`In North Beach, San Francisco’s Italian neighborhood, the mood was the same. “I am no longer enemy alien? This is wonderful. This is living again.” It meant no more curfew. It meant radios again. It meant spiritual as well as physical freedom. It meant, “Now we can help to win the war.”`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    
    <PanelBanner style={{ background: `url(${P18Restrictions1})` }}/>
    <PanelTitle> Restrictions Lifted
      <h2>Aftermath :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    active={'.'}
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

<PanelContentTitle>
  Panel Details
</PanelContentTitle>

<Message info>
<Message.Header>
<Icon name='magnify'/>Hover image to see details
</Message.Header>
</Message>

    {/* END HEADER LOOP START DETAILS */}
    {this.state.panelDetail.map(pDetail => {
    return (
    <section key={`${pDetail.id}`}>
 <Grid doubling stackable columns={2} verticalAlign='middle' centered>
   <Grid.Row>
     <Grid.Column>
    
     <SideBySideMagnifier 
    alwaysInPlace='false'
    imageSrc={pDetail.photo}
    largeImageSrc={pDetail.photo} 
    overlayOpacity={0.5}
    />

     </Grid.Column>

     <Grid.Column>
<Segment color='blue' size='small'>
    <div dangerouslySetInnerHTML={{__html: pDetail.info}}/>
</Segment>
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
    name="Now We Are Friends"
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

    </DetailPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel6AftermathPanel1;