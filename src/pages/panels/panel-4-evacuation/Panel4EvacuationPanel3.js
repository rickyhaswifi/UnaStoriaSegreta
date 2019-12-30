import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P14Fish1 from '../../../components/images/panels/evacuation/P14Fish1.jpg'
import P14Fish2 from '../../../components/images/panels/evacuation/P14Fish2.jpg'
import P14Fish3 from '../../../components/images/panels/evacuation/P14Fish3.jpg'
import P14Fish4 from '../../../components/images/panels/evacuation/P14Fish4.jpg'
import P14Fish5 from '../../../components/images/panels/evacuation/P14Fish5.jpg'
import P14Fish6 from '../../../components/images/panels/evacuation/P14Fish6.jpg'
import P14Fish7 from '../../../components/images/panels/evacuation/P14Fish7.jpg'
import P14Fish8 from '../../../components/images/panels/evacuation/P14Fish8.jpg'
// END IMPORTS

class Panel4EvacuationPanel3 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P14Fish1}`,
        info: `This panel depicts the plight of West Coast fishermen. Featured is the boat and family of Joe Spadaro of Monterey, whose purse seiner was one of scores requisitioned by the Navy for patrol duty. Like many others, Spadaro’s family had to leave Monterey because virtually the whole city lay in the prohibited zone east of U.S. Highway 1, and his wife was not a citizen. The Monterey fleet, until then enjoying a boom in sardine fishing, was decimated by the Navy’s requisitions. The Piazza family of San Francisco and Joe Aiello’s family in Pittsburg were also hard hit.
        `,
      },
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
        info: ``,
      },
      {
        photo:`${P14Fish5}`,
        info: ``,
      },
      {
        photo:`${P14Fish6}`,
        info: ``,
      },
      {
        photo:`${P14Fish7}`,
        info: ``,
      },
      {
        photo:`${P14Fish8}`,
        info: ``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P14Fish1})` }}/>
    <PanelTitle>Evacuation :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Fish Is Fighting Food
    </PanelContentTitle>

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

    </ParaPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel4EvacuationPanel3;