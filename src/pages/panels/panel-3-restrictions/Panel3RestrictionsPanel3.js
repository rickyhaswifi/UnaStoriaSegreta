import React, { Component } from 'react';
import {
  SideBySideMagnifier,GlassMagnifier
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P12Dont1 from '../../../components/images/panels/restrictions/P12Dont1.jpg'
// END IMPORTS

class Panel3RestrictionsPanel2 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P12Dont1}`,
        HeaderDetails:`This poster cautioned immigrants from three countries not to speak their native language, because it was “the enemy’s language.” It urged them to “speak American,” and in response, many stores in Italian neighborhoods hung signs announcing that ‘No Italian was spoken.’ This stigma on one’s native tongue had numerous effects, one of which was that the Italian language was often shunned by the children of immigrants, many Italian newspapers were closed, and it was removed, for many years, from the curricula of American high schools. `,
      },
    ],
    panelDetail: [
      {
        photo:`${P12Dont1}`,
        info:`Newspapers carried cartoons like these emphasizing the dangers that enemy aliens might present to the nation. They greatly exaggerated the danger enemy aliens represented to the public. Newspapers also carried stories and photos of contraband being turned in to local authorities by enemy aliens.`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${P12Dont1})` }}/>
    <PanelTitle>Don't Speak The Enemy's Language
      <h2>Restrictions :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={3}>
    <Menu.Item
    name="Notice To Aliens"
    href='/restrictions/notice'
    />
    <Menu.Item
    name='Cartoons'
    href='/restrictions/cartoons'
    />
    <Menu.Item
    active={'.'}
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

{/* <PanelContentTitle>
  Panel Details
</PanelContentTitle>

<Message info>
<Message.Header>
<Icon name='magnify'/>Hover image to see details
</Message.Header>
</Message> */}

    {/* END HEADER LOOP START DETAILS */}
    {/* {this.state.panelDetail.map(pDetail => {
    return (
    <section key={`${pDetail.id}`}>
 <Grid doubling stackable columns={2} verticalAlign='middle' centered>
   <Grid.Row>
     <Grid.Column>
    <GlassMagnifier 
    imageSrc={pDetail.photo}
    />
     </Grid.Column>

     <Grid.Column>
<Segment color='blue'>
    <div dangerouslySetInnerHTML={{__html: pDetail.info}}/>
</Segment>
     </Grid.Column>

   </Grid.Row>
 </Grid>

      </section>
            );
          })}
       */}
    <Menu pointing secondary widths={3}>
    <Menu.Item
    name="Notice To Aliens"
    href='/restrictions/notice'
    />
    <Menu.Item
    name='Cartoons'
    href='/restrictions/cartoons'
    />
    <Menu.Item
    active={'.'}
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