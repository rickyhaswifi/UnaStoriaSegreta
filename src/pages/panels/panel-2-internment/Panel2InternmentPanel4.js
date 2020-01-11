import React, { Component } from 'react';
import {
  SideBySideMagnifier,GlassMagnifier
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon, Segment } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { DetailPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P8Ezio1 from '../../../components/images/panels/internment/P8-Ezio-1.jpg'
import P8Ezio2 from '../../../components/images/panels/internment/P8-Ezio-2.jpg'
import P8Ezio5 from '../../../components/images/panels/internment/P8-Ezio-5.jpg'
import P8Ezio6 from '../../../components/images/panels/internment/P8-Ezio-6.jpg'
import P8Ezio8 from '../../../components/images/panels/internment/P8-Ezio-8.jpg'
// END IMPORTS

class Panel2InternmentPanel4 extends Component {
  state = {
    panelHeader: [
      {
        photopanel:`${P8Ezio1}`,
        HeaderDetails:`Ezio Pinza was the first bass at the Metropolitan Opera when he was informed on by a rival bass. The FBI then apprehended him and imprisoned him at Ellis Island. The singer was formally ordered to be interned after his first hearing, but his wife Doris managed to get him a second hearing, where Pinza cleared himself. Ironically, Pinza, almost interned as a “dangerous” enemy alien, was asked to sing the National Anthem at the parade in New York city celebrating the end of the war. He later became a national celebrity.`,
      },
    ],
    panelDetail: [
      {
        photo:`${P8Ezio6}`,
        info:`Pinza’s apprehension as an enemy alien was reported on the front page of the March 13, 1942 New York Times. The report states that the singer was due to go on a long concert tour the following week. He had earlier registered as an ‘enemy alien’ and was required to carry the Certificate of Identification shown above.`,
      },
      {
        photo:`${P8Ezio5}`,
        info:`Pinza’s release on parole after eleven weeks in confinement as was reported in the June 8 New York Times. His parole order is shown at the top, as well statements from three of his famous supporters: Thomas Mann, Bruno Walter, and Carlo Tresca.`,
      },
      {
        photo:`${P8Ezio2}`,
        info:`Pinza became a national icon when he starred with Mary Martin in the smash Broadway hit, South Pacific. His hit song, “Some Enchanted Evening,” led the Hit Parade for weeks.`,
      },
      {
        photo:`${P8Ezio8}`,
        info:`The once-dangerous enemy alien is shown here (far right) with several celebrities feted by President Dwight Eisenhower, who signed the photograph “For Ezio Pinza, With best wishes, Dwight Eisenhower".`,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>

    <PanelBanner style={{ background: `url(${P8Ezio1})` }}/>
    <PanelTitle>Ezio Pinza
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
    href='/internment/ears'
    />
    <Menu.Item
    name='Ezio Pinza'
    active={'.'}
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
    href='/internment/ears'
    />
    <Menu.Item
    name='Ezio Pinza'
    active={'.'}
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

export default Panel2InternmentPanel4;