import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P17Guttadauro1 from '../../../components/images/panels/exclusion/P17Guttadauro1.jpg'
import P17Guttadauro2 from '../../../components/images/panels/exclusion/P17Guttadauro2.jpg'
import P17Guttadauro3 from '../../../components/images/panels/exclusion/P17Guttadauro3.jpg'
import P17Guttadauro4 from '../../../components/images/panels/exclusion/P17Guttadauro4.jpg'
import P17Guttadauro5 from '../../../components/images/panels/exclusion/P17Guttadauro5.jpg'
// END IMPORTS

class Panel5ExclusionPanel2 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P17Guttadauro1}`,
        info:`Accountant Nino Guttadauro and former pilot Remo Bosia were two more excludees from the San Francisco Bay Area. Guttadauro’s work for the Italian consulate seemed to be the main basis for targeting him. He and his family moved, along with several other excludees, to Reno, Nevada. His son claimed, after his father had moved the family several times in search of work, that they had been made “involuntary gypsies.” Bosia, suspect because of his work at L’Italia, was doggedly pursued by General DeWitt for violating his exclusion order while stationed in California in the U.S. Army.`,
      },
      {
        photo:`${P17Guttadauro2}`,
        info:`Remo Bosia wrote about his experiences with General DeWitt (the general in The General and I), head of the Western Defense Command, who pursued Bosia even when he tried to serve the United States in the military. Though Bosia was court-martialed when authorities there learned of the exclusion order against him, he was acquitted at trial and then released from the Army because of ill health. On Bosia’s return to his home south of San Francisco, DeWitt reactivated his exclusion order and Bosia and his family had to move to Reno.`,
      },
      {
        photo:`${P17Guttadauro3}`,
        info:`This is the exclusion order issued to Nino Guttadauro. The order cites the authority of Executive Order 9066 to support Guttadauro’s exclusion from the 27 states listed. It orders Guttadauro to report in two days to Major Ashworth at the Whitcomb Hotel in San Francisco; be photographed and fingerprinted; provide the military with his plans for traveling out of the area; and notify the FBI when he arrived at his destination, in this case, Reno, Nev. Guttadauro took his family with him, but had great difficulty finding work in his field (as an accountant). His son, Angelo, a Colonel in the U.S. Army, testified in 1981 before the Commission on Wartime Relocation and Internment of Civilians that the hearing given his father in 1942 was “a virtual star-chamber.”`,
      },
      {
        photo:`${P17Guttadauro4}`,
        info:``,
      },
      {
        photo:`${P17Guttadauro5}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P17Guttadauro1})` }}/>
    <PanelTitle>Exclusion :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Guttadauro & Bosia
    </PanelContentTitle>

    <Menu pointing secondary widths={2}>
    <Menu.Item
    active={'.'}
    name="Tenney Committee"
    href='/exclusion/tenney'
    />
    <Menu.Item
    name='Guttadauro & Bosia'
    href='/exclusion/guttadauro'
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
      
      <Menu pointing secondary widths={2}>
    <Menu.Item
    active={'.'}
    name="Tenney Committee"
    href='/exclusion/tenney'
    />
    <Menu.Item
    name='Guttadauro & Bosia'
    href='/exclusion/guttadauro'
    />
    </Menu>

  <Crumbs>
  <CrumbLeft
  href='/evacuation'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/aftermath'
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

export default Panel5ExclusionPanel2;