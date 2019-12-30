import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

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
        info:`In 1997, Una Storia Segreta was mounted on easels in Washington, DC and displayed around the main hall in the Rayburn House Office Building. The display was coordinated with the introduction of the bill, the Wartime Violation of Italian American Civil Liberties Act, that would take another three years to pass.`,
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
        info:`Rose Scudero of Pittsburg CA, Rep. Henry Hyde, and Project Director Lawrence DiStasi photographed after the Judiciary Committee hearings. The bill—the Wartime Violation of Italian American Civil Liberties Act—was presented to President Bill Clinton a year later in October. He signed it into Public Law #106-451 on Nov. 7, 2000.`,
      },
      {
        photo:`${P8Sup5}`,
        info:``,
      },
      {
        photo:`${P8Sup6}`,
        info:`The Department of Justice, complying with the Wartime Violation of Italian American Civil Liberties Act, researched and issued this report to the Congress in 2001. In addition to lists of those interned and arrested, it included, for the first time, the U.S. Government’s acknowledgment that there had indeed been a “mass temporary evacuation of Italian enemy aliens” on the West Coast, and that similar plans for an East Coast removal of German and Italian enemy aliens had been seriously proposed by the military, but were abandoned by order of the President.`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P8Sup1})` }}/>
    <PanelTitle>Supplements :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Photos & Documents #8
    </PanelContentTitle>

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

    </ParaPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel7SupplementsPanel8;