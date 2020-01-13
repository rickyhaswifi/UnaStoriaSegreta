import React, { Component } from 'react';
import {
  SideBySideMagnifier,GlassMagnifier
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import PreImage20 from "../../../components/images/panels/prelude/Prelude-27-Panel4.jpg";
import PreImage22 from "../../../components/images/panels/prelude/Prelude-29-ControlPress.jpg";
// END IMPORTS

class Panel1PreludePanelWar extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${PreImage20}`,
        HeaderDetails:`The War Panel depicts the news on December 7, 1941, when Japanese air and naval forces attacked the United States at Pearl Harbor. President Roosevelt quickly declared war on the Axis powers: on Japan on December 8, and on Germany and Italy on December 11. Two days before Pearl Harbor, on December 5, the <span class='italic'>San Francisco Call Bulletin</span> featured an article reporting on accusations that the Italian-language school in North Beach was dominated by Mussolini, and was <span class='italic'>L’Italia</span>, whose editor, Ettore Patrizi, was pro-fascist. The hearings where these charges were aired were the first phase of the Tenney Committee Hearings that would resume in May (see Panel 15).`,
      },
    ],
    panelDetail: [
      {
        photo:`${PreImage22}`,
        info:`<span class='italic'>San Francisco Call-Bulletin</span> article on the first of the Tenney Committee hearings on the alleged “Un-American Activities in California.” The hearings took place two days before Pearl Harbor, and accused both the Italian language schools and the newspaper, <span class='italic'>L’Italia</span>, of being controlled by Mussolini.`,
      },    
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
  
    <PanelBanner style={{ background: `url(${PreImage20})` }}/>
    <PanelTitle>War!
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
    href='/prelude/litalia'
    />
    <Menu.Item
    name='Stab In The Back'
    href='/prelude/stab'
    />
    <Menu.Item
    name='War!'
    active={'war'}
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
    name='Flags'
    href='/prelude/flags'
    />
    <Menu.Item
    name="L'italia"
    href='/prelude/litalia'
    />
    <Menu.Item
    name='Stab In The Back'
    href='/prelude/stab'
    />
    <Menu.Item
    name='War!'
    active={'war'}
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

export default Panel1PreludePanelWar;