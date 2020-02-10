import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner,} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P6Sup1 from '../../../components/images/panels/supplement/P6Sup1.jpg';
import P6Sup2 from '../../../components/images/panels/supplement/P6Sup2.jpg';
import P6Sup3 from '../../../components/images/panels/supplement/P6Sup3.jpg';
import P6Sup4 from '../../../components/images/panels/supplement/P6Sup4.jpg';
// END IMPORTS

class Panel7SupplementsPanel6 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P6Sup1}`,
        info:`This copy of the <span class='italic'>San Francisco Call Bulletin</span>, part of the War Panel in Section One, features the article claiming that the Italian language schools and the Italian Press were dominated by Mussolini, and that Ettore Patrizi, editor of <span class='italic'>L’Italia</span> was pro-fascist. The hearings were the first phase of the Tenney Committee Hearings that would resume in May, and result in exclusion orders for Patrizi and dozens of other naturalized citizens.`,
      },
      {
        photo:`${P6Sup2}`,
        info:`The <span class='italic'>San Francisco News</span> of May 26, 1942 highlighted the emotional testimony from sitting Mayor Angelo Rossi in denying the charges made against him at the Tenney Committee hearings days earlier. The public charges were so politically damaging that Rossi never held office again.`,
      },
      {
        photo:`${P6Sup3}`,
        info:`Colonel Angelo Guttadauro wrote this letter to the Commission on Wartime Relocation and Internment in 1981, attesting to the devastating effects suffered by his father because of his exclusion from military zones during WWII. Colonel Guttadauro was the only Italian American to testify at the hearings.`,
      },
      {
        photo:`${P6Sup4}`,
        info:`In August of 1943, the Attorney General commissioned a report on the Army’s Individual Exclusion Program—which he disagreed with. The Preliminary Report, cited here, comprised a stunning rebuke of the entire rationale for the program. The last paragraph in section 1, above, is stunningly direct in its criticism of the term “potentially dangerous” used to justify exclusion: <span class='italic'>Practically, the use of phrases such as this suggests that those who use them hold the view that a subject of an exclusion case must be excluded unless it is clear that there is no reason to exclude him. This is analogous to saying that the burden of proof is on the excludee, although the excludee, of course, cannot meet the burden, since he is not advised of the charges against him.</span>`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P6Sup2})` }}/>
    <PanelTitle>Photos & Documents #6
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
    active={'.'}
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
    active={'.'}
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

export default Panel7SupplementsPanel6;