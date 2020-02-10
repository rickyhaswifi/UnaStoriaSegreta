import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner,} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P4Sup1 from '../../../components/images/panels/supplement/P4Sup1.jpg';
import P4Sup2 from '../../../components/images/panels/supplement/P4Sup2.jpg';
import P4Sup3 from '../../../components/images/panels/supplement/P4Sup3.jpg';
import P4Sup4 from '../../../components/images/panels/supplement/P4Sup4.jpg';
import P4Sup5 from '../../../components/images/panels/supplement/P4Sup5.jpg';
import P4Sup6 from '../../../components/images/panels/supplement/P4Sup6.jpg';
// END IMPORTS

class Panel7SupplementsPanel4 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P4Sup1}`,
        info:`These contraband items that all 600,000 enemy aliens had to surrender to local authorities in late 1941 appeared in the original <span class='italic'>Una Storia Segreta</span> exhibit. They included the radio with shortwave band, and apparently innocuous items like the flashlight and a Kodak camera.`,
      },
      {
        photo:`${P4Sup2}`,
        info:`This “call to arms” from the <span class='italic'>Stockton Record</span> (Stockton, CA) encouraged citizens to be wary of enemy aliens and to report any activities they deemed to be “suspicious.” Such warnings could only heighten fears that those who shortly before were neighbors or friends might now be engaged in sabotage or espionage. Not a single case of either was ever reported regarding Italian enemy aliens.`,
      },
      {
        photo:`${P4Sup3}`,
        info:`At the Tolan Committee Hearings, begun in San Francisco in February 1942, numerous enemy aliens testified to the hardship they anticipated with their forced removal from prohibited zones. Congressman Tolan’s committee shortly thereafter issued a report warning of the even more serious disruptions to the war effort if the prohibited zones and forced evacuations were extended to the East Coast, as the military was demanding. Thanks in part to these hearings, they were not. (See also Attorney General Biddle’s similar objections to extending the prohibited zones to the East Coast, below.)`,
      },
      {
        photo:`${P4Sup4}`,
        info:`This copy of the February 4, 1942 <span class='italic'>Richmond Independent</span> headlines the coming order for enemy aliens to evacuate from the California coast. Subsequent issues would continue this line, focusing more specifically on where the “prohibited” zones were located. Note that the subhead refers to enemy aliens as “Axis nationals,” emphasizing their connection to the enemy nations often referred to as the Axis.`,
      },
      {
        photo:`${P4Sup5}`,
        info:`This map showing the prohibited and restricted zones in northern California appeared in the February 5, 1942 <span class='italic'>San Francisco Chronicle</span>. All enemy aliens had to leave prohibited zones and work or live elsewhere; they could remain in restricted zones but were subject to curfew, travel, and change-of-residence restrictions.`,
      },
      {
        photo:`${P4Sup6}`,
        info:`This map from the <span class='italic'>San Francisco Chronicle</span> of February 13, 1942, indicates the Prohibited Zones in San Francisco from which enemy aliens were forced to remove themselves. They are the waterfront district north and south of the Bay Bridge (including Fisherman’s Wharf), the waterfront district near Islais Channel, the Hunters Point district, and the district near China Basin. The article also notes that on February 24, the remainder of San Francisco will become a “curfew zone,” where enemy aliens must be in their homes between 9pm and 6am.`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P4Sup1})` }}/>
    <PanelTitle>Photos & Documents #4
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
    active={'.'}
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
    name='Page 3'
    href='/supplements/3'
    />
    <Menu.Item
    active={'.'}
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

export default Panel7SupplementsPanel4;