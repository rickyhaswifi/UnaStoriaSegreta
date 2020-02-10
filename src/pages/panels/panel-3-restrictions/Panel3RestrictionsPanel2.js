import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import HeroRestriction from '../../../components/images/panels/restrictions/HeroRestriction.jpg';
import P11Cartoons1 from '../../../components/images/panels/restrictions/P11Cartoons1.jpg'
import P11Cartoons2 from '../../../components/images/panels/restrictions/P11Cartoons2.jpg'
import P11Cartoons3 from '../../../components/images/panels/restrictions/P11Cartoons3.jpg'
// END IMPORTS

class Panel3RestrictionsPanel2 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P11Cartoons1}`,
        HeaderDetails:`Newspapers carried cartoons like these emphasizing the dangers that enemy aliens might present to the nation. They greatly exaggerated the danger enemy aliens represented to the public. Newspapers also carried stories and photos of contraband being turned in to local authorities by enemy aliens.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P11Cartoons2}`,
        info:`Two dangers authorities warned about: using (now banned) shortwave radios to signal the enemy, and posing as members of U.S. Armed forces.`,
      },
      {
        photo:`${P11Cartoons3}`,
        info:`This photo from the Dec. 30, 1941 <span class='italic'>San Francisco Chronicle</span> depicts an alien turning in his radio with shortwave band to the police. The headline of the accompanying article reads: “Alien Cameras, Radios, Guns Deluge Police.”`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${HeroRestriction})` }}/>
    <PanelTitle>Cartoons
      <h2>Restrictions :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

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

    </DetailPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel3RestrictionsPanel2;