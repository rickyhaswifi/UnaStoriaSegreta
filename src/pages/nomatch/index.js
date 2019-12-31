import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PageContainer, PageWrap} from '../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, PanelBanner, PanelContentTitle} from '../../styled-compoments/PanelContentStyles';
import { Icon, Button } from 'semantic-ui-react'
import HeroSup from '../../components/images/panels/supplement/P7Sup1.jpg';

class NoMatch extends Component {
  render() {
    return(
      <>
      <PageContainer>
        <PageWrap>
        <PanelBanner style={{ background: `url(${HeroSup})` }}/>
      <PanelTitle>404</PanelTitle>
    <ParaPanel>
          <PanelContentTitle>
            Return Home
          </PanelContentTitle>
          <p>
          Content was not found, please return home
          </p>
          
          <Link to='/'>
          <Button animated color='yellow' size='huge'>
          <Button.Content visible style={{color:'white'}}>Home</Button.Content>
          <Button.Content hidden style={{textAlign:'center'}}>
          <Icon name='angle double right' />
          </Button.Content>
          </Button>
          </Link>

    </ParaPanel>
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}
  
export default NoMatch;