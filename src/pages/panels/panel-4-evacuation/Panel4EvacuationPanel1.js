import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P12Pitsburg1 from '../../../components/images/panels/evacuation/P12Pitsburg1.jpg'
import P12Pitsburg2 from '../../../components/images/panels/evacuation/P12Pitsburg2.jpg'
import P12Pitsburg3 from '../../../components/images/panels/evacuation/P12Pitsburg3.jpg'
import P12Pitsburg4 from '../../../components/images/panels/evacuation/P12Pitsburg4.jpg'
import P12Pitsburg5 from '../../../components/images/panels/evacuation/P12Pitsburg5.jpg'
import P12Pitsburg6 from '../../../components/images/panels/evacuation/P12Pitsburg6.jpg'
import P12Pitsburg7 from '../../../components/images/panels/evacuation/P12Pitsburg7.jpg'
// END IMPORTS

class Panel4EvacuationPanel1 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P12Pitsburg1}`,
        info:`This panel features items relating to the forced evacuation of enemy aliens from Prohibited Zones along the West Coast. Pittsburg CA was a fishing village on the Sacramento River delta northeast of San Francisco Bay. Virtually the whole town was in the prohibited zone, so nearly 2,000 enemy aliens of Italian birth had to leave. The Pittsburg Post-Dispatch carried front-page headlines about the forced move, one of which included rogue’s gallery-type photos of some of the elderly enemy aliens forced to move. The Bay Area map shows prohibited zones in black.`,
      },
      {
        photo:`${P12Pitsburg2}`,
        info:`Alameda County Official Edwin Schnarr posts the notice of evacuation for Japanese, German and Italian aliens to move from the East Bay city of Alameda and parts of Berkeley and Oakland. The sign, in four languages, is interpreted to mean “Keep Out!” A newspaper in Stockton interpreted it more colloquially as “Scram!”`,
      },
      {
        photo:`${P12Pitsburg3}`,
        info:`This collage of Post Dispatch newspapers from Pittsburg CA, shows the front-page headlines of the evacuation affecting nearly 2,000 residents of that city. The editorial, “Tolerance Needed,” alongside the cartoon ‘U.S. War Effort’ points up the irony in government policies which first developed suspicion of enemy aliens, and then asked communities to accept them without hostility because many had been in the U.S. for years, had been faithful workers and model citizens, and were possibly more loyal than those who defamed them`,
      },
      {
        photo:`${P12Pitsburg4}`,
        info:`This Feb. 21, 1942 San Francisco Chronicle emphasizes the military component of the evacuation, perhaps to reassure citizens that the army, authorized to take “any steps necessary,” was in control of the “danger” said to be looming.`,
      },
      {
        photo:`${P12Pitsburg5}`,
        info:`Some of the elderly residents of Pittsburg CA who were forced to move. Several issues of the Post Dispatch front-paged these same “mug shots” in their coverage of the evacuation.`,
      },
      {
        photo:`${P12Pitsburg6}`,
        info:``,
      },
      {
        photo:`${P12Pitsburg7}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P12Pitsburg1})` }}/>
    <PanelTitle>Evacuation :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Pittsburg
    </PanelContentTitle>

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

    </ParaPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel4EvacuationPanel1;