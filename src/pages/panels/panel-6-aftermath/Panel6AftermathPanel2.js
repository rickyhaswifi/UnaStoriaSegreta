import React, { Component } from 'react';
import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { Grid, Message, Menu, Icon } from "semantic-ui-react";
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle} from '../../../styled-compoments/PanelContentStyles';

// IMAGE IMPORTS // 
import P19Friends1 from '../../../components/images/panels/aftermath/P19Friends1.jpg'
import P19Friends2 from '../../../components/images/panels/aftermath/P19Friends2.jpg'
import P19Friends3 from '../../../components/images/panels/aftermath/P19Friends3.jpg'
import P19Friends4 from '../../../components/images/panels/aftermath/P19Friends4.jpg'
import P19Friends5 from '../../../components/images/panels/aftermath/P19Friends5.jpg'
import P19Friends6 from '../../../components/images/panels/aftermath/P19Friends6.jpg'
// END IMPORTS

class Panel6AftermathPanel2 extends Component {
  state = {
    panelDetail: [
      {
        photo:`${P19Friends1}`,
        info:`Too dangerous to be at large one moment; friends and allies the next: this was the progression for enemy aliens during the war years. In 1992, the Order Sons of Italy in America tried to get an apology from the U.S. Government for the wartime violations, but was met with general incomprehension and delay.`,
      },
      {
        photo:`${P19Friends2}`,
        info:`The 1990 Social Justice Commission of the Sons of Italy’s resolution asked for both full public disclosure of the injustices suffered by Italo-Americans, and an apology. Neither would be forthcoming, as the Assistant Attorney General in the Civil Rights Division makes clear in his letter—which mainly rehearses the redress given to Japanese Americans, as it compares their situation to the “relatively small number” of Germans and Italians affected. It would take another generation before the Unite States government would even “acknowledge” that these events happened.`,
      },
      {
        photo:`${P19Friends3}`,
        info:`The top document is a copy of the memo Attorney General Biddle ordered to be placed in the files of some internees and excludees. It ends with these words about the designation “potentially dangerous”, in bold letters: THIS CLASSIFICATION IS UNRELIABLE. IT IS HEREBY CANCELED AND SHOULD NOT BE USED AS A DETERMINATION OF DANGEROUSNESS OR OF ANY OTHER FACT.`,
      },
      {
        photo:`${P19Friends4}`,
        info:``,
      },
      {
        photo:`${P19Friends5}`,
        info:``,
      },
      {
        photo:`${P19Friends6}`,
        info:``,
      },
    ]
  }
  

  render() {
    return (
      <>
    <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${P19Friends1})` }}/>
    <PanelTitle>Aftermath :: Panels</PanelTitle>
    <ParaPanel>

    <PanelContentTitle>
    Now We're Friends
    </PanelContentTitle>

    <Menu pointing secondary widths={4}>
    <Menu.Item
    active={'.'}
    name="Restrictions Lifted"
    href='/aftermath/lifted'
    />
    <Menu.Item
    name="Now We're Friends"
    href='/aftermath/friends'
    />
    <Menu.Item
    name='Acknowledgments'
    href='/aftermath/acknowledgments'
    />
    <Menu.Item
    name='Proclamations and Resolutions'
    href='/aftermath/proclamations'
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
      
      <Menu pointing secondary widths={4}>
    <Menu.Item
    active={'.'}
    name="Restrictions Lifted"
    href='/aftermath/lifted'
    />
    <Menu.Item
    name="Now We're Friends"
    href='/aftermath/friends'
    />
    <Menu.Item
    name='Acknowledgments'
    href='/aftermath/acknowledgments'
    />
    <Menu.Item
    name='Proclamations and Resolutions'
    href='/aftermath/proclamations'
    />
    </Menu>

    <Crumbs>
  <CrumbLeft
  href='/exclusion'
  >
  <Icon name='angle left' /> 
  Previous
  </CrumbLeft>

  <CrumbRight
  href='/supplements'
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

export default Panel6AftermathPanel2;