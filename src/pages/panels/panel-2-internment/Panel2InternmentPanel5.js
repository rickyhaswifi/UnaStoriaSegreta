import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P9Deluca1 from '../../../components/images/panels/internment/P9-Deluca-1.jpg'
import P9Deluca2 from '../../../components/images/panels/internment/P9-Deluca-2.jpg'
import P9Deluca3 from '../../../components/images/panels/internment/P9-Deluca-3.jpg'
import P9Deluca4 from '../../../components/images/panels/internment/P9-Deluca-4.jpg'

// END IMPORTS

class Panel2InternmentPanel1 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P9Deluca1}`,
        info:`Pietro DeLuca was not formally interned, but was apprehended in New York and held at Ellis Island for possible internment. His wife wrote to Eleanor Roosevelt, and may have helped secure his release on parole. Ironically, his son, Joe, was kept in Italy during the war because of a similar suspicion of him for having American sympathies.`,
      },
      {
        photo:`${P9Deluca2}`,
        info:`It is not clear if the FBI knew that Pietro DeLuca had fled Italy after his break with the Fascists made his life dangerous there, but they apprehended him after Pearl Harbor and detained him on Ellis Island. Mrs. DeLuca wrote to Eleanor Roosevelt to plead his case, after which DeLuca was paroled on the condition that he study to become an American citizen. His son, Joe, was held hostage in Italy until 1946 when he joined his family in the U.S.`,
      },
      {
        photo:`${P9Deluca3}`,
        info:``,
      },
      {
        photo:`${P9Deluca4}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P9Deluca1})` }}/>
    <PanelTitle>Internment :: Panels
    </PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Deluca
    </PanelContentTitle>

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
    href='/internment/ezio'
    />
    <Menu.Item
    name='Deluca'
    active={'.'}
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
    active={'.'}
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