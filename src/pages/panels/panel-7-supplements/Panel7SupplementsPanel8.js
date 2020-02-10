import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner,} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P8Sup1 from '../../../components/images/panels/supplement/P8Sup1.jpg';
import P8Sup2 from '../../../components/images/panels/supplement/P8Sup2.jpg';
import P8Sup3 from '../../../components/images/panels/supplement/P8Sup3.jpg';
import P8Sup4 from '../../../components/images/panels/supplement/P8Sup4.jpg';
import P8Sup5 from '../../../components/images/panels/supplement/P8Sup5.jpg';
import P8Sup6 from '../../../components/images/panels/supplement/P8Sup6.jpg';
// END IMPORTS

class Panel7SupplementsPanel8 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P8Sup1}`,
        info:`In 1997, <span class='italic'>Una Storia Segreta</span> was mounted on easels in Washington, DC and displayed around the main hall in the Rayburn House Office Building. The display was coordinated with the introduction of the bill, <span class='italic'>The Wartime Violation of Italian American Civil Liberties Act</span>, that would take another three years to pass.`,
      },
      {
        photo:`${P8Sup2}`,
        info:`After the wartime legislation was re-introduced in 1999, key hearings before the House Judiciary Committee were finally secured and held on October 24, 1999. Among those featured at the hearing were baseball great Dominic DiMaggio (3rd from right) and Doris Pinza, wife of the late Ezio Pinza (2d from right). The others are (front row L to R): Congressman Rick Lazio, Angelo Guttadauro, Matt diDomenico of NIAF, Rose Scudero, Lawrence DiStasi, Dom DiMaggio, Doris Pinza, and Phil Piccigallo of OSIA. (Back Row) Anthony LaPiana (L) and John Calvelli. The hearings were successful enough that Judiciary Chair Henry Hyde put the bill on the fast track, and it passed the House by unanimous consent.`,
      },
      {
        photo:`${P8Sup3}`,
        info:`Dom DiMaggio conversing at the Judiciary Hearings with Doris Pinza.`,
      },
      {
        photo:`${P8Sup4}`,
        info:`Rose Scudero of Pittsburg CA, Rep. Henry Hyde, and Project Director Lawrence DiStasi photographed after the Judiciary Committee hearings. The bill—<span class='italic'>The Wartime Violation of Italian American Civil Liberties Act</span>—was presented to President Bill Clinton a year later in October. He signed it into Public Law #106-451 on Nov. 7, 2000.`,
      },
      {
        photo:`${P8Sup5}`,
        info:`Copy of Public Law 106-451, <span class='italic'>The Wartime Violation of Italian American Civil Liberties Act</span>, calling for a Report by the Attorney General.`,
      },
      {
        photo:`${P8Sup6}`,
        info:`The Department of Justice Report (Cover)`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P8Sup1})` }}/>
    <PanelTitle>Photos & Documents #8
      <h2>Supplements</h2>
    </PanelTitle>
    <DetailPanel>

    <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Page 1"
    href='/supplements/1'
    />
    <Menu.Item
    name="Page 2"
    href='/supplements/2'
    />
    <Menu.Item
    name='Page 3'
    href='/supplements/3'
    />
    <Menu.Item
    name='Page 4'
    href='/supplements/4'
    />
    <Menu.Item
    name="Page 5"
    href='/supplements/5'
    />
   </Menu>

   <Menu pointing secondary widths={5}>
    <Menu.Item
    name='Page 6'
    href='/supplements/6'
    />
    <Menu.Item
    name='Page 7'
    href='/supplements/7'
    />
    <Menu.Item
    active={'.'}
    name='Page 8'
    href='/supplements/8'
    />
    <Menu.Item
    name='Exhibit Appearances'
    href='/supplements/exhibit'
    />
    <Menu.Item
    name='Bibliography'
    href='/supplements/bibliography'
    />
    </Menu>

    <Message info>
    <Message.Header>
    <Icon name='info circle'/>Hover images to see details
    </Message.Header>
    </Message>

      {this.state.panelDetail.map(pDetail => {
      return (
      <section key={`${pDetail.id}`} className="">

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
      
      <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Page 1"
    href='/supplements/1'
    />
    <Menu.Item
    name="Page 2"
    href='/supplements/2'
    />
    <Menu.Item
    name='Page 3'
    href='/supplements/3'
    />
    <Menu.Item
    name='Page 4'
    href='/supplements/4'
    />
    <Menu.Item
    name="Page 5"
    href='/supplements/5'
    />
   </Menu>

   <Menu pointing secondary widths={5}>
    <Menu.Item
    name='Page 6'
    href='/supplements/6'
    />
    <Menu.Item
    name='Page 7'
    href='/supplements/7'
    />
    <Menu.Item
    active={'.'}
    name='Page 8'
    href='/supplements/8'
    />
    <Menu.Item
    name='Exhibit Appearances'
    href='/supplements/exhibit'
    />
    <Menu.Item
    name='Bibliography'
    href='/supplements/bibliography'
    />
    </Menu>

  <Crumbs>
  <CrumbLeft
  href='/exclusion'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/'
  >
  Home
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

export default Panel7SupplementsPanel8;