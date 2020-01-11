import React, { Component } from 'react';
import {
  SideBySideMagnifier,GlassMagnifier
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P14Fish1 from '../../../components/images/panels/evacuation/P14Fish1.jpg'
import P14Fish2 from '../../../components/images/panels/evacuation/P14Fish2.jpg'
import P14Fish3 from '../../../components/images/panels/evacuation/P14Fish3.jpg'
import P14Fish4 from '../../../components/images/panels/evacuation/P14Fish7.jpg'
import P14Fish5 from '../../../components/images/panels/evacuation/P14Fish8.jpg'
// END IMPORTS

class Panel4EvacuationPanel3 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P14Fish1}`,
        HeaderDetails:`This panel depicts the plight of West Coast fishermen. Featured is the boat and family of Joe Spadaro of Monterey, whose purse seiner was one of scores requisitioned by the Navy for patrol duty. Like many others, Spadaro’s family had to leave Monterey because virtually the whole city lay in the prohibited zone east of U.S. Highway 1, and his wife was not a citizen. The Monterey fleet, until then enjoying a boom in sardine fishing, was decimated by the Navy’s requisitions. The Piazza family of San Francisco and Joe Aiello’s family in Pittsburg were also hard hit.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P14Fish2}`,
        info: `Joe Aiello worked at the Booth Cannery in Pittsburg CA. Unable to read or write, he never applied for citizenship and thus was forced to evacuate as an enemy alien. Having just had surgery, he left his home in a wheelchair.
        `,
      },
      {
        photo:`${P14Fish3}`,
        info: `One of a series of posters that urged increased food production during the war. But because of restrictions on enemy alien fishermen, and because many sardine fishing boats were requisitioned, the supplies of this “fighting food” were drastically cut until some restrictions were lifted.
        `,
      },
      {
        photo:`${P14Fish4}`,
        info: `Salvatore Piazza family, with Rosa Piazza Alioto, and her father-in-law, Antonio Alioto, also a fisherman, mending his nets
        `,
      },
      {
        photo:`${P14Fish5}`,
        info: `This <span class='italic'>Monterey Peninsula Herald</span> article details the impact of the restrictions and boat requisitions on Monterey’s fishing fleet.
        `,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P14Fish1})` }}/>
    <PanelTitle>Fish Is Fighting Food
      <h2>Evacuation :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    name="Pittsburg"
    href='/evacuations/pittsburg'
    />
    <Menu.Item
    name='Abono & Suicides'
    href='/evacuations/abono'
    />
    <Menu.Item
    name="Fighting Food"
    href='/evacuations/fishing'
    active={'.'}
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
      name='Abono & Suicides'
      href='/evacuations/abono'
      />
      <Menu.Item
      name="Fighting Food"
      href='/evacuations/fishing'
      active={'.'}
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

export default Panel4EvacuationPanel3;