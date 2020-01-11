import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P8Sup1 from '../../../components/images/panels/supplement/P8Sup1.jpg';
import P9Sup1 from '../../../components/images/panels/supplement/P9Sup1.jpg';
import P9Sup2 from '../../../components/images/panels/supplement/P9Sup2.jpg';
import P9Sup3 from '../../../components/images/panels/supplement/P9Sup3.jpg';
// END IMPORTS

class Panel7SupplementsPanel9 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P9Sup1}`,
        info:``,
      },
      {
        photo:`${P9Sup2}`,
        info:``,
      },
      {
        photo:`${P9Sup3}`,
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
    <PanelTitle>Exhibit Appearances
      <h2>Supplements</h2>
    </PanelTitle>
    <ParaPanel>

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
    active={'.'}
    name='Exhibit'
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
    active={'.'}
    name='Exhibit'
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

export default Panel7SupplementsPanel9;