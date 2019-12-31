import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P8Sup1 from '../../../components/images/panels/supplement/P8Sup1.jpg';
import P10Sup1 from '../../../components/images/panels/supplement/P10Sup1.jpg';
import P10Sup2 from '../../../components/images/panels/supplement/P10Sup2.jpg';
import P10Sup3 from '../../../components/images/panels/supplement/P10Sup3.jpg';
import P10Sup4 from '../../../components/images/panels/supplement/P10Sup4.jpg';
// END IMPORTS

class Panel7SupplementsPanel10 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P10Sup1}`,
        info:``,
      },
      {
        photo:`${P10Sup2}`,
        info:``,
      },
      {
        photo:`${P10Sup3}`,
        info:``,
      },
      {
        photo:`${P10Sup4}`,
        info:``,
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
    Bibliography
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
    name='Page 8'
    href='/supplements/8'
    />
    <Menu.Item
    name='Exhibit'
    href='/supplements/exhibit'
    />
    <Menu.Item
    active={'.'}
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
    name='Page 8'
    href='/supplements/8'
    />
    <Menu.Item
    name='Exhibit'
    href='/supplements/exhibit'
    />
    <Menu.Item
    active={'.'}
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

export default Panel7SupplementsPanel10;