import React, {Component} from 'react';
import {PageContainer, PageWrap} from '../../styled-compoments/PanelStyle';
import { ParaPanel, PanelTitle, Crumbs, CrumbLeft, CrumbRight, PanelBanner, PanelContentTitle, Quote} from '../../styled-compoments/PanelContentStyles';
import { Grid, Form, Icon, Button, TextArea, Card } from 'semantic-ui-react'
import HeroSup from '../../components/images/panels/supplement/P7Sup1.jpg';

class Contact extends Component {
  render() {
    return(
      <>
      <PageContainer>
        <PageWrap>
        <PanelBanner style={{ background: `url(${HeroSup})` }}/>
      <PanelTitle>Contact Us</PanelTitle>
    <ParaPanel>
          <PanelContentTitle>
            About Us...
          </PanelContentTitle>
          <p>
          On February 24, 1994, the exhibit Una Storia Segreta: When Italian Americans Were ‘Enemy Aliens’ opened at the Museo Italo Americano in San Francisco. The opening on February 24 memorialized the date in 1942 when enemy aliens of Italian descent living in recently-designated “prohibited zones” on the West Coast had to leave their homes and businesses in those zones and move elsewhere. This story—which we called the “Evacuation”—and other elements of the internments and restrictions on enemy aliens on the homefront were contained in the narratives, photos and documents of the Una Storia Segreta exhibit. For the first time, what happened to more than 600,000 Italian immigrants nationwide was graphically presented for all to see.
          </p>
    <Grid doubling stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
        <PanelContentTitle>Donate</PanelContentTitle>
        <Card fluid style={{padding: '1em'}}>   
        <p>
          Support Una Storia Segreta with your financial donation. 
        </p>
        <Button.Group size='huge' color='blue'>
      

     <Button animated='vertical'>
      <Button.Content visible>
      <Icon name='cc paypal' size='large'/>
      </Button.Content>
      <Button.Content hidden>
        <Icon name='dollar sign' />
      </Button.Content>
      </Button>

      <Button animated='vertical'>
      <Button.Content visible>
      <Icon name='cc apple pay' size='large'/>
      </Button.Content>
      <Button.Content hidden>
        <Icon name='dollar sign' />
      </Button.Content>
      </Button>
          
      <Button animated='vertical'>
      <Button.Content visible>
      <Icon name='cc discover' size='large'/>
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
          <Form action='POST' data-netlify='true' >
          <Form.Field>
          <label>Name</label>
          <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
          <label>Email</label>
          <input placeholder='name@email.com' label='Email'/>
          </Form.Field>
          <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
        />

          <Button animated='vertical' primary type='submit'>
      <Button.Content visible>
      <Icon name='mail outline' size='large'/>
      </Button.Content>
      <Button.Content hidden>
        <Icon name='send' />
      </Button.Content>
      </Button>

          </Form>
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
    </PageWrap>
    </PageContainer>
      </>
    )
  }
}
  
export default Contact;