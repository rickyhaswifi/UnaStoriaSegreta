import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P6Trento1 from '../../../components/images/panels/internment/P6-Trento-1.jpg'
import P6Trento2 from '../../../components/images/panels/internment/P6-Trento-2.jpg'
import P6Trento3 from '../../../components/images/panels/internment/P6-Trento-3.jpg'
import P6Trento4 from '../../../components/images/panels/internment/P6-Trento-4.jpg'
import P6Trento5 from '../../../components/images/panels/internment/P6-Trento-5.jpg'
// END IMPORTS

class Panel2InternmentPanel1 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P6Trento1}`,
        info:`Guido Trento was a Hollywood actor from San Francisco who was interned. He was sent to Missoula in December and, after being moved to several Army-run camps in the South, returned to Missoula where he remained until Fall 1943. His wife’s letters seeking to understand why he was interned are important documents in understanding internment.`,
      },
      {
        photo:`${P6Trento2}`,
        info:`Excerpts from Trento’s hearing bear on the reason for his internment—that he had never applied for American citizenship after 18 years in the United States, which the hearing board found reason enough to recommend internment. But in this excerpt, he explains that he never applied because of his fear about not speaking English well enough to ask or answer questions.`,
      },
      {
        photo:`${P6Trento3}`,
        info:``,
      },
      {
        photo:`${P6Trento4}`,
        info:``,
      },
      {
        photo:`${P6Trento5}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P6Trento1})` }}/>
    <PanelTitle>Internment :: Panels
    </PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Trento
    </PanelContentTitle>

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

    </ParaPanel>
          
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}

export default Panel2InternmentPanel1;