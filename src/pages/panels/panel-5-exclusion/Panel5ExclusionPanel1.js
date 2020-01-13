import React, { Component } from 'react';
import {
  SideBySideMagnifier,GlassMagnifier
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P16Tenney1 from '../../../components/images/panels/exclusion/P16Tenney1.jpg';
import P16Tenney2 from '../../../components/images/panels/exclusion/P16Tenney2.jpg';
import P16Tenney3 from '../../../components/images/panels/exclusion/P16Tenney3.jpg';
import P16Tenney4 from '../../../components/images/panels/exclusion/P16Tenney7.jpg';
// END IMPORTS

class Panel5ExclusionPanel1 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P16Tenney1}`,
        HeaderDetails:`The California Assembly Committee Investigating UnAmerican Activities was chaired by Assemblyman Jack Tenney of Ingleside. It resumed hearings in San Francisco in late May of 1942 and featured testimony arguing that San Francisco was a hotbed of fascist activity. As a result, two dozen of the city’s most prominent naturalized citizens were served with orders excluding them from most of California and 27 other states. The hearings inspired big headlines about those under investigation, including the sitting mayor of San Francisco, Angelo Rossi.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P16Tenney2}`,
        info:`The <span class='italic'>San Francisco Chronicle</span> covered the Tenney hearings in great detail. The subhead highlights the major figures forced to testify: Sylvester Andriano, head of the Draft Board in North Beach, Ettore Patrizi, editor/publisher of <span class='italic'>L’Italia</span>, and Angelo Rossi, current mayor of the city. Their main accuser, Carmelo Zito, charged that he had seen Rossi give the fascist salute in public. The photo inset depicts Zito, editor of the Italian American newspaper, <span class='italic'>Il Corriere del Popolo</span>.`,
      },
      {
        photo:`${P16Tenney3}`,
        info:`The photo at top left depicts Mayor Rossi (far left) and Sylvester Andriano (4th from left) at a meeting of the San Francisco Police Commission on which Andriano had served. He had also been a city Supervisor. The news item depicts Andriano when his alma mater, St. Mary’s College, honored him as ‘Alumnus of the Year’ in 1961.`,
      },
      {
        photo:`${P16Tenney4}`,
        info:`News articles detail how American-born Mayor Angelo Rossi responds, sometimes tearfully, to accusations at the Tenney Committee hearings that he was a fascist. Following the hearings, Rossi’s political career was effectively over.`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${P16Tenney1})` }}/>
    <PanelTitle> Tenney Committee
      <h2>Exclusion :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

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

    </DetailPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel5ExclusionPanel1;