import React, { Component } from 'react';
import {SideBySideMagnifier} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P7Enemy1 from '../../../components/images/panels/internment/P7-Enemy-1.jpg'
import P7Enemy3 from '../../../components/images/panels/internment/P7-Enemy-3.jpg'
import P7Enemy5 from '../../../components/images/panels/internment/P7-Enemy-5.jpg'

// END IMPORTS

class Panel2InternmentPanel3 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P7Enemy1}`,
        HeaderDetails:`This panel, with its poster warning that the ‘enemy’ was always listening, displays various aspects of internees’ lives. The photos depict episodes in the life of San Francisco internee Nereo Francesconi, who hosted an Italian radio program. His son was drafted into the army, and his wife, Lia, took over his radio program. After the war, the now-released Francesconi was asked to take part in various patriotic events. He is shown at bottom in one event with the then-mayor of San Francisco.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P7Enemy3}`,
        info:`This excerpt from Jerre Mangione’s book, Reunion in Sicily, includes a story about an Italian American internee, who had protested his innocence as a 75-year-old with rheumatism and a son in the American army. It did no good. He was only released on parole when news came that his son had been killed in a raid over Italy, and that, therefore, “I couldn’t be very dangerous after all.”`,
      },
      {
        photo:`${P7Enemy5}`,
        info:`This May 5, 1942 memorandum for the Attorney General clearly admits that “persons are at times interned where there is considerable doubt as to whether they are guilty of conduct endangering the nation.” Nonetheless, hundreds (another memo from October 1942 puts the number variously at 228 and 277, though more internments continued after that) were interned for fear of allowing any “potentially dangerous” persons to remain at large. The term “potentially dangerous” was thereafter invalidated as contrary to American law by the Attorney General in a memo to the FBI.”`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${P7Enemy1})` }}/>
    <PanelTitle> Enemy Ears Are Listening
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
    href='/internment/trento'
    />
    <Menu.Item
    name='Enemy Ears Are Listening'
    active={'.'}
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
    href='/internment/trento'
    />
    <Menu.Item
    name='Enemy Ears Are Listening'
    active={'.'}
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

export default Panel2InternmentPanel3;