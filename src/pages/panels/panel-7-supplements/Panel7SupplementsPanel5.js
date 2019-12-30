import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P5Sup1 from '../../../components/images/panels/supplement/P5Sup1.jpg';
import P5Sup2 from '../../../components/images/panels/supplement/P5Sup2.jpg';
import P5Sup3 from '../../../components/images/panels/supplement/P5Sup3.jpg';
import P5Sup4 from '../../../components/images/panels/supplement/P5Sup4.jpg';
import P5Sup5 from '../../../components/images/panels/supplement/P5Sup5.jpg';
import P5Sup6 from '../../../components/images/panels/supplement/P5Sup6.jpg';
import P5Sup7 from '../../../components/images/panels/supplement/P5Sup7.jpg';
import P5Sup8 from '../../../components/images/panels/supplement/P5Sup8.jpg';
// END IMPORTS

class Panel7SupplementsPanel5 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P5Sup1}`,
        info:``,
      },
      {
        photo:`${P5Sup2}`,
        info:`This April 9, 1942 draft memo from Attorney General Francis Biddle to President Roosevelt addresses the “morale problem” the AG sees in the military’s growing demands to extend West Coast “prohibited zones” to the much more populous East Coast. The Attorney General notes that “There is a possibility of disaffecting seventeen million persons through thoughtfulness” (he clearly meant ‘thoughtlessness.’) He concludes this section with the stunning statement that “Hitler himself could not have achieved a result so desirable,” e.g., turning millions of loyal German- and Italian-Americans against the U.S. war effort.`,
      },
      {
        photo:`${P5Sup3}`,
        info:`Nicky Buccellato of Pittsburg, with his mother, Catherine Buccellato. Nicky was one of those sons of enemy aliens in the military who came home on leave to find his home empty. While he had been serving his country, his mother was forced to leave her Pittsburg home (virtually the whole town was in the “prohibited zone”) and move to migrant worker shacks in nearby Oakley (photo below).`,
      },
      {
        photo:`${P5Sup4}`,
        info:``,
      },
      {
        photo:`${P5Sup5}`,
        info:`This FBI report dated October 21, 1942—more than a week after all restrictions on enemy aliens had been lifted by the Attorney General—registers the arrest of eight (8) Italian aliens for curfew violations: they were at work at the Italian Swiss Winery in Sonoma County at 10:00 pm. Though this was the critical harvest season for wine grapes, the arrests indicate that the curfew was taken quite seriously, with no exceptions allowed (unless each worker individually applied for a special exemption, which was impossible for laborers working long hours, and without transportation).`,
      },
      {
        photo:`${P5Sup6}`,
        info:`The Cutino Bros. was a purse seiner from Monterey where it had been taking part in the sardine bonanza before the war. The Navy was short of boats for its operations, however, so it requisitioned the Cutino Bros. along with dozens of other boats owned by Italian-Americans, and converted them for naval use.`,
      },
      {
        photo:`${P5Sup7}`,
        info:`This is the Cutino Bros. after it was converted by the Navy for patrol and target-towing duty.`,
      },
      {
        photo:`${P5Sup8}`,
        info:`This photograph shows the Spadaro family proudly attending the christening of their new purse seiner, the New Marettimo, in Monterey in 1944. The old Marettimo was requisitioned by the Navy for use during the war, and was returned in very poor condition. Left at anchor pending repairs, it was totally destroyed by a Monterey Bay storm and never fished again.`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P5Sup6})` }}/>
    <PanelTitle>Supplements :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Photos & Documents #5
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
    active={'.'}
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
    active={'.'}
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

export default Panel7SupplementsPanel5;