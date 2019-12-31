import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P1Sup1 from '../../../components/images/panels/supplement/P1Sup1.jpg';
import P1Sup2 from '../../../components/images/panels/supplement/P1Sup2.jpg';
import P1Sup3 from '../../../components/images/panels/supplement/P1Sup3.jpg';
import P1Sup4 from '../../../components/images/panels/supplement/P1Sup4.jpg';
import P1Sup5 from '../../../components/images/panels/supplement/P1Sup5.jpg';
import P1Sup6 from '../../../components/images/panels/supplement/P1Sup6.jpg';
import P1Sup7 from '../../../components/images/panels/supplement/P1Sup7.jpg';
// END IMPORTS

class Panel7SupplementsPanel1 extends Component {
  state = {
    panelDetail: [
      {
        photo:``,
        info:`The photos and documents that appear in Una Storia Segreta were gathered when the exhibit was mounted in late 1993 and 1994. Since that time, additional information, materials, documents and photographs have been discovered through research and from informants. It is those that we here add to the formal exhibit to supplement and support that which Una Storia Segreta first brought to public attention. And given that no historical record can ever be complete, we are confident that there will be more to add in the coming years. For now, though, we are pleased to present the supplemental information gathered below to fill out some of the gaps in our original presentation. They are presented in roughly the same order with which we designed our exhibit—beginning with the exhibit Opening on February 24, 1994, and then going through the six sections: Prelude to War, Internment, Restrictions, Evacuation, Exclusion, and ending with Aftermath. Though it is not always possible, we try to indicate in captions which section of the original exhibit they relate to.`,
      },
      {
        photo:`${P1Sup1}`,
        info:`In 1994, the Western Chapter of the American Italian Historical Association produced an exhibit it called “Una Storia Segreta: When Italian Americans Were ‘Enemy Aliens.’” The exhibit opened at the Museo Italo Americano on February 24, 1994 in commemoration of the evacuation deadline on that same date in 1942. The exhibit was an immediate sensation, and began what would turn out to be more than twenty years of travel to more than fifty different sites around the nation.`,
      },
      {
        photo:`${P1Sup2}`,
        info:`All aliens were required by law to register with the government in accordance with the 1940 Alien Registration Act (often known as the Smith Act). Each alien was given the above card to carry as proof of having registered. Because of this, we called the registration of enemy aliens in 1942 a “re-registration,” since the government already had information about aliens via the 1940 law.`,
      },
      {
        photo:`${P1Sup3}`,
        info:`Crowd in front of Cavalli’s Bookstore in San Francisco’s North Beach listening to Mussolini’s speech, January 31, 1931.`,
      },
      {
        photo:`${P1Sup4}`,
        info:`The first page of Prospero Cecconi’s internment diary, strictly prohibited for internees, records his arrest on Feb. 21, 1942, and his transport to the FBI detention station at 108 Silver Ave, in San Francisco. Cecconi kept the secret diary for the whole time of his internment. It is one of the very few written records we have by an Italian-born internee.`,
      },
      {
        photo:`${P1Sup5}`,
        info:`Prospero Cecconi’s Basic PersonInnel Record, showing his April 21, 1942 transfer, upon the formal internment order, to the Prisoner of War Enclosure at Angel Island CA, in San Francisco Bay. It was at this military facility that the PMG Form 2 seen below was generated. This and other similar records on internees are kept in the National Archives military section in College Park, Maryland, or NARA II.`,
      },
      {
        photo:`${P1Sup6}`,
        info:`The above items were presented in a display case for the original Una Storia Segreta exhibit at San Francisco’s Museo Italo Americano in 1994. This display included letters from internee Carmelo Ilacqua to his wife Bruna, a telegram to her, various records from Ilacqua’s FBI file, and the battered briefcase in which his wife stored the records.`,
      },
      {
        photo:`${P1Sup7}`,
        info:`The Basic Personnel Record of internee Carmelo Ilacqua of San Francisco. Since all those apprehended in California were ordered out of his military area by an irate General DeWitt (head of the Western Defense Command), they were shipped by train to the internment camp at Fort Missoula, Montana before having their hearings. This is why Ilacqua’s record shows Fort Missoula, Montana as the place where he was given a hearing and processed for internment.`,
      },
    ]
  }
  
  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P1Sup1})` }}/>
    <PanelTitle>Supplements :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Photos & Documents #1
    </PanelContentTitle>

    <Menu pointing secondary widths={5}>
    <Menu.Item
    active={'.'}
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
    active={'.'}
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

export default Panel7SupplementsPanel1;