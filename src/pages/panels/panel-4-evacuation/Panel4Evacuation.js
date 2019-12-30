import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, Quote, Horizontal, PanelTitle, Crumbs, CrumbLeft, CrumbRight,PanelSub, GalleryContainer, PanelBanner, ViewPanelButton, ViewPanelSection} from '../../../styled-compoments/PanelContentStyles';
import { Icon, Grid } from 'semantic-ui-react'
import HeroEvac from '../../../components/images/panels/evacuation/HeroEvacuation.jpg';

class Panel4Evacuation extends Component {
  state = {
    panelButton: [
      {
        name:"Pittsburg",
        image:'',
        link:'/evacuations/pittsburg',
      },
      {
        name:"Abono & Suicides",
        image:'',
        link:'/evacuations/abono',
      },
      {
        name:"Fishing Is The Fighting Food",
        image:'',
        link:'/evacuations/fishing',
      },
      {
        name:"Evacuation",
        image:'',
        link:'/evacuations/evacuation',
      },
    ]
  }
render() {

return (
<>
<PageContainer>
<PageWrap>

<PanelBanner style={{ background: `url(${HeroEvac})` }}/>
  <PanelTitle>Evacuations</PanelTitle>
<ParaPanel>

<p>For enemy aliens, February was the &ldquo;cruelest month.&rdquo; Fears of a Japanese invasion of the West Coast ran wild. After a Japanese submarine apparently landed some torpedoes in Santa Barbara, the pressure to move the Japanese population soared. Italians and Germans, feeling the hysteria and reading news reports about the planned removal of all aliens to inland camps, feared the worst.</p>

<p>They were not far off. The order to evacuate &ldquo;prohibited&rdquo; zones along the West Coast no later than February 24 was directed at all enemy aliens. Italian aliens, along with their Japanese and German counterparts, began the wrenching task of finding a place to live and leaving those they loved.</p>

<p>The total numbers who had to leave their homes remains unknown, but in places like Monterey, Pittsburg and Santa Cruz, thousands had to move. In some cases, the new house might be only a block away; in others, it might require a trip of ten, fifteen, or fifty miles to get out of the prohibited zone. Without cars or freeways, such gaps between families often seemed unbridgeable. For some, it was unbearable. Among the several suicides reported in the newspapers was that of 65-year-old Martini Battistessa of Richmond, who, despondent over having to move, threw himself in front of a train on February 21, 1942.</p>

<p>Even aliens with sons or grandsons in the U.S. Armed Forces, like Caterina Buccelato, pictured above with her son Nicky, were not exempt from the order. One San Francisco resident who had to leave his home near Fisherman&rsquo;s Wharf, was the father of a serviceman killed at Pearl Harbor. In Santa Cruz, Steve Ghio came home on leave from the Navy to find the houses in his neighborhood boarded up. He could not find his parents or relatives until he learned of their forced move and obtained a new address from the local police.</p>

<p>The immediate personal and economic effects of this evacuation were vivid enough. California&rsquo;s fishing fleet was decimated by the order prohibiting enemy aliens from ports and docks on the coast. Ninety-seven-year-old Placido Abono was moved from his Pittsburg home to Oakley, ten miles away, on a stretcher.</p>

<p>By July, when the invasion scare had subsided and the entire Japanese American population had been interned, the Army, now in charge, rescinded the order of evacuation. But many Italian aliens&mdash;some of whom could not read Italian, let alone English&mdash;remained in the dark about this change too: the notices that they could go home were simply posted in local newspapers and post office.</p>

<p>Additional ironies abound. Italian Americans were the largest immigrant group in the nation; they were also the largest ethnic group in the U.S. Armed Forces. Nevertheless, parents and grandparents were compelled to move from the homes where they had raised those now serving their country. And some moved to places where their ability to spy on military activities (had they been inclined to) was greater than in the homes they had left.</p>

<p>Another irony is that at a time when all human and food resources were needed for the war effort, many men and women had to give up their jobs because they were located in prohibited zones. Thus, when large numbers of coastal fishermen could no longer fish, the government poster, &ldquo;Fish is a Fighting Food&#8230;We Need More,&rdquo; encouraged Americans to increase consumption of that which its own policies had caused to be scarce.</p>

<p>Such ironies may evoke a smile now. At the time, the smile was likely to be tinged with disbelief: did the left hand know what the right was doing?</p>

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
  href='/restrictions'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/exclusion'
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

export default Panel4Evacuation;