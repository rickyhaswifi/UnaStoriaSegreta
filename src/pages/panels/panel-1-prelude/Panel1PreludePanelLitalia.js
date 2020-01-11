import React, { Component } from 'react';
import {
  SideBySideMagnifier,GlassMagnifier
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';


import PreImage10 from "../../../components/images/panels/prelude/Prelude-19-cWomen swords.JPG";
import PreImage18a from "../../../components/images/panels/prelude/Prellude-19a-LItalia.jpg";
import PreImage19a from "../../../components/images/panels/prelude/Prelude-19-Panel2a.JPG";
import PreImage19 from "../../../components/images/panels/prelude/Prelude-19-Panel2.JPG";
// IMAGE IMPORTS // 
// END IMPORTS

class Panel1PreludePanelLitalia extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${PreImage19}`,
        HeaderDetails:`<span class='italic'>L’Italia</span> was the Italian American newspaper in San Francisco, and Ettore Patrizi was its editor and publisher. The issue shown here displays a comparison of Italy’s “puny” colony in Africa compared to the huge colonial empire of Great Britain. Patrizi would eventually be accused of being a fascist leader in the West, and excluded from California. The three fencers were students at the Italian School in Fugazi Hall in San Francisco. The school, two other photos of which are on this panel, was considered a fascist training ground and closed with the onset of war. Nella Panelli, who gave us the photo, is the young fencer in the center.`,
      },
    ],
    panelDetail: [
      {
        photo:`${PreImage19a}`,
        info:`Ettore Patrizi, editor and publisher of <span class='italic'>L’Italia</span>, the Italian newspaper of California; the exterior of his San Francisco office is pictured in the bottom photo.`,
      },
      {
        photo:`${PreImage18a}`,
        info:`The August 1935 edition of <span class='italic'>L’Italia</span> depicts the relative amounts of colonial territory held by other European powers compared to Italy’s, to defuse protests about Mussolini’s moves into Africa.

        `,
      },
      {
        photo:`${PreImage10}`,
        info:`Three fencers from the Doposcuola (after-school Italian language school) fencing team at Casa Fugazi in San Francisco’s North Beach. The government closed the school during the war. Nella Panelli, middle, donated these photos.`,
      },
      
    ]
  }
  
  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
  
    <PanelBanner style={{ background: `url(${PreImage19})` }}/>
    <PanelTitle>L'Italia
      <h2>Prelude To War :: Panels</h2>
    </PanelTitle>

    <DetailPanel>
    <Menu pointing secondary widths={4}>
    <Menu.Item
    name='Flags'
    href='/prelude/flags'
    />
    <Menu.Item
    name="L'italia"
    active={'.'}
    href='/prelude/litalia'
    />
    <Menu.Item
    name='Stab In The Back'
    href='/prelude/stab'
    />
    <Menu.Item
    name='War!'
    href='/prelude/war'
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
    <GlassMagnifier 
    imageSrc={pDetail.photo}
    />
     </Grid.Column>

     <Grid.Column>
<Segment color='blue'>
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
    name='Flags'
    href='/prelude/flags'
    />
    <Menu.Item
    name="L'italia"
    active={'.'}
    href='/prelude/litalia'
    />
    <Menu.Item
    name='Stab In The Back'
    href='/prelude/stab'
    />
    <Menu.Item
    name='War!'
    href='/prelude/war'
    />
    </Menu>

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
      
    </DetailPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel1PreludePanelLitalia;