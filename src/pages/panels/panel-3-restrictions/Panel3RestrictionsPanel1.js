import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P10Notice1 from '../../../components/images/panels/restrictions/P10Notice1.jpg'
import P10Notice2 from '../../../components/images/panels/restrictions/P10Notice2.jpg'
import P10Notice3 from '../../../components/images/panels/restrictions/P10Notice3.jpg'
import P10Notice4 from '../../../components/images/panels/restrictions/P10Notice4.jpg'
import P10Notice5 from '../../../components/images/panels/restrictions/P10Notice5.jpg'
import P10Notice6 from '../../../components/images/panels/restrictions/P10Notice6.jpg'
import P10Notice7 from '../../../components/images/panels/restrictions/P10Notice7.jpg'
import P10Notice8 from '../../../components/images/panels/restrictions/P10Notice8.jpg'
import P10Notice9 from '../../../components/images/panels/restrictions/P10Notice9.jpg'
import P10Notice10 from '../../../components/images/panels/restrictions/P10Notice10.jpg'
import P10Notice11 from '../../../components/images/panels/restrictions/P10Notice11.jpg'
import P10Notice12 from '../../../components/images/panels/restrictions/P10Notice12.jpg'
import P10Notice13 from '../../../components/images/panels/restrictions/P10Notice13.jpg'
// END IMPORTS

class Panel3RestrictionsPanel1 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P10Notice1}`,
        info:`This panel focuses on the re-registration required of all enemy aliens in early February of 1942. The result was the Pink Registration Booklet that each enemy alien had to carry on pain of internment. The ID booklet contained a photo and fingerprint of each enemy alien and instructions as to their behavior. The issue of the Pittsburg Post-Dispatch features the headline about the curfew going into effect on Feb. 24.`,
      },
      {
        photo:`${P10Notice13}`,
        info:`Travel permit for Caterina Cardinale. Even though she was forced to move by government order, Cardinale still had to obtain this travel permit to move from her home in Pittburg to Centreville farther south.`,
      },
      {
        photo:`${P10Notice2}`,
        info:`The pink ID Booklet, showing the inside—with birth date, birth place, current address and alien registration number—and the outside, with the name, address, and jurisdiction place where issued. The inside back cover contained instructions as to allowable and prohibited behavior. The booklet had to be carried at all times by enemy aliens.`,
      },
      {
        photo:`${P10Notice12}`,
        info:`The map at top shows both the prohibited zones (in black) and the curfew zones (in crosshatch) for enemy aliens. The letter to its left reprints the message from Attorney General Biddle to L’Italia requiring the newspaper to print the orders restricting the possession of “contraband” by enemy aliens. The curfew (or ‘restricted’) zones covered what is commonly known as the Pacific Slope, the area from the Pacific ocean to the Sierra foothills. In this zone, the 8PM to 6AM curfew was in effect, as well as travel and residence restrictions. The copy of the Pittsburg Post Dispatch is headlined with the news of the 9 PM (the original curfew was 9PM; in March, General DeWitt increased the curfew hours to start at 8 PM) curfew for enemy aliens about to go into effect on February 24.`,
      },
      {
        photo:`${P10Notice5}`,
        info:``,
      },
      {
        photo:`${P10Notice6}`,
        info:``,
      },
      {
        photo:`${P10Notice7}`,
        info:``,
      },
      {
        photo:`${P10Notice8}`,
        info:``,
      },
      {
        photo:`${P10Notice9}`,
        info:``,
      },
      {
        photo:`${P10Notice10}`,
        info:``,
      },
      {
        photo:`${P10Notice11}`,
        info:``,
      },
      {
        photo:`${P10Notice4}`,
        info:``,
      },
      {
        photo:`${P10Notice3}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P10Notice1})` }}/>
    <PanelTitle>Restrictions :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Notice To Aliens
    </PanelContentTitle>

    <Menu pointing secondary widths={3}>
    <Menu.Item
    active={'.'}
    name="Notice To Aliens"
    href='/restrictions/notice'
    />
    <Menu.Item
    name='Cartoons'
    href='/restrictions/cartoons'
    />
    <Menu.Item
    name="Don't Speak The Enemy's Language"
    href='/restrictions/language'
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
      
    <Menu pointing secondary widths={3}>
    <Menu.Item
    active={'.'}
    name="Notice To Aliens"
    href='/restrictions/notice'
    />
    <Menu.Item
    name='Cartoons'
    href='/restrictions/cartoons'
    />
    <Menu.Item
    name="Don't Speak The Enemy's Language"
    href='/restrictions/language'
    />
    </Menu>

    <Crumbs>
    <CrumbLeft
    href='/internment'
    >
    <Icon name='angle left' /> 
    Back
    </CrumbLeft>

    <CrumbRight
    href='/evacuation'
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

export default Panel3RestrictionsPanel1;