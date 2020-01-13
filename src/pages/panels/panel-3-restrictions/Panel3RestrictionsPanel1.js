import React, { Component } from 'react';
import {
  SideBySideMagnifier,GlassMagnifier
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

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
    panelHeader: [
      {
        photopanel:`${P10Notice1}`,
        HeaderDetails:`This panel focuses on the re-registration required of all enemy aliens in early February of 1942. The result was the Pink Registration Booklet that each enemy alien had to carry on pain of internment. The ID booklet contained a photo and fingerprint of each enemy alien and instructions as to their behavior. The issue of the <span class='italic'>Pittsburg Post-Dispatch</span> features the headline about the curfew going into effect on Feb. 24.`,
      },
    ],
    panelDetail: [
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
        info:`The map at top shows both the prohibited zones (in black) and the curfew zones (in crosshatch) for enemy aliens. The letter to its left reprints the message from Attorney General Biddle to <span class='italic'>L’Italia</span> requiring the newspaper to print the orders restricting the possession of “contraband” by enemy aliens. The curfew (or ‘restricted’) zones covered what is commonly known as the Pacific Slope, the area from the Pacific ocean to the Sierra foothills. In this zone, the 8PM to 6AM curfew was in effect, as well as travel and residence restrictions. The copy of the <span class='italic'>Pittsburg Post-Dispatch</span> is headlined with the news of the 9 PM (the original curfew was 9PM; in March, General DeWitt increased the curfew hours to start at 8 PM) curfew for enemy aliens about to go into effect on February 24.`,
      },
      {
        photo:`${P10Notice7}`,
        info:`Beginning in late December 1941, Italian aliens were hit by a series of federal regulations of increasing severity. Posters like the one shown ordered them to register and be photographed; the resulting I.D. booklets had to be carried at all times. Any travel of more than 5 miles from home had to be preceded by applications for travel permits like those shown. On the West Coast, an 8PM to 6AM curfew was imposed, which led to widespread fear of being reported.
        <br /><br />
        One family remembered returning from the movies later in their car and covering their Nonna, an enemy alien in violation of curfew, with a blanket. Latent effects could cut deeper and last longer. Frances Cardinalli reported that ever afterwards, her father, upon hearing the 8 o’clock factory whistle in Pittsburg, would remember the curfew and silently go to bed. `,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P10Notice1})` }}/>
    <PanelTitle>Notice To Aliens
      <h2>Restrictions :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

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

    </DetailPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel3RestrictionsPanel1;