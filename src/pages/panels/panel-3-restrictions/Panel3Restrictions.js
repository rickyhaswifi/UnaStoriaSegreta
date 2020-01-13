import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, Quote, Horizontal, PanelTitle, Crumbs, CrumbLeft, CrumbRight,PanelSub, GalleryContainer, PanelBanner, ViewPanelButton, ViewPanelSection} from '../../../styled-compoments/PanelContentStyles';
import { Icon, Grid } from 'semantic-ui-react'
import HeroRestriction from '../../../components/images/panels/restrictions/HeroRestriction.jpg';
import Slide from 'react-reveal/Slide'; 

class Panel3Restrictions extends Component {
  state = {
    panelButton: [
      {
        name:"Notice To Aliens",
        image:'',
        link:'/restrictions/notice',
      },
      {
        name:"Cartoons",
        image:'',
        link:'/restrictions/cartoons',
      },
      {
        name:"Don't Speak The Enemy's Language",
        image:'',
        link:'/restrictions/language',
      },
    ]
  }
render() {

return (
<>
<PageContainer>
<PageWrap>

<PanelBanner style={{ background: `url(${HeroRestriction})` }}/>
<Slide bottom>

  <PanelTitle>Restrictions</PanelTitle>
<ParaPanel>
  
<p>In January of 1942, all enemy aliens were required to register at local post offices around the country. Although all resident aliens had already registered in 1940 under the terms of the Smith Act, now, those branded as &lsquo;enemy&rsquo; aliens would be required to be fingerprinted photographed, and carry their photo-bearing &ldquo;enemy alien registration cards&rdquo; at all times. To those affected, this was alarming; in retrospect, it recalls the authoritarian methods of the very fascists it was meant to combat.</p>

<p>Then came a series of Army proclamations, some directed at all 600,000 enemy aliens of Italian descent nationwide, some only for those on the West Coast:</p>

<p>1. Travel: no travel beyond a five-mile radius of home; longer trips require application for travel permit.</p>

<p>2. Contraband: All firearms or weapons of any kind, shortwave radios, cameras, maps, and &ldquo;signaling devices&rdquo; (including flashlights) prohibited; all to be turned in or confiscated. Of those turned in, many were never returned.</p>

<p>3. Curfew: All enemy aliens on the West Coast confined to homes between 8:00 PM and 6:00 AM.</p>

<p>The impact of these restrictions was widespread and apparently unanticipated by the government. In places on the West Coast like Monterey, Santa Cruz, Pittsburg and San Francisco&mdash;where Italian immigrants, many of them long-term residents without final citizenship papers, constituted a majority of the fishermen, scavengers, restaurant workers, and janitors&mdash;the restrictions created serious employment and food-supply problems</p>

<p>The impact on personal lives can only be suggested. Because of the travel restrictions, mothers could not visit their children in hospitals if they were more than five miles away. Salesmen could not visit prospective clients. Families could not attend a relative&rsquo;s funeral. No alien could make a trip to visit distant friends or relatives, nor even visit their own sons in uniform at military installations. Those who violated the travel rules could be, and were arrested and held in detention centers like the one at Sharp Park near San Francisco. The same was true of those with so-called &lsquo;contraband&rsquo; such as a gun owned by an absent father.</p>

<p>For the fishermen, the regulations seemed arbitrary at best, foolish or cruel at worst. In Pittsburg, the inland fishermen were classed as an exempt industry, and so were allowed to fish. However, Monterey and San Francisco fishermen (and all those who fished the Pacific Ocean) were restricted: the aliens could not go out on boats, and scores of citizens who owned large purse seiners had them requisitioned by the Navy or Coast Guard for patrol duty. Giuseppe Spadaro&rsquo;s &ldquo;Marettimo&rdquo; was returned to him in such poor condition that he could not use it; before he could have it repaired, a storm destroyed it altogether.</p>

<p>In the West, the curfew caused fear, suspicion and worse. Those picked up for violations were left to wonder if a neighbor had informed on them. Animosities festered and lingered even after the war. The legacy of all this is hard to calculate, but one thing seems evident: arresting a truck farmer unable to complete his last delivery run by 8:00 PM probably did little to help security but much to destroy the trust necessary for community life. And whether such a person could ever trust his government again is something else again.</p>

<h1>Panels</h1>
{/* END STATIC CONTENT */}


<Grid doubling stackable>
<Grid.Row>
{this.state.panelButton.map(pButton => {
return (
<section key={`${pButton.id}`} className="">

<Grid.Column padded>
<ViewPanelSection>
<ViewPanelButton
href={pButton.link}
>
{pButton.name}
</ViewPanelButton>
</ViewPanelSection>
</Grid.Column>

</section>
  );
})}
</Grid.Row>
</Grid>

<Crumbs>
  <CrumbLeft
  href='/prelude'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/evacuation'
  >
  Next
	<Icon name='angle right' /> 
  </CrumbRight>
</Crumbs>

</ParaPanel>
</Slide>
</PageWrap>
</PageContainer>

</>
)
}
}

export default Panel3Restrictions;