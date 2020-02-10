import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';


// IMAGE IMPORTS // 
import PreImage13 from "../../../components/images/panels/prelude/Prelude-20aPacificWarPeril.jpg";
import PreImage14 from "../../../components/images/panels/prelude/Prelude-21-aMussoNewsweek.jpg";
import PreImage15 from "../../../components/images/panels/prelude/Prelude-21-Panel3.jpg";
import PreImage16 from "../../../components/images/panels/prelude/Prelude-22-IlCorriere.jpg";
import PreImage18 from "../../../components/images/panels/prelude/Prelude-24-SteelRing.jpg";
// END IMPORTS

class Panel1PreludePanelStab extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${PreImage15}`,
        HeaderDetails:`This panel is named for Roosevelt’s statement in 1940 when Italy attacked France: “The hand that held the dagger has thrust it into the back of its neighbor.” Italian Americans resented how it played into the stereotype of Italian immigrants as knife-wielding criminals.
        <br /><br />
        Other items of interest are the copper postcard—bought by Italian Americans and sent to Italy to contribute copper to Italy’s war effort—and the stainless-steel ring worn by Italian immigrant women to replace their gold wedding bands sent to Italy for the same purpose. On the other side of the political spectrum was Carmelo Zito, who, in his newspaper, <span class='italic'>Il Corriere del Popolo</span>, ridiculed and castigated pro-Mussolini organs like <span class='italic'>L’Italia</span>.`,
      },
    ],
    panelDetail: [
      {
        photo:`${PreImage14}`,
        info:`Newsweek’s June 17, 1940 issue transformed Mussolini’s image into that of a ‘backstabber’ who has ‘Unsheathed his sword for the Axis.`,
      },
      {
        photo:`${PreImage16}`,
        info:`Carmelo Zito’s socialist newspaper, <span class='italic'>Il Corriere del Popolo</span>, engaged in running duels with Ettore Patrizi’s more pro-Mussolini <span class='italic'>L’Italia</span>. Zito was a master of ridicule, which he here uses to mock the Italian attempt to put the celebration of Mussolini’s birthday on a par with that of Jesus Christ. Zito would later testify against Patrizi in the Tenney Committee hearings (see next panel and Section 5).`,
      }, 
      {
        photo:`${PreImage13}`,
        info:`Not only does FDR’s use of the back-stabbing image reignite old stereotypes about Italians, it also raised anxieties among Italian Americans that their greatest fear—war by Italian Americans against their cousins in Italy—could be imminent.`,
      },
      {
        photo:`${PreImage18}`,
        info:`The copper postcard and the stainless steel ring were methods Italians urged their American cousins to use to circumvent the U.S. embargo on the export of metals to Italy during the pre-war years. Copper “postcards” could be mailed to Italy while women could substitute stainless steel rings for their gold wedding bands. Both copper and gold could be used in the Italian war effort.`,
      }, 
    ]
  }
  
  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${PreImage15})` }}/>
    <PanelTitle>Stab In The Back
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
    active={'.'}
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
    active={'.'}
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

export default Panel1PreludePanelStab;