import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle, Quote} from '../../styled-compoments/PanelContentStyles';
import { Grid, Form, Icon, Button, TextArea, Card } from 'semantic-ui-react'
import HeroSup from '../../components/images/panels/supplement/P7Sup1.jpg';
import Slide from 'react-reveal/Slide'; 

class Contact extends Component {
  render() {
    return(
      <>
      <PageContainer>
        <PageWrap>
        <PanelBanner style={{ background: `url(${HeroSup})` }}/>
        <Slide bottom>
      <PanelTitle>Contact Us</PanelTitle>
    <ParaPanel>
          <PanelContentTitle>
            About Us...
          </PanelContentTitle>
          <p>
          On February 24, 1994, the exhibit <span className='italic'>Una Storia Segreta: When Italian Americans Were ‘Enemy Aliens’</span> opened at the Museo Italo Americano in San Francisco. The opening on February 24 memorialized the date in 1942 when enemy aliens of Italian descent living in recently-designated “prohibited zones” on the West Coast had to leave their homes and businesses in those zones and move elsewhere. For the first time, any viewer with access to the internet can see in detail this pathbreaking exhibit that changed the accepted narrative of WWII on the home front.
          </p>
    <Grid doubling stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
        <PanelContentTitle>Donate</PanelContentTitle>
        <Card fluid style={{padding: '1em'}}>   
        <p>
          Support Una Storia Segreta with your financial donation. 
        </p>
        <Button.Group size='large' color='blue'>
      

     <Button animated='vertical'>
      <Button.Content visible>
      <Icon name='cc paypal' size='medium'/>
      </Button.Content>
      <Button.Content hidden>
        <Icon name='dollar sign' />
      </Button.Content>
      </Button>

      <Button animated='vertical'>
      <Button.Content visible>
      <Icon name='cc apple pay' size='medium'/>
      </Button.Content>
      <Button.Content hidden>
        <Icon name='dollar sign' />
      </Button.Content>
      </Button>
          
      <Button animated='vertical'>
      <Button.Content visible>
      <Icon name='cc discover' size='medium'/>
      </Button.Content>
      <Button.Content hidden>
        <Icon name='dollar sign' />
      </Button.Content>
      </Button>
        </Button.Group>

        </Card>
        </Grid.Column>
        <Grid.Column>
          <PanelContentTitle>Write Us...</PanelContentTitle>
        <Card fluid style={{padding: '1em'}}>
          <form 
          className='ui form'
          name="contact" 
          method="post" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          >

        <input type="hidden" name="form-name" value="contact" />

        <div className="field">
        <label>Full Name</label>
        <input type="text" name="name" placeholder="Name" />
        </div>

        <div className="field">
        <label>Email</label>
        <input type="email" name="email" placeholder="email@website.com" />
        </div>

        <div class="field">
        <label>Message</label>
        <textarea name='message' placeholder='Your Question/Request'></textarea>
        </div>

          <Button animated='vertical' primary type='submit' style={{width: '100%'}}>
      <Button.Content visible>
      <Icon name='mail outline' size='large'/>
      </Button.Content>
      <Button.Content hidden>
        <Icon name='send' />
      </Button.Content>
      </Button>

          </form>
           </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    

    <PanelContentTitle>
            Credits
          </PanelContentTitle>
          <p>
This online edition of Una Storia Segreta is a project of the Italian American Studies Association, Western Regional Chapter.
          </p>

<Quote>
Project Director: Lawrence DiStasi
</Quote>

<Quote>
Photography: Justyn Zolli
</Quote>

<Quote>
Web Design: Dr. Jennifer Lagier Fellguth
</Quote>

<Quote>
Art & Design Consultation: Anthony Pinata
</Quote>

<Quote>
Web Development: Ricardo Bautista
</Quote>

    </ParaPanel>
        </Slide>
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}
  
export default Contact;