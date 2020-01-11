import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, Quote, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, ViewPanelButton, ViewPanelSection} from '../../../styled-compoments/PanelContentStyles';
import { Icon, Grid } from 'semantic-ui-react'
import HeroMuso from '../../../components/images/panels/prelude/hero-musso.jpg';

class Panel1Prelude extends Component {
  state = {
    panelButton: [
      {
        name:'Flags',
        image:'',
        link:'/prelude/flags',
      },
      {
        name:"L'Italia",
        image:'',
        link:'/prelude/litalia',
      },
      {
        name:'Stab in the Back',
        image:'',
        link:'/prelude/stab',
      },
      {
        name:'War!',
        image:'',
        link:'/prelude/war',
      },
    ]
  }
  render() {
    
    return (
  <>
  <PageContainer>
    <PageWrap>

<PanelBanner style={{ background: `url(${HeroMuso})` }}/>
<PanelTitle>Prelude To War</PanelTitle>
<ParaPanel>

  <p>  
  Benito Mussolini came to power in 1922 with the now-famous march of his blackshirts to Rome. Mussolini made the cover of <span className='italic'>Newsweek</span> after his invasion of France in 1940. Although the American left opposed him from the beginning, he was widely touted in the popular press as a “black-shirted Garibaldi.” The <span className='italic'>fascisti</span> were compared to the Old West’s vigilantes. Even the left-wing <span className='italic'>Nation Magazine</span> ran an article during the 1932 presidential campaign entitled, “Wanted: A Mussolini.”
  </p>

<Quote>
Mussolini unsheathes his sword for axis
</Quote>

  <p>
  This adulation of the “new Columbus” extended through the early thirties. Delegation after delegation went for an audience with the Duce, coming away impressed with his energy, candor, and apparent ability to reshape the Italian character (which Americans were sure needed reshaping). President Roosevelt sent several new cabinet members to learn from Mussolini’s social programs, including government support for the arts and social security. To Italian Americans, this added fuel to their already inflamed hopes: Mussolini was helping them gain the respect of America and Americans they had always lacked.
  </p>


  <p>
  When Italy invaded Ethiopia in 1935, respect changed to widespread revulsion. The expansion of fascism’s dark side by Nazi Germany accelerated this process, especially when Mussolini allied himself with Hitler in 1936. When Italy joined Germany’s invasion of France in June of 1940, President Roosevelt’s condemnation of the Duce as a “jackal” for having struck a “dagger” into “the back of his neighbor” evoked few disclaimers.
  </p>


  <p>  
  The days from June 10, 1940 to December 7, 1941 were filled with anxiety for Italian Americans. Though they conveyed their dismay over FDR’s choice of words, they sensed that the die had been cast. America would sooner or later side with Britain and France to defend what remained of Europe against fascist aggression. Mussolini’s Italy had become in name, if not yet in fact, America’s enemy. Italians and Italian Americans could soon be at war.
  </p>


  <p>  
  It took only a year. The Japanese attack on Pearl Harbor on December 7 destroyed the remaining American reservations about entering the battle. When the President a few days later declared war on Italy, Italian aliens (those immigrants who, for whatever reason, had failed to complete the naturalization process) automatically became “enemy” aliens. They were subject to whatever measures the government deemed necessary to control them.
  </p>

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
  href='/'
  >
  <Icon name='angle left' /> 
  Home
  </CrumbLeft>

  <CrumbRight
  href='/internment'
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

export default Panel1Prelude;