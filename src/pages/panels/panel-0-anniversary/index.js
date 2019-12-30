import React from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { PanelBanner, ParaPanel, Quote, Horizontal, PanelTitle, Crumbs, CrumbLeft, CrumbRight} from '../../../styled-compoments/PanelContentStyles';
import { PanelImageFeature } from '../../../styled-compoments/PanelImageStyles';
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {SideBySideMagnifier} from "react-image-magnifiers";
import Gate from "../../../components/images/home/gates.jpg";

const Panel0Anniversary = () => (
  <>
  <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${Gate})` }}/>
  <PanelTitle>20TH ANNIVERSARY: LOOKING BACK</PanelTitle>
<ParaPanel>
<Quote>

</Quote>
<p>On February 24, 1994, the exhibit Una Storia Segreta: When Italian Americans Were &lsquo;Enemy Aliens&rsquo; opened at the Museo Italo Americano in San Francisco. The opening on February 24 memorialized the date in 1942 when enemy aliens of Italian descent living in recently-designated &ldquo;prohibited zones&rdquo; on the West Coast had to leave their homes and businesses in those zones and move elsewhere. This story&mdash;which we called the &ldquo;Evacuation&rdquo;&mdash;and other elements of the internments and restrictions on enemy aliens on the homefront were contained in the narratives, photos and documents of the <span className='italic'>Una Storia Segreta</span> exhibit. For the first time, what happened to more than 600,000 Italian immigrants nationwide was graphically presented for all to see.</p>

<p>The exhibit was an immediate sensation, drawing record crowds to this and more than 50 subsequent showings nationwide. Front-page articles in newspapers greeted it wherever it traveled. The exhibit was displayed in state capitols and city halls nationwide, starting with its showing in the Rotunda of the California State Capitol in Sacramento the month after it closed at the Museo. It has also received numerous resolutions and commendations from governors, mayors and state legislatures. After its 1997 appearance in Washington DC at the Rayburn Office Building, legislation was drafted seeking governmental acknowledgment that, contrary to most history books, these events did take place and affected thousands. Finally, after several years, the Wartime Violation of Italian American Civil Liberties Act was passed by both houses of Congress, and signed into law by President William Clinton on November 7, 2000. One year later, as mandated by the Act (Public Law #106-451), the Department of Justice issued a <span className='italic'>Report to the Congress</span> detailing much of the story and the names of many of those who were interned, arrested, and otherwise affected.</p>

<Quote>
UNA STORIA SEGRETA: <br />
WHEN ITALIAN AMERICANS WERE ‘ENEMY ALIENS’
</Quote>

<p>In short, for a low-tech exhibit that its creators thought might have a life of one or two years, this &lsquo;little exhibit that could&rsquo; traveled around the nation for twenty years and more, financed chiefly by the Italian American public who kept it going with fees and donations. Not least, it led directly to major legislation at the national level. We are proud to commemorate the opening of <span className='italic'>Una Storia Segreta</span> twenty years ago, and also that dark date once called &ldquo;mala notte&rdquo; by one of those forced to move from her Santa Cruz home. UNA STORIA SEGRETA (the words in Italian mean both &lsquo;a secret story&rsquo; and &lsquo;a secret history&rsquo;), was developed by the American Italian Historical Association&rsquo;s (now the Italian American Studies Association), Western Regional Chapter (AIHA/WRC). It is dedicated to those who endured the confusions and losses of the wartime largely in silence. By giving them voice, we hope that others will be encouraged to fill out this story&mdash;one we believe is not only worth telling, but crucial to understanding what has shaped us all.</p>

<Crumbs>
  <CrumbLeft
  href='/'
  >
  <Icon name='angle left' /> 
  Home
  </CrumbLeft>

  <CrumbRight
  href='/intro'
  >
  Next
	<Icon name='angle right' /> 
  </CrumbRight>
</Crumbs>

</ParaPanel>
</PageWrap>
</PageContainer>
  </>
)

export default Panel0Anniversary;