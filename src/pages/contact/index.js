import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, PanelBanner, PanelContentTitle, Quote} from '../../styled-compoments/PanelContentStyles';
import { Grid, Icon, Button, Card } from 'semantic-ui-react'
import HeroSup from '../../components/images/panels/supplement/P7Sup1.jpg';
import NetlifyForm from 'react-netlify-form';

class Contact extends Component {
  render() {
    return(
      <>
      <PageContainer>
        <PageWrap>
        <PanelBanner style={{ background: `url(${HeroSup})` }}/>
      <PanelTitle>Contact Us</PanelTitle>
    <ParaPanel>
      <p></p>
          <PanelContentTitle>
            About Us...
          </PanelContentTitle>
          <p>
          On February 24, 1994, the exhibit <span className='italic'>Una Storia Segreta: When Italian Americans Were ‘Enemy Aliens’</span> opened at the Museo Italo Americano in San Francisco. 
          
          Since then, the  exhibit has traveled for over twenty years, and been seen  by enthusiastic audiences at more than fifty sites nationwide.
          
          Now, for the first time, any viewer with access to the internet can see in detail this pathbreaking exhibit that changed the accepted narrative of WWII on the home front.
          </p>
        <PanelContentTitle style={{textAlign:'center'}}>Contact</PanelContentTitle>
        <Card fluid style={{padding: '1em'}}> 
        <Card.Content>
          <Card.Header>
          Project Director: Lawrence DiStasi
          </Card.Header>
          <Card.Description>
          <Icon name='mail'/>
          <a rel="noopener noreferrer" href='mailto:lwdistasi@sbcglobal.net' target='_blank'>lwdistasi@sbcglobal.net</a>
          </Card.Description>
        </Card.Content>
        </Card>
    <Grid doubling stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
  

        <PanelContentTitle>Donate</PanelContentTitle>
        <Card fluid style={{padding: '1em'}}>  
        <Card.Content>
        <Card.Header>
        Support <span class='italic'>Una Storia Segreta</span> with your financial donation to:
        </Card.Header>
        <Card.Description>
        Ensure that the Exhibit is sustained online, and can be physically reproduced to travel again.
        </Card.Description>
        <br/>
        <Card.Description>
        Ensure that  the <b>Western Chapter of the Italian American Studies Association</b> can continue to sponsor programs that advance understanding of the Italian immigrant experience.
        </Card.Description>
        <br/>
        <hr/>
        <br/>
        <Card.Description>
        Donate below with PayPal or a check to our P.O. BOX
        </Card.Description>
        <br/>
        <Card.Description>
          <Icon name='map marker'/> <span class='italic'>Una Storia Segreta</span> <br/>
          P.O. Box 533<br/>
          Bolinas, CA 94924
          </Card.Description>
        </Card.Content> 
    
        <Button.Group size='large' color='blue'>
          <Button 
          href='https://www.paypal.com/pools/c/8lJLTY8joc'
          target="_blank"
          rel="noopener noreferrer"
          animated='vertical'>
          <Button.Content visible>
          <Icon name='cc paypal' size='medium'/>
          </Button.Content>
          <Button.Content hidden>
          <Icon name='credit card' />
          </Button.Content>
          </Button>
          
        </Button.Group>
        </Card>

     

        </Grid.Column>
        <Grid.Column>
          <PanelContentTitle>Write Us...</PanelContentTitle>
        <Card fluid style={{padding: '1em'}}>

        <NetlifyForm name='Contact' action='/contact' data-netlify="true" >
  {({ loading, error, success }) => (
    <div>
      {loading &&
        <div>Loading...</div>
      }
      {error &&
        <div>Your information was not sent. Please try again later.</div>
      }
      {success &&
        <div>Thank you for contacting us!</div>
      }
      {!loading && !success &&
        <div class="ui form">
          <div className="field">
          <label>Full Name</label>
          <input type="text" name="Name" placeholder="Name" />
          </div>

          <div className="field">
          <label>Email</label>
          <input type="email" name="Email" placeholder="email@website.com" />
          </div>

          <div class="field">
          <label>Message</label>
          <textarea name="Message" placeholder='Your Question/Request'></textarea>
          </div>

          <div class="field">
          <button class="ui primary button" style={{width: '100%'}}>
          <i class='mail outline icon large'></i>
          </button>
          </div>
        </div>
      }
    </div>
  )}
</NetlifyForm>
           </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    

<PanelContentTitle>
Credits
</PanelContentTitle>
<p>
This online edition of <span class='italic'>Una Storia Segreta</span> is a project of the Italian American Studies Association, Western Regional Chapter.
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

<hr />

<PanelContentTitle>
Links to related resources:
</PanelContentTitle>
<Card fluid style={{padding: '1em'}}>
  <Card.Content>
    <Card.Header>
    IASA - Western Regional Chapter
    </Card.Header>
    <Card.Description>
    <a rel="noopener noreferrer" href='http://iasawrc.org/' target='_blank'>www.iasawrc.org</a>
    </Card.Description>
    <br/>
    <hr/>
    <br/>

    <Card.Header>
    Lawrence DiStasi's Blog
    </Card.Header>
    <Card.Description>
    <a rel="noopener noreferrer" href='http://www.distasiblog.blogspot.com' target='_blank'>www.distasiblog.blogspot.com</a>
    </Card.Description>
    <br/>
    <hr/>
    <br/>

    <Card.Header>
    <span class='italic'>Una Storia Segreta</span> - Additional Resources
    </Card.Header>
    <Card.Description>
    <a rel="noopener noreferrer" href='http://www.segreta.org/' target='_blank'>
    www.segreta.org
    </a>
    </Card.Description>
    <br/>
    <hr/>
    <br/>
    
    <Card.Header>
    California Italian American Project
    </Card.Header>
    <Card.Description>
    <a rel="noopener noreferrer" href='http://iasawrc.org/CIAP/index.html' target='_blank'>www.iasawrc.org/CIAP</a>
    </Card.Description>
    <br/>
    <hr/>
    <br/>

    <Card.Header>
    Italian American Studies Association
    </Card.Header>
    <Card.Description>
    <a rel="noopener noreferrer" href='http://italianamericanstudies.net/' target='_blank'>www.italianamericanstudies.net</a>
    </Card.Description>
    <br/>

  </Card.Content>
</Card>

    </ParaPanel>
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}
  
export default Contact;