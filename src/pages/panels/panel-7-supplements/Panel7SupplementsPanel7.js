import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P7Sup1 from '../../../components/images/panels/supplement/P7Sup1.jpg';
import P7Sup2 from '../../../components/images/panels/supplement/P7Sup2.jpg';
import P7Sup3 from '../../../components/images/panels/supplement/P7Sup3.jpg';
// END IMPORTS

class Panel7SupplementsPanel7 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P7Sup1}`,
        info:`Right after its opening in February 1994, <span class='italic'>Una Storia Segreta</span> was displayed in the State Capitol in Sacramento, in the rotunda. An open forum included then-governor, Pete Wilson, who signed a resolution formally recognizing these events.`,
      },
      {
        photo:`${P7Sup2}`,
        info:`The front cover of the exhibit Catalog, showing the entry to the Missoula MT internment camp. The Catalog was paid for by donations from the Italian American Federation of the East Bay, the Italian American Cultural Foundation, and Mercurio Printing. Donations for the Catalog from those attending the exhibit provided the necessary expenses to keep the exhibit traveling for over twenty years.`,
      },
      {
        photo:`${P7Sup3}`,
        info:"The back cover of the exhibit Catalog, listing the six sites where the exhibit was shown in its first year. Click on <a href='/supplements/exhibit'>Exhibit Appearances</a> below for a listing.",
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P7Sup1})` }}/>
    <PanelTitle>Photos & Documents #7
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
    active={'.'}
    name='Page 7'
    href='/supplements/7'
    />
    <Menu.Item
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
<Segment color='blue'>
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
    active={'.'}
    name='Page 7'
    href='/supplements/7'
    />
    <Menu.Item
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

export default Panel7SupplementsPanel7;