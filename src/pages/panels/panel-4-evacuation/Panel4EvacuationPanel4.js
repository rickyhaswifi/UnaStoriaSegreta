import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P15Evacuation1 from '../../../components/images/panels/evacuation/P15Evacuation1.jpg'
import P15Evacuation2 from '../../../components/images/panels/evacuation/P15Evacuation2.jpg'
import P15Evacuation3 from '../../../components/images/panels/evacuation/P15Evacuation3.jpg'
import P15Evacuation4 from '../../../components/images/panels/evacuation/P15Evacuation6.jpg'
// END IMPORTS

class Panel4EvacuationPanel4 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P15Evacuation1}`,
        HeaderDetails:`Though this panel seems to indicate that Executive Order 9066 (issued Feb. 19, 1942) was the authority relied on for the evacuation of enemy aliens from prohibited zones, in fact, the authority already existed in the earlier EO 2527 issued by President Roosevelt on December 8, 1941. The panel also shows that plans for expanding the evacuation to East Coast aliens and perhaps even extending the Japanese internment to Germans and Italians were contemplated. In the excerpt from the proceedings of a U.S. Senate panel, Senator Hiram Johnson says specifically that “the same thing is going to have to be done on the East Coast.” Plans for both expansions were eventually halted by the President, however, due to the huge numbers that would have to be moved.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P15Evacuation2}`,
        info:`This cartoon, from the May 28, 1942 <span class='italic'>San Francisco Chronicle</span>, suggests that Italian and German enemy aliens are spies and should be the next groups interned, like the already-moved Japanese.`,
      },
      {
        photo:`${P15Evacuation3}`,
        info:`Several documents attest to the mounting hysteria regarding enemy aliens and the need to control them. Articles in the <span class='italic'>San Francisco Chronicle</span> predict that thousands of aliens in California would soon be interned or moved away from places where they might do damage. The excerpt from the Senate hearings indicates that similar fears and plans to combat them are contemplated for the East Coast.`,
      },
      {
        photo:`${P15Evacuation4}`,
        info:`This story in the <span class='italic'>San Francisco Chronicle</span> in late February suggests that all enemy aliens, including those of German and Italian extraction, would soon be moved to camps east of the Sierra Nevada mountains. `,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P15Evacuation1})` }}/>
    <PanelTitle>Evacuation
      <h2>Evacuation :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    name="Pittsburg"
    href='/evacuations/pittsburg'
    />
    <Menu.Item
    name='Abono & Suicides'
    href='/evacuations/abono'
    />
    <Menu.Item
    name="Fighting Food"
    href='/evacuations/fishing'
    />
    <Menu.Item
    active={'.'}
    name="Evacuation"
    href='/evacuations/evacuation'
    />
    </Menu>

    <Message info>
    <Message.Header>
    <Icon name='info circle'/>Hover panel to see details
    </Message.Header>
    </Message>
<section>
    {this.state.panelHeader.map(pHeader => {
    return (
    <section key={`${pHeader.id}`}>
    <SideBySideMagnifier 
    alwaysInPlace='false'
    imageSrc={pHeader.photopanel}
    largeImageSrc={pHeader.photopanel} 
    overlayOpacity={0.5}
    />
    <Segment>
    <div dangerouslySetInnerHTML={{__html: pHeader.HeaderDetails}}/>
    </Segment>
      </section>
            );
          })}
</section>

<PanelContentTitle>
  Panel Details
</PanelContentTitle>

<Message info>
<Message.Header>
<Icon name='magnify'/>Hover image to see details
</Message.Header>
</Message>

    {/* END HEADER LOOP START DETAILS */}
    {this.state.panelDetail.map(pDetail => {
    return (
    <section key={`${pDetail.id}`}>
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
      
      <Menu pointing secondary widths={4}>
      <Menu.Item
      name="Pittsburg"
      href='/evacuations/pittsburg'
      />
      <Menu.Item
      name='Abono & Suicides'
      href='/evacuations/abono'
      />
      <Menu.Item
      name="Fighting Food"
      href='/evacuations/fishing'
      />
      <Menu.Item
      active={'.'}
      name="Evacuation"
      href='/evacuations/evacuation'
      />
      </Menu>

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

    </DetailPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel4EvacuationPanel4;