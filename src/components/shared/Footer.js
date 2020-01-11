import React, {Component} from 'react';
import { Grid, Card, Icon, Menu, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {FooterText, FooterMain, FooterContent, FooterSocial, FooterLink} from '../../styled-compoments/FooterStyles';

class Footer extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getFullYear().toLocaleString().split(",")
    };
  }

  render(){
    return(
    <>
      <FooterMain>
        <FooterContent>
      
        <Menu pointing secondary inverted widths={5} stackable>
          <Menu.Item>
            <FooterLink href="/anniversary">20th Anniversary</FooterLink>
          </Menu.Item>

          <Menu.Item>
            <FooterLink href="/intro">Introduction</FooterLink>
          </Menu.Item>

          <Menu.Item>
            <FooterLink href="/prelude">Prelude To War</FooterLink>
          </Menu.Item>

          <Menu.Item>
            <FooterLink href="/internment">Internment</FooterLink>
          </Menu.Item>

          <Menu.Item>
            <FooterLink href="/restrictions">Restrictions</FooterLink>
          </Menu.Item>
        </Menu>
  
        <Menu  pointing secondary inverted widths={5} stackable>
        <Menu.Item>
          <FooterLink href="/evacuation">Evacuation</FooterLink>
          </Menu.Item>

        <Menu.Item>
          <FooterLink href="/exclusion">Exclusion</FooterLink>
          </Menu.Item>

        <Menu.Item>
          <FooterLink href="/Aftermath">Aftermath</FooterLink>
          </Menu.Item>

        <Menu.Item>
          <FooterLink href="/supplements/exhibit">Appearances</FooterLink>
          </Menu.Item>

          <Menu.Item>
          <FooterLink href="/contact">About Us / Contact</FooterLink>
          </Menu.Item>
        </Menu>

        <hr />

        <FooterText>
        <FooterSocial>
        <Icon name='facebook' size='big' />
        </FooterSocial>
        <FooterSocial>
        <Icon name='instagram' size='big' />
        </FooterSocial>
        <FooterSocial>
        <Icon name='twitter' size='big' />   
        </FooterSocial>
        </FooterText>
        
        <FooterText>
        &copy; {this.state.date} Una Storia Segreta. All rights reserved.
        </FooterText>
        </FooterContent>
      </FooterMain>
    </>
    )
  }
}


export default Footer;