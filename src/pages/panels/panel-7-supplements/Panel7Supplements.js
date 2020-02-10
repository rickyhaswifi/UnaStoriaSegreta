import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, ViewPanelButton, ViewPanelSection} from '../../../styled-compoments/PanelContentStyles';
import { Icon, Grid } from 'semantic-ui-react'
import HeroCamp from '../../../components/images/panels/internment/camp-hero.jpg';
import Slide from 'react-reveal/Slide'; 

class Panel7Supplements extends Component {
  state = {
    panelButton: [
      {
        name:"Page 1",
        image:'',
        link:'/supplements',
      },
      {
        name:"Page 2",
        image:'',
        link:'/supplements/2',
      },
      {
        name:"Page 3",
        image:'',
        link:'/supplements/3',
      },
      {
        name:"Page 4",
        image:'',
        link:'/supplements/4',
      },
      {
        name:"Page 5",
        image:'',
        link:'/supplements/5',
      },
      {
        name:"Page 6",
        image:'',
        link:'/supplements/6',
      },
      {
        name:"Page 7",
        image:'',
        link:'/supplements/7',
      },
      {
        name:"Exhibit Appearances",
        image:'',
        link:'/supplements/exhibit',
      },
      {
        name:"Bibliography",
        image:'',
        link:'/supplements/bibliography',
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

  <PanelTitle>Supplemental Photos & Documents</PanelTitle>
<ParaPanel>

<p></p>

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
  href='/'
  >
  Home
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

export default Panel7Supplements;