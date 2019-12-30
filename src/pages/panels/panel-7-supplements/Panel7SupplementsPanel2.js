import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P2Sup1 from '../../../components/images/panels/supplement/P2Sup1.jpg';
import P2Sup2 from '../../../components/images/panels/supplement/P2Sup2.jpg';
import P2Sup3 from '../../../components/images/panels/supplement/P2Sup3.jpg';
import P2Sup4 from '../../../components/images/panels/supplement/P2Sup4.jpg';
import P2Sup5 from '../../../components/images/panels/supplement/P2Sup5.jpg';
// END IMPORTS

class Panel7SupplementsPanel2 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P2Sup1}`,
        info:`Federico Dellagatta’s internment order was dated October 16, 1942, which is after the general restrictions on all enemy aliens were lifted by Francis Biddle, the Attorney General who signed this order. Notice that the allegation against him characterizes Dellagatta “as being potentially dangerous to the public peace and safety of the United States.” Note also that though the Alien Enemy Hearing Board recommended parole, the Attorney General overruled his board (as he often did), and recommended internment anyway.`,
      },
      {
        photo:`${P2Sup2}`,
        info:`In accordance with his internment order, Dellagatta, who worked shining shoes in Providence’s Union Station, was received for internment on October 22, 1942 at the U.S. Immigration Station in East Boston, Mass. He had actually been apprehended by the FBI earlier, on August 25, 1942. The day after this PMG Form 2 was generated, on October 23, Dellagatta was transferred to Ellis Island, and within a week, on October 29, was received for internment at Fort Meade, Maryland. He ended up, like most Italian internees, at Fort Missoula Montana in May of 1943. He was released on parole after a year in internment, in October 1943.`,
      },
      {
        photo:`${P2Sup3}`,
        info:`In June and July of 1942, Olga Trento, wife of San Francisco internee Guido Trento, tried writing to the Enemy Alien Control Unit of the Justice Department to inquire about the reason for her husband’s internment. Told that Trento was interned as a “potentially dangerous alien enemy,” she inquires here about how she might learn exactly what such a charge means: “I have never been able to ascertain what the charges were at this hearing you speak of…so as to be able to combat these allegations.” In short, like the excludees, the internees were never told the charges against them (as would be required by the Constitution in a court of law), and so were very hard pressed to find a way to defend themselves.`,
      },
      {
        photo:`${P2Sup4}`,
        info:`Guido Trento’s Basic Personnel File, front (above) and back (below). Note that, like other early internees from California, Trento was registered as an internee (and had his hearing) in Fort Missoula, MT. The back of the document indicates that he was apprehended on December 8, 1941, the day after Pearl Harbor, and was shipped by train to Fort Missoula shortly thereafter. He was then transferred to the U.S. Army base at Fort Sam Houston, TX where he was received on April 14, 1942. He was next sent to Camp Forrest, TN and Fort McAlester, OK before being shipped back, with all Italian internees, to Fort Missoula on May 18, 1943.`,
      },
      {
        photo:`${P2Sup5}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P2Sup1})` }}/>
    <PanelTitle>Supplements :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Photos & Documents #2
    </PanelContentTitle>

    <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Page 1"
    href='/supplements/1'
    />
    <Menu.Item
    active={'.'}
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
    active={'.'}
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

export default Panel7SupplementsPanel2;