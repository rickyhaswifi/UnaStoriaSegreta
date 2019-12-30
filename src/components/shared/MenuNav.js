import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { AllResponsive, MobileOnlyResponse, DeskOnlyResponse } from '../../styled-compoments/ResponsiveStyles';
import { Grid, Button, Modal, Icon, Menu, } from 'semantic-ui-react'
import { OverlayMenu, OvTitle, OvItem } from "../../styled-compoments/OverlayMenuStyles";
import Slide from 'react-reveal/Slide';

class MenuNav extends Component {
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

  show = (dimmer) => () => this.setState({dimmer, open: true })
  close = () => this.setState({ open: false })
  
  render() {
    const { open, dimmer, } = this.state

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
About
</Menu.Item>
<Menu.Item>
<Button icon='bars' onClick={this.show('blurring')} inverted color='yellow'/>
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
      <Menu inverted fixed='bottom' borderless icon='labeled' fluid widths={3}>

        <Menu.Item name='home' href='/'>
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item name='bars' onClick={this.show('blurring')}  color='yellow'>
          <Icon name='bars' color='yellow'/>
          Menu
        </Menu.Item>

        <Menu.Item name='quote right' href='/contact'>
          <Icon name='quote right' />
          Contact
        </Menu.Item>

      </Menu>
</DeskOnlyResponse>


{/* MODAL START */}
<Slide bottom>
        <Modal dimmer={dimmer} open={open} onClose={this.close} closeIcon>
        <OverlayMenu> 
        <Slide bottom cascade>
          <OvTitle
          href='/'
          style={{ color: 'var(--primaryText)' }}
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
        </Modal>
        </Slide>
      </>
    )
  }
}
 
export default MenuNav;
