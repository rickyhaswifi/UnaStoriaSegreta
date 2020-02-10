import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight,PanelBanner, ViewPanelButton, ViewPanelSection} from '../../../styled-compoments/PanelContentStyles';
import { Icon, Grid } from 'semantic-ui-react'
import HeroCamp from '../../../components/images/panels/internment/camp-hero.jpg';
import Slide from 'react-reveal/Slide'; 

class Panel5Exclusion extends Component {
  state = {
    panelButton: [
      {
        name:"Tenney Committee",
        image:'',
        link:'/exclusion/tenney',
      },
      {
        name:"Guttadauro & Bosia",
        image:'',
        link:'/exclusion/guttadauro',
      },

    ]
  }
render() {

return (
<>
<PageContainer>
<PageWrap>

<PanelBanner style={{ background: `url(${HeroCamp})` }}/>
<Slide bottom>

  <PanelTitle>Exclusion</PanelTitle>
<ParaPanel>

<p>The Western Defense Commander, Lt. General John L. DeWitt, wanted to remove not only aliens, but also naturalized citizens from the &ldquo;sensitive&rdquo; military zones along the Pacific Coast. He succeeded in removing even American-born Japanese Americans. However, after much debate and no little confusion for those concerned, Washington, particularly the Attorney General and the President, decided against removing Italians and Germans. The logistics, not to mention the political and economic repercussions, were too formidable. Nonetheless, DeWitt won a small victory when he was allowed to initiate an Individual Exclusion Program for the naturalized citizens he considered &ldquo;potentially dangerous.&rdquo;</p>

<p>In the Fall of 1942&mdash;after the Italians had been removed from the enemy alien classification&mdash;254 Italian and German naturalized citizens received exclusion orders. These orders gave them ten days to move out of the designated zones in coastal areas. Most were German and Italian immigrants and West Coast residents, but some lived on the eastern and southern coasts of the United States.</p>

<p>In San Francisco, about two dozen Italian Americans, both men and women, were excluded. They were community leaders, Italian-language school instructors, staff of the pro-Mussolini Italian-language newspaper, <span class='italic'>L&rsquo;Italia</span>, and members of the Italian War veterans. Most were long-time residents of the city and had been naturalized for many years.</p>

<p>What led to the selection of these specific individuals for exclusion? The community leaders and <span class='italic'>L&rsquo;Italia</span> staff had been named as pro-fascist by witnesses before the State Assembly&rsquo;s UnAmerican Activities Committee at hearings held in San Francisco in May of 1942. The hearings were held in the Borgia Room of the St. Francis Hotel, the irony of which none of the senators seemed to recognize. The Tenney Committee&mdash;named after its chair, state Assemblyman Jack Tenney&mdash;concluded, after four days of testimony, that three community leaders, Sylvester Andriano, Ettore Patrizi, and Renzo Turco, were &ldquo;the leaders of the Fascist movement in California.&rdquo; They further concluded that Patrizi&rsquo;s newspaper, <span class='italic'>L&rsquo;Italia</span>, and the Italian-language school, DopoScuola, were centers of Fascist propaganda. Some of these names had previously been brought to the attention of the FBI, but it had made no arrests of any naturalized citizens.</p>

<p>In September the Army acted. It held individual hearings similar to those for the internees&mdash;no charges were provided, no legal counsel was allowed. Then it served exclusion orders on those selected, commanding each individual to move out of Military Zones 1 and 2, which covered about two-thirds of California. Ettore Patrizi, 77 years old and a U.S. resident and naturalized citizen since 1899, received his exclusion order while hospitalized. Andriano and Turco, both attorneys, had to vacate their homes and law offices, and were unable to practice law where they relocated. Nino Guttadauro, president of the Italian War Veterans and business manager of the Crab Fishermen&rsquo;s Association, left San Francisco to find work and housing for his family, which he eventually found in Reno, Nevada, the nearest city with available jobs.</p>

<p>These moves took place in October 1942, just before the Government announced that Italians were no longer &ldquo;enemy aliens.&rdquo; That did not change the status of the allegedly &ldquo;dangerous&rdquo; aliens who had been interned earlier, nor of these &ldquo;potentially dangerous&rdquo; naturalized citizens who had now been excluded.</p>

<p>Most excludees were allowed to return to their homes at the end of 1943, following Italy&rsquo;s surrender in September. They had spent about fifteen months in exile, and had been reporting regularly to the FBI in cities like Reno or Chicago where they had relocated. Why the exclusion was necessary, and why the FBI could not have kept them under surveillance in their own homes, has never been explained. After all, by October of 1942, invasion fears had greatly lessened; and, as a Justice Department report on the Exclusion program noted, opportunities for sabotage were just as great, if not greater, in areas of the nation to which excludees moved. The same questions arise regarding those aliens evacuated from the West Coast. More than a few&mdash;Angelina Bruno of Pittsburg was one&mdash;had moved to houses overlooking Army bases, where espionage would have been a real possibility. It seemed not to matter. Neither did the fact that a large proportion of the Pittsburg evacuees were older women and a few men too old to fish. Were such people a threat? Were such lives disrupted to any good purpose?</p>

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
  href='/evacuation'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/aftermath'
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

export default Panel5Exclusion;