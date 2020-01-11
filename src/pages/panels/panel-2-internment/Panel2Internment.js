import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, Quote, Horizontal, PanelTitle, Crumbs, CrumbLeft, CrumbRight,PanelSub, GalleryContainer, PanelBanner, ViewPanelButton, ViewPanelSection} from '../../../styled-compoments/PanelContentStyles';
import { Icon, Grid } from 'semantic-ui-react'
import HeroCamp from '../../../components/images/panels/internment/camp-hero.jpg';

class Panel2Internment extends Component {
  state = {
    panelButton: [
      {
        name:"Don't Fence Me In",
        image:'',
        link:'/internment/fence',
      },
      {
        name:'Trento',
        image:'',
        link:'/internment/trento',
      },
      {
        name:'Enemy Ears Are Listening',
        image:'',
        link:'/internment/ears',
      },
      {
        name:'Ezio Pinza',
        image:'',
        link:'/internment/ezio',
      },
      {
        name:'Deluca',
        image:'',
        link:'/internment/deluca',
      },
    ]
  }
  render() {
    
    return (
  <>
  <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${HeroCamp})` }}/>
  <PanelTitle>Internment</PanelTitle>
<ParaPanel>

<p>Beginning on the night of December 7, 1941, Japanese, German and Italian aliens were arrested by the FBI. How could this happen? The U.S. had not declared war by that date.</p>

<p>The story actually begins in September 1939, when Britain and France declared war against the Axis nations of Germany and Italy (later to include Japan). President Roosevelt at that time asked FBI Director Hoover to compile a list of persons to be arrested in case of a national emergency.</p>

<Quote>
By June of 1942, the total reached 1,521 Italian aliens apprehended by the FBI
</Quote>

<p>Names placed on this Custodial Detention Index eventually included pro-communists, anti-fascists, pro-fascists, pro-Nazis, and even some Jewish refugees.</p>

<p>The authority for these arrests came from Title 50 of the U.S. Code, based on the 1798 Alien &amp; Sedition Acts, which gives the government power to detain aliens in times of emergency. Under this authority, hundreds of Italian immigrants were apprehended in the months immediately after Pearl Harbor. Upwards of 250-300 individuals were interned for up to two years in military camps in Montana, Oklahoma, Tennessee, Maryland, and Texas. By June of 1942, the total reached 1,521 Italian aliens apprehended by the FBI, many for curfew violations alone. Though most of the latter were released after relatively short periods of detention, the effects on them and others in the community are not hard to imagine.</p>

<p>The apprehension and internment procedure in San Francisco followed this pattern: FBI officers arrived at night, searched the home, and took the individual to an Immigration Service detention facility at Silver and Yale Avenues. The family was not informed why the arrest was made or what would happen.</p>

<p>Those apprehended were sometimes moved to another detention facility at Sharp Park (now in the city of Pacifica) where Quonset huts had been hurriedly set up on a golf course. Some were held there for as long as one year. Later, Italian prisoners of war were also held at this Sharp Park facility.</p>

<p>Most of the West Coast detainees were then shipped by train to Fort Missoula, Montana, where over 1,000 Italian nationals had been interned since May, 1941. These Italians were merchant marines whose ships had been impounded at Atlantic ports after the European war began in 1939.</p>

<p>In Montana, the detained aliens were given pro forma hearings before boards consisting of military officers and prominent citizens. Such hearings were normally held in the locale of the detainee, except in these cases due to the insistence of Gen. John DeWitt that &ldquo;dangerous aliens&rdquo; be shipped out of his West Coast military zone immediately. At the hearings, the detainees were not informed of the charges against them (there were none), nor were they represented by legal counsel. The information before the boards consisted entirely of FBI reports. Researchers have often noted, on examining FBI files, the many errors, misinterpretations of innocent acts, and the lack of rumor verification&mdash;all of which are found in these files. The result of the hearings (boards could either recommend internment, release on parole, or outright release) were then sent to the Department of Justice for evaluation. The recommendations by these boards seemed to have little influence, for most detainees were sooner or later given a formal Order of Internment signed by the Attorney General. This resulted in their transfer to one of the dozens of internment camps at Army bases, mostly in the South. It was here that internees were formally processed for internment and a Basic Personnel Record (see photo inset) generated.</p>

<p>Many if not most of the San Francisco internees were members of the <span class='italic'>Ex-Combattenti</span>, the Federation of Italian War Veterans in America. Veterans of World War I (when Italy and America were allies), they were apparently singled out because the group was on the FBI list of &ldquo;dangerous&rdquo; organizations. During the 1930s, the veterans&rsquo; main project had been collecting and distributing funds for war widows and orphans in Italy. By 1941, the State Department had decided that the receiving agencies in Italy were &ldquo;too closely identified&rdquo; with the Italian Government; continued disbursal of monies to the <span class='italic'>Associazione Nazionale Famiglie dei Caduti in Guerra</span> (National Association for Families of War Dead) and various Community Welfare Funds was a violation of the 1939 U.S. Neutrality Act. The FBI then began surveillance of individual members. FBI files do not, however, reveal any illegal or &ldquo;subversive&rdquo; activities. In fact, some <span class='italic'>Ex-Combattenti</span> who were openly anti-fascist, or, at most apolitical, were interned.</p>

<p>Italy&rsquo;s surrender on September 8, 1943 soon brought about the release of most of the Italian American internees by year&rsquo;s end. Some had been paroled months earlier after &ldquo;exoneration&rdquo; by a second hearing board appealed for by their families. Nonetheless, most of the men had spent two years as prisoners, moving from camp to camp every three to four months, and ending back in Missoula in May of 1943. Neither they nor their families would ever forget it.</p>

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
  href='/restrictions'
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

export default Panel2Internment;