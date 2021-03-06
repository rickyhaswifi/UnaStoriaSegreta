import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P12Pitsburg1 from '../../../components/images/panels/evacuation/P12Pitsburg1.jpg'
import P12Pitsburg2 from '../../../components/images/panels/evacuation/P12Pitsburg2.jpg'
import P12Pitsburg3 from '../../../components/images/panels/evacuation/P12Pitsburg3.jpg'
import P12Pitsburg4 from '../../../components/images/panels/evacuation/P12Pitsburg4.jpg'
import P12Pitsburg5 from '../../../components/images/panels/evacuation/P12Pitsburg5.jpg'
// END IMPORTS

class Panel4EvacuationPanel1 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P12Pitsburg1}`,
        HeaderDetails:`This panel features items relating to the forced evacuation of enemy aliens from Prohibited Zones along the West Coast. Pittsburg CA was a fishing village on the Sacramento River delta northeast of San Francisco Bay. Virtually the whole town was in the prohibited zone, so nearly 2,000 enemy aliens of Italian birth had to leave. The <span class='italic'>Pittsburg Post-Dispatch</span> carried front-page headlines about the forced move, one of which included rogue’s gallery-type photos of some of the elderly enemy aliens forced to move. The Bay Area map shows prohibited zones in black.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P12Pitsburg2}`,
        info:`Alameda County Official Edwin Schnarr posts the notice of evacuation for Japanese, German and Italian aliens to move from the East Bay city of Alameda and parts of Berkeley and Oakland. The sign, in four languages, is interpreted to mean “Keep Out!” A newspaper in Stockton interpreted it more colloquially as “Scram!”`,
      },
      {
        photo:`${P12Pitsburg3}`,
        info:`This collage of <span class='italic'>Post-Dispatch</span> newspapers from Pittsburg CA, shows the front-page headlines of the evacuation affecting nearly 2,000 residents of that city. The editorial, “Tolerance Needed,” alongside the cartoon ‘U.S. War Effort’ points up the irony in government policies which first developed suspicion of enemy aliens, and then asked communities to accept them without hostility because many had been in the U.S. for years, had been faithful workers and model citizens, and were possibly more loyal than those who defamed them`,
      },
      {
        photo:`${P12Pitsburg4}`,
        info:`This Feb. 21, 1942 <span class='italic'>San Francisco Chronicle</span> emphasizes the military component of the evacuation, perhaps to reassure citizens that the army, authorized to take “any steps necessary,” was in control of the “danger” said to be looming.`,
      },
      {
        photo:`${P12Pitsburg5}`,
        info:`Some of the elderly residents of Pittsburg, CA who were forced to move. Several issues of the <span class='italic'>Post-Dispatch</span> front-paged these same “mug shots” in their coverage of the evacuation.`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${P12Pitsburg1})` }}/>
    <PanelTitle>Pittsburg
      <h2>Evacuation :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    active={'.'}
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

export default Panel4EvacuationPanel1;