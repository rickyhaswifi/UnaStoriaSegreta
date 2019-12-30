import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P13Abono1 from '../../../components/images/panels/evacuation/P13Abono1.jpg'
import P13Abono2 from '../../../components/images/panels/evacuation/P13Abono2.jpg'
import P13Abono3 from '../../../components/images/panels/evacuation/P13Abono3.jpg'
import P13Abono4 from '../../../components/images/panels/evacuation/P13Abono4.jpg'
// END IMPORTS

class Panel4EvacuationPanel2 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P13Abono1}`,
        info:`The panel shows a San Francisco Chronicle article featuring Placido Abono, a 97-year-old so frail he had to leave his home on a stretcher. It also features two articles about suicides: a February 17, 1942 San Francisco Chronicle article recounting the suicide of Stefano Terranova, who leaped from his building in the city. Another, on February 12, recounted the suicide of fisherman Joseph Mecheli of Vallejo, despondent that he would have to move from his home.`,
      },
      {
        photo:`${P13Abono2}`,
        info:`This San Francisco Chronicle reports on Joseph Mecheli, a fisherman who couldn’t bear to move from his home in Vallejo, cutting his throat with a butcher knife. The page also has a reprint of the “Notice to Move” posted in prohibited zones, labeling it “A Sign for Aliens: Keep Out!”`,
      },
      {
        photo:`${P13Abono3}`,
        info:`Like Mecheli, jewelry salesman Stefano Terranova leapt to his death rather than face moving. His note gives voice to the confusion and self-blame that plagued many enemy aliens: “I believe myself to be good but find myself deceived…I don’t know why…It is my fault for blaming others…my brain is no good.”`,
      },
      {
        photo:`${P13Abono4}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P13Abono1})` }}/>
    <PanelTitle>Evacuation :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Abono & Suicides
    </PanelContentTitle>

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

    </ParaPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel4EvacuationPanel2;