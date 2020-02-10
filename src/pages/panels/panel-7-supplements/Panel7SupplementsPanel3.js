import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner,} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P3Sup1 from '../../../components/images/panels/supplement/P3Sup1.jpg';
import P3Sup2 from '../../../components/images/panels/supplement/P3Sup2.jpg';
import P3Sup2A from '../../../components/images/panels/supplement/P3Sup2A.jpg';
import P3Sup5 from '../../../components/images/panels/supplement/P3Sup5.jpg';
// END IMPORTS

class Panel7SupplementsPanel3 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P3Sup1}`,
        info:`The Basic Personnel Record of Italian internee Louis Sdraulig, apprehended by the FBI on February 21, 1942 in Santa Clara, CA. He had worked at the University of Santa Clara there as a gardener. He was transferred to the Detention Center at Sharp Park shortly thereafter, and on May 11 to the Prisoner of War Enclosure on Angel Island in San Francisco Bay where his PMG Form 2 was generated. On May 25, he was sent to Fort Sam Houston, a month later to Camp Forrest in Tennessee, and in September to the internment camp at Fort McAlester OK, where he wrote the letter to Asst. AG Edward Ennis below.`,
      },
      {
        photo:`${P3Sup2}`,
        info:`Louis Sdraulig’s December 8, 1942 letter from the internment camp at McAlester, OK, was sent after ten months as an internee. His letter is a classic example of how many internees were completely befuddled about why they were interned. It also demonstrates how, in the absence of information, many looked for some hidden fault of their own. As Sdraulig writes, “After all this time in the enclosure I do not know yet why all this, must be some reason for, some evil I do not know, something wrong some where…My past record is spotless clean I always obeyed all laws of this country…I do not know how I am considered as potentialy (sic) dangerous. What evil I made?”`,
      },
      {
        photo:`${P3Sup2A}`,
        info:`Letter from Louis Sdraulig to Asst. AG Edward Ennis (Continued)`,
      },
      {
        photo:`${P3Sup5}`,
        info:`The internment camp at Missoula, Montana where most enemy aliens of Italian descent were transferred in May of 1943. The Italian merchant seamen who had been sent there earlier had christened it “Camp Bella Vista” because of the picturesque mountains in the distance. Most of the Italian American internees, however, failed to see their internment as in any way beautiful.`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P3Sup5})` }}/>
    <PanelTitle>Photos & Documents #3
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
    active={'.'}
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
    active={'.'}
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

export default Panel7SupplementsPanel3;