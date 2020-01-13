import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, Quote, Horizontal, PanelTitle, Crumbs, CrumbLeft, CrumbRight,PanelSub, GalleryContainer, PanelBanner, ViewPanelButton, ViewPanelSection} from '../../../styled-compoments/PanelContentStyles';
import { Icon, Grid } from 'semantic-ui-react'
import HeroCamp from '../../../components/images/panels/internment/camp-hero.jpg';
import Slide from 'react-reveal/Slide'; 

class Panel6Aftermath extends Component {
  state = {
    panelButton: [
      {
        name:"Restrictions Lifted",
        image:'',
        link:'/aftermath/lifted',
      },
      {
        name:"Now We're Friends",
        image:'',
        link:'/aftermath/friends',
      },
      {
        name:"Acknowledgments",
        image:'',
        link:'/aftermath/acknowledgments',
      },
      {
        name:"Proclamations and Resolutions",
        image:'',
        link:'/aftermath/proclamations',
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

  <PanelTitle>Aftermath</PanelTitle>
<ParaPanel>

<p>We call this exhibit <span class='italic'>Una Storia Segreta</span> for two reasons: one, the country, including the government, has never fully acknowledged these events; two, many of the families involved have never wanted to talk about it. Many were humiliated by the treatment of spouses or relatives, and are still angry about it.</p>

<p>More than fifty years later, we are able to prepare this exhibit because of the persistence of a few researchers in probing government archives, and the forthright responses of the families who do want their stories told.</p>

<p>Aside from these sources, surprisingly little has been written. One of the excludees, Remo Bosia, published a book in 1971 about his experiences: <span class='italic'>The General and I</span>. In 1983, the report of the U.S. Commission on Wartime Relocation and Internment included a chapter on German Americans, mentioning Italians only to say that the Justice Department had interned 264 of them. More of the story was filled out with the publication in 1985 of John Christgau&rsquo;s book, <span class='italic'>Enemies: World War II Alien Internment</span>, about German Americans interned in North Dakota, and again in 1990 with Stephen Fox&rsquo;s <span class='italic'>The Unknown Internment: An Oral History of the Relocation of Italian Americans During World War II</span>. Yet, half a century later, the story remains mostly incomplete. Some of the records remain classified, FBI files are censored, and requests for information can wait years for a response.</p>

<p>Recent attempts to obtain some redress for the wartime treatment do show signs of movement. At the 1992 California convention of the Sons of Italy, their Social Justice Commission passed a resolution requesting &ldquo;full public disclosure of the injustices suffered by Italo-Americans during World War II, and&#8230;that apology be made not only to Americans of Italian ancestry, but to the nation as a whole.&rdquo; One man, S. H. Bianchini of Monterey, was responsible for bringing this matter to the attention of the Sons of Italy.</p>

<p>Unfortunately, the response to this resolution from the U.S. Department of Justice addressed only the fact that &ldquo;a relatively small number of ethnic Germans and Italians received individual exclusion orders in contrast to the mass detention of Japanese Americans.&rdquo; Could it be that the current Department of Justice does not even know about the Army-initiated internments and evacuations? And, even if they know, do they not think it important to acknowledge the injustice done to thousands of Italians who had to evacuate their homes in prohibited zones? In Canada, where Italian aliens were also interned, the government issued a public apology in 1990.</p>

<p>A number of initiatives recently begun by other groups in this country also suggest that the time for an Italian American petition is at hand. Interned German Americans have taken their case to the courts. Also preparing a court case are the Japanese Peruvians who, though unjustly and illegally sent to the U.S. to be interned, were not included in the 1988 Civil Liberties Act granting apologies and reparations to the interned Japanese Americans.</p>

<p>That the authorities of the time suspected an injustice is clear. In the FBI files of some Italian internees, researchers have found copies of a July 1943 memo from Attorney General Francis Biddle, declaring his opinion that the Custodial Detention List was &ldquo;invalid;&rdquo; that the evidence used to declare an alien &ldquo;dangerous&rdquo; was inadequate because it lacked evidence of illegal actions; and that the episode was &ldquo;a mistake that should be rectified for the future.&rdquo;</p>

<p>Nevertheless, whenever conflict between the United States and another country erupts, the talk of internment of the nationals involved flares once again. During the Cold War, it was the Russians; then it was the Cubans; and as recently as the 1990 Gulf War, Iraqi Americans were threatened with internment.</p>

<p>It is time America realized what is fundamental to its creed: to condemn one of us on the basis of our origins, national or otherwise, is to condemn us all.</p>

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
  href='/exclusion'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/supplements'
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

export default Panel6Aftermath;