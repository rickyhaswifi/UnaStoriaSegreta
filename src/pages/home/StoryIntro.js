import React from 'react';
import {StorySec, StoryHeroTitle, StoryHeroSub, StoryP} from '../../styled-compoments/StoryIntroStyles';
import {Button, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
const StoryIntro = () => (
  <>
  <StorySec id='story'>
    <StoryHeroTitle>
    20th anniversary
    </StoryHeroTitle><br />
    <StoryHeroSub>
    WHEN ITALIAN AMERICANS WERE “ENEMY ALIENS”
    </StoryHeroSub>
  </StorySec>
  <StoryP>
  On February 24, 1994, the exhibit Una Storia Segreta: When Italian Americans Were ‘Enemy Aliens’ opened at the Museo Italo Americano in San Francisco. The opening on February 24 memorialized the date in 1942 when enemy aliens of Italian descent living in recently-designated “prohibited zones” on the West Coast had to leave their homes and businesses in those zones and move elsewhere.
  <br />
  <br />
  <Link to='/anniversary'>
          <Button animated color='yellow' size='huge' inverted>
          <Button.Content visible style={{color:'white'}}>Read more</Button.Content>
          <Button.Content hidden style={{textAlign:'center'}}>
          <Icon name='' />
          <Icon name='' />
          <Icon name='angle double right' />
          <Icon name='angle double right' />
          </Button.Content>
          </Button>
          </Link>
  </StoryP>
  </>
)

export default StoryIntro;