import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P5Fence1 from '../../../components/images/panels/internment/P5-Fence-1.jpg'
import P5Fence4 from '../../../components/images/panels/internment/P5-Fence-4.jpg'
import P5Fence6 from '../../../components/images/panels/internment/P5-Fence-6.jpg'
import P5Fence7 from '../../../components/images/panels/internment/P5-Fence-7.jpg'

// END IMPORTS

class Panel2InternmentPanel1 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P5Fence1}`,
        HeaderDetails:`Don’t Fence Me In,” was a popular 1934 song by Cole Porter that captures the spirit of the internment camps. Featured are two photos of the internment camp at Missoula, MT, a photo of a Quonset hut in the detention center at Sharp Park south of San Francisco where some internees were detained pending their internment, and a letter by Filippo Molinari describing his apprehension and first frigid days in the camp at Missoula.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P5Fence4}`,
        info:`The December 10, 1941 <span class='italic'>Oakland Tribune</span> headlines the FBI’s seizure of enemy aliens who were considered “potentially dangerous,” many of whom were headed for internment. The quote by Roosevelt, “I don’t care so much about the Italians; they’re a lot of opera singers,” made to Attorney General Biddle, indicates that though Italians were considered dangerous enough to intern, they were also treated with some contempt by American authorities.`,
      },
      {
        photo:`${P5Fence6}`,
        info:`Top photo shows the San Francisco detention center where enemy aliens were held pending their hearings.`,
      },
      {
        photo:`${P5Fence7}`,
        info:`If ordered interned by the Attorney General, they were then sent to internment camps, like the one in Missoula, MT that Filippo Molinari’s letter describes.`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${P5Fence1})` }}/>
    <PanelTitle>Don't Fence Me In
      <h2>Internment :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Don't Fence Me In"
    active={'.'}
    href='/internment/fence'
    />
    <Menu.Item
    name='Trento'
    href='/internment/trento'
    />
    <Menu.Item
    name='Enemy Ears Are Listening'
    href='/internment/ears'
    />
    <Menu.Item
    name='Ezio Pinza'
    href='/internment/ezio'
    />
    <Menu.Item
    name='Deluca'
    href='/internment/deluca'
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
      
      <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Don't Fence Me In"
    active={'.'}
    href='/internment/fence'
    />
    <Menu.Item
    name='Trento'
    href='/internment/trento'
    />
    <Menu.Item
    name='Enemy Ears Are Listening'
    href='/internment/ears'
    />
    <Menu.Item
    name='Ezio Pinza'
    href='/internment/ezio'
    />
    <Menu.Item
    name='Deluca'
    href='/internment/deluca'
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

    </DetailPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel2InternmentPanel1;