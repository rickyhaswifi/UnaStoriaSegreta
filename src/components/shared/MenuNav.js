import React, { Component } from 'react';
import { MobileOnlyResponse, DeskOnlyResponse, FixMobile } from '../../styled-compoments/ResponsiveStyles';
import { Button, Icon, Menu, } from 'semantic-ui-react'
import {  OvTitle } from "../../styled-compoments/OverlayMenuStyles";

class MenuNav extends Component {
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
    const {toggleSidebar} = this.props

    return (
      <>
{/* DESKTOP HEADER */}
<MobileOnlyResponse>
<Menu inverted fixed='top' borderless>
<Menu.Item>
<OvTitle href='/' color='white'>
UNA STORIA SEGRETA
</OvTitle>
</Menu.Item>

<Menu.Menu position='right'>

<Menu.Item>
<Button
onClick={toggleSidebar}
 inverted color='yellow'>
  MENU
  </Button>
</Menu.Item>
</Menu.Menu>
</Menu>
</MobileOnlyResponse>

{/* MOBILE HEADER */}
<DeskOnlyResponse>
<Menu inverted fixed='top' borderless fluid widths={1}>
<Menu.Item>
<OvTitle href='/' color='white'>
UNA STORIA SEGRETA
</OvTitle>
</Menu.Item>

</Menu>
</DeskOnlyResponse>


{/* MOBILE ONLY BOTTOM */}
<DeskOnlyResponse>
  <FixMobile>
      <Menu 
      
      inverted 
      fixed='bottom'
       borderless icon='labeled' 
       fluid widths={3}>

        <Menu.Item name='home' href='/'>
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item name='bars' 
         onClick={toggleSidebar}  
        color='yellow'>
          <Icon name='bars' color='yellow'/>
          Menu
        </Menu.Item>

        <Menu.Item name='quote right' href='/contact'>
          <Icon name='quote right' />
          Contact
        </Menu.Item>

      </Menu>
  </FixMobile>
</DeskOnlyResponse>

      </>
    )
  }
}
 
export default MenuNav;
