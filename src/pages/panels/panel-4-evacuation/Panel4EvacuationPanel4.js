import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P15Evacuation1 from '../../../components/images/panels/evacuation/P15Evacuation1.jpg'
import P15Evacuation2 from '../../../components/images/panels/evacuation/P15Evacuation2.jpg'
import P15Evacuation3 from '../../../components/images/panels/evacuation/P15Evacuation3.jpg'
import P15Evacuation4 from '../../../components/images/panels/evacuation/P15Evacuation4.jpg'
import P15Evacuation5 from '../../../components/images/panels/evacuation/P15Evacuation5.jpg'
import P15Evacuation6 from '../../../components/images/panels/evacuation/P15Evacuation6.jpg'
// END IMPORTS

class Panel4EvacuationPanel4 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P15Evacuation1}`,
        info:`Though this panel seems to indicate that Executive Order 9066 (issued Feb. 19, 1942) was the authority relied on for the evacuation of enemy aliens from prohibited zones, in fact, the authority already existed in the earlier EO 2527 issued by President Roosevelt on December 8, 1941. The panel also shows that plans for expanding the evacuation to East Coast aliens and perhaps even extending the Japanese internment to Germans and Italians were contemplated. In the excerpt from the proceedings of a U.S. Senate panel, Senator Hiram Johnson says specifically that “the same thing is going to have to be done on the East Coast.” Plans for both expansions were eventually halted by the President, however, due to the huge numbers that would have to be moved.`,
      },
      {
        photo:`${P15Evacuation2}`,
        info:`This cartoon, from the May 28, 1942 San Francisco Chronicle, suggests that Italian and German enemy aliens are spies and should be the next groups interned, like the already-moved Japanese.`,
      },
      {
        photo:`${P15Evacuation3}`,
        info:`Several documents attest to the mounting hysteria regarding enemy aliens and the need to control them. Articles in the San Francisco Chronicle predict that thousands of aliens in California would soon be interned or moved away from places where they might do damage. The excerpt from the Senate hearings indicates that similar fears and plans to combat them are contemplated for the East Coast.`,
      },
      {
        photo:`${P15Evacuation4}`,
        info:``,
      },
      {
        photo:`${P15Evacuation5}`,
        info:``,
      },
      {
        photo:`${P15Evacuation6}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P15Evacuation1})` }}/>
    <PanelTitle>Evacuation :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Evacuation
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
    />
    <Menu.Item
    active={'.'}
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
      />
      <Menu.Item
      active={'.'}
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

export default Panel4EvacuationPanel4;