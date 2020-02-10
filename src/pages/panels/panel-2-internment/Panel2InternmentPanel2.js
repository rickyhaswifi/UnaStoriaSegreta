import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P6Trento1 from '../../../components/images/panels/internment/P6-Trento-1.jpg'
import P6Trento4 from '../../../components/images/panels/internment/P6-Trento-4.jpg'
import P6Trento5 from '../../../components/images/panels/internment/P6-Trento-5.jpg'
// END IMPORTS

class Panel2InternmentPanel2 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P6Trento1}`,
        HeaderDetails:`Guido Trento was a Hollywood actor from San Francisco who was interned. He was sent to Missoula in December and, after being moved to several Army-run camps in the South, returned to Missoula where he remained until Fall 1943. His wife’s letters seeking to understand why he was interned are important documents in understanding internment.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P6Trento5}`,
        info:`Excerpts from Trento’s hearing bear on the reason for his internment—that he had never applied for American citizenship after 18 years in the United States, which the hearing board found reason enough to recommend internment. But in this excerpt, he explains that he never applied because of his fear about not speaking English well enough to ask or answer questions.`,
      },
      {
        photo:`${P6Trento4}`,
        info:`Guido and Olga Trento’s residence in 1941, at 1447 Greenwich St., San Francisco`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${P6Trento1})` }}/>
    <PanelTitle>Trento
      <h2>Internment :: Panels</h2>
    </PanelTitle>

    <DetailPanel>

    <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Don't Fence Me In"
    href='/internment/fence'
    />
    <Menu.Item
    name='Trento'
    active={'.'}
    href='/internment/trento'
    />
    <Menu.Item
    name='Enemy Ears Are Listening'
    href='/internment/ears'
    />
    <Menu.Item
    name='Ezio Pinza'
    href='/internment/ezio'
    />
    <Menu.Item
    name='Deluca'
    href='/internment/deluca'
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
      
    <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Don't Fence Me In"
    href='/internment/fence'
    />
    <Menu.Item
    name='Trento'
    active={'.'}
    href='/internment/trento'
    />
    <Menu.Item
    name='Enemy Ears Are Listening'
    href='/internment/ears'
    />
    <Menu.Item
    name='Ezio Pinza'
    href='/internment/ezio'
    />
    <Menu.Item
    name='Deluca'
    href='/internment/deluca'
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

export default Panel2InternmentPanel2;