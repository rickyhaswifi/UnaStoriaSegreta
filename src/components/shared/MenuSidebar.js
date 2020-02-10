import React, { Component } from 'react';
import { Icon, } from 'semantic-ui-react'
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
    const { close } = this.props

    return (
      <>
        <OverlayMenu> 
          <Slide bottom cascade>
          <CloseIcon><Icon name='window close outline'
          onClick={close}
          /></CloseIcon>
          <OvTitle
          href='/'
          >
          UNA STORIA SEGRETA
          </OvTitle>

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
        
        <OvItem
          href='/contact'
          >
          Contact
          </OvItem>
          </Slide>
        </OverlayMenu>

      </>
    )
  }
}
 
export default MenuSidebar;
