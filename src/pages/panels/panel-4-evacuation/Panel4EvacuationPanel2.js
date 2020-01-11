import React, { Component } from 'react';
import {
  SideBySideMagnifier,GlassMagnifier
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P13Abono1 from '../../../components/images/panels/evacuation/P13Abono1.jpg'
import P13Abono2 from '../../../components/images/panels/evacuation/P13Abono2.jpg'
import P13Abono3 from '../../../components/images/panels/evacuation/P13Abono3.jpg'
// END IMPORTS

class Panel4EvacuationPanel2 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P13Abono1}`,
        HeaderDetails:`The panel shows a <span class='italic'>San Francisco Chronicle</span> article featuring Placido Abono, a 97-year-old so frail he had to leave his home on a stretcher. It also features two articles about suicides: a February 17, 1942 San Francisco Chronicle article recounting the suicide of Stefano Terranova, who leaped from his building in the city. Another, on February 12, recounted the suicide of fisherman Joseph Mecheli of Vallejo, despondent that he would have to move from his home.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P13Abono2}`,
        info:`This <span class='italic'>San Francisco Chronicle</span> reports on Joseph Mecheli, a fisherman who couldn’t bear to move from his home in Vallejo, cutting his throat with a butcher knife. The page also has a reprint of the “Notice to Move” posted in prohibited zones, labeling it “A Sign for Aliens: Keep Out!”`,
      },
      {
        photo:`${P13Abono3}`,
        info:`Like Mecheli, jewelry salesman Stefano Terranova leapt to his death rather than face moving. His note gives voice to the confusion and self-blame that plagued many enemy aliens: “I believe myself to be good but find myself deceived…I don’t know why…It is my fault for blaming others…my brain is no good.”`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${P13Abono1})` }}/>
    <PanelTitle>Abono/Suicides
      <h2>Evacuation :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    name="Pittsburg"
    href='/evacuations/pittsburg'
    />
    <Menu.Item
    active={'.'}
    name='Abono & Suicides'
    href='/evacuations/abono'
    />
    <Menu.Item
    name="Fighting Food"
    href='/evacuations/fishing'
    />
    <Menu.Item
    name="Evacuation"
    href='/evacuations/evacuation'
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
      
      <Menu pointing secondary widths={4}>
      <Menu.Item
      name="Pittsburg"
      href='/evacuations/pittsburg'
      />
      <Menu.Item
      active={'.'}
      name='Abono & Suicides'
      href='/evacuations/abono'
      />
      <Menu.Item
      name="Fighting Food"
      href='/evacuations/fishing'
      />
      <Menu.Item
      name="Evacuation"
      href='/evacuations/evacuation'
      />
      </Menu>

  <Crumbs>
  <CrumbLeft
  href='/restrictions'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/exclusion'
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

export default Panel4EvacuationPanel2;