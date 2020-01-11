import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { AllResponsive, MobileOnlyResponse, DeskOnlyResponse } from '../../styled-compoments/ResponsiveStyles';
import { Grid, Button, Modal, Icon, Menu, } from 'semantic-ui-react'
import { OverlayMenu, OvTitle, OvItem, CloseIcon } from "../../styled-compoments/OverlayMenuStyles";
import Slide from 'react-reveal/Slide';

class MenuSidebar extends Component {
  state = { open: false }
  state = { 
    panelNav: [
      {
        title: "Anniversary",
        link: "/anniversary",
      },
      {
        title: "Introduction",
        link: "/intro",
      },
      {
        title: "PRELUDE TO WAR",
        link: "/prelude",
      },
      {
        title: "Internment",
        link: "/internment",
      },
      {
        title: "Restrictions",
        link: "/restrictions",
      },
      {
        title: "Evacuation",
        link: "/evacuation",
      },
      {
        title: "Exclusion",
        link: "/exclusion",
      },
      {
        title: "Aftermath",
        link: "/aftermath",
      },
      {
        title: "Supplements",
        link: "/supplements",
      },
    ],    
   }

  render() {
    const { open, dimmer, } = this.state

    return (
      <>
        <OverlayMenu> 
        <Slide bottom cascade>
          <CloseIcon><Icon name='window close outline' /></CloseIcon>
          <OvTitle
          href='/'
          >
          UNA STORIA SEGRETA
          </OvTitle>
        <Grid columns={2} doubling>
        <Grid.Row>
        <Grid.Column>

          <div className="">
          {this.state.panelNav.map(panelLink => {
            return (
              <article key={`panel-${panelLink.title}`} className="">
          <OvItem
          href={panelLink.link}
          >
          {panelLink.title}
          </OvItem>
          </article>
            );
          })}
        </div>
         
        </Grid.Column>
        <Grid.Column>
        <OvItem
          href='/contact'
          >
          Contact
          </OvItem>
          {/* <OvItem>
          About
          </OvItem>
          <OvItem>
          Donate
          </OvItem> */}
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Slide>
        </OverlayMenu>
      </>
    )
  }
}
 
export default MenuSidebar;
