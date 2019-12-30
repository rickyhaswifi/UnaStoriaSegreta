import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P16Tenney1 from '../../../components/images/panels/exclusion/P16Tenney1.jpg';
import P16Tenney2 from '../../../components/images/panels/exclusion/P16Tenney2.jpg';
import P16Tenney3 from '../../../components/images/panels/exclusion/P16Tenney3.jpg';
import P16Tenney4 from '../../../components/images/panels/exclusion/P16Tenney4.jpg';
import P16Tenney5 from '../../../components/images/panels/exclusion/P16Tenney5.jpg';
import P16Tenney6 from '../../../components/images/panels/exclusion/P16Tenney6.jpg';
import P16Tenney7 from '../../../components/images/panels/exclusion/P16Tenney7.jpg';
import P16Tenney8 from '../../../components/images/panels/exclusion/P16Tenney8.jpg';
// END IMPORTS

class Panel5ExclusionPanel1 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P16Tenney1}`,
        info:`The California Assembly Committee Investigating UnAmerican Activities was chaired by Assemblyman Jack Tenney of Ingleside. It resumed hearings in San Francisco in late May of 1942 and featured testimony arguing that San Francisco was a hotbed of fascist activity. As a result, two dozen of the city’s most prominent naturalized citizens were served with orders excluding them from most of California and 27 other states. The hearings inspired big headlines about those under investigation, including the sitting mayor of San Francisco, Angelo Rossi.`,
      },
      {
        photo:`${P16Tenney2}`,
        info:`The San Francisco Chronicle covered the Tenney hearings in great detail. The subhead highlights the major figures forced to testify: Sylvester Andriano, head of the Draft Board in North Beach, Ettore Patrizi, editor/publisher of L’Italia, and Angelo Rossi, current mayor of the city. Their main accuser, Carmelo Zito, charged that he had seen Rossi give the fascist salute in public. The photo inset depicts Zito, editor of the Italian American newspaper, Il Corriere del Popolo.`,
      },
      {
        photo:`${P16Tenney3}`,
        info:`The photo at top left depicts Mayor Rossi (far left) and Sylvester Andriano (4th from left) at a meeting of the San Francisco Police Commission on which Andriano had served. He had also been a city Supervisor. The news item depicts Andriano when his alma mater, St. Mary’s College, honored him as ‘Alumnus of the Year’ in 1961.`,
      },
      {
        photo:`${P16Tenney4}`,
        info:``,
      },
      {
        photo:`${P16Tenney5}`,
        info:``,
      },
      {
        photo:`${P16Tenney6}`,
        info:``,
      },
      {
        photo:`${P16Tenney7}`,
        info:``,
      },
      {
        photo:`${P16Tenney8}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P16Tenney1})` }}/>
    <PanelTitle>Exclusion :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Tenney Committee
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

export default Panel5ExclusionPanel1;