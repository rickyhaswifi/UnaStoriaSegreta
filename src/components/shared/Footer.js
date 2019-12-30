import React, {Component} from 'react';
import { Grid, Image, Card, Icon, Menu, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {FooterText, FooterMain, FooterContent, FooterSocial, FooterLink} from '../../styled-compoments/FooterStyles';

class Footer extends Component {

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
        <Menu secondary stackable widths={3}>

          <Menu.Item>
            <FooterLink href="/anniversary">20th Anniversary</FooterLink>
          </Menu.Item>

          <Menu.Item>
          <FooterLink href="/supplements/exhibit">Appearances</FooterLink>
          </Menu.Item>

          <Menu.Item>
          <FooterLink href="/contact">About Us / Contact</FooterLink>
          </Menu.Item>
        </Menu>

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