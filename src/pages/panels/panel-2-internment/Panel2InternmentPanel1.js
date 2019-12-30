import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P5Fence1 from '../../../components/images/panels/internment/P5-Fence-1.jpg'
import P5Fence2 from '../../../components/images/panels/internment/P5-Fence-2.jpg'
import P5Fence3 from '../../../components/images/panels/internment/P5-Fence-3.jpg'
import P5Fence4 from '../../../components/images/panels/internment/P5-Fence-4.jpg'
import P5Fence5 from '../../../components/images/panels/internment/P5-Fence-5.jpg'
import P5Fence6 from '../../../components/images/panels/internment/P5-Fence-6.jpg'
import P5Fence7 from '../../../components/images/panels/internment/P5-Fence-7.jpg'

// END IMPORTS

class Panel2InternmentPanel1 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P5Fence1}`,
        info:`“Don’t Fence Me In,” was a popular 1934 song by Cole Porter that captures the spirit of the internment camps. Featured are two photos of the internment camp at Missoula, MT, a photo of a Quonset hut in the detention center at Sharp Park south of San Francisco where some internees were detained pending their internment, and a letter by Filippo Molinari describing his apprehension and first frigid days in the camp at Missoula.`,
      },
      {
        photo:`${P5Fence2}`,
        info:`The December 10, 1941 Oakland Tribune headlines the FBI’s seizure of enemy aliens who were considered “potentially dangerous,” many of whom were headed for internment. The quote by Roosevelt, “I don’t care so much about the Italians; they’re a lot of opera singers,” made to Attorney General Biddle, indicates that though Italians were considered dangerous enough to intern, they were also treated with some contempt by American authorities.`,
      },
      {
        photo:`${P5Fence3}`,
        info:`Top photo shows the San Francisco detention center where enemy aliens were held pending their hearings. If ordered interned by the Attorney General, they were then sent to internment camps, like the one in Missoula, MT that Filippo Molinari’s letter describes.`,
      },
      {
        photo:`${P5Fence4}`,
        info:``,
      },
      {
        photo:`${P5Fence5}`,
        info:``,
      },
      {
        photo:`${P5Fence6}`,
        info:``,
      },
      {
        photo:`${P5Fence7}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P5Fence1})` }}/>
    <PanelTitle>Internment :: Panels
    </PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Don't Fence Me In
    </PanelContentTitle>

    <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Don't Fence Me In"
    active={'.'}
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
    href='/internment/ezio'
    />
    <Menu.Item
    name='Deluca'
    href='/internment/deluca'
    />
    </Menu>

    <Message info>
    <Message.Header>
    Hover Images to see details
    </Message.Header>
    </Message>

      {this.state.panelDetail.map(pDetail => {
      return (
      <section key={`${pDetail.id}`} className="">

      <Grid doubling stackable>
        <Grid.Row>
          <Grid.Column>
          <SideBySideMagnifier 
          alwaysInPlace='false'
          imageSrc={pDetail.photo}
          largeImageSrc={pDetail.photo} 
          overlayOpacity={0.5}
          />
          <p>
          {pDetail.info}
          </p>
          </Grid.Column>

        </Grid.Row>
      </Grid>

      </section>
            );
          })}
      
      <Menu pointing secondary widths={5}>
    <Menu.Item
    name="Don't Fence Me In"
    active={'.'}
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

    </ParaPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel2InternmentPanel1;