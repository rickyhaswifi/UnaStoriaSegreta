import styled from 'styled-components';

export const FooterMain = styled.section`
background-color: var(--primaryMenu);
color: white;
padding-bottom:2em;
min-height: 300px;
width:100%;
text-align:center;
position: absolute;
padding:2.5em;
/* z-index:999; */
transform: .3s all;
.facebook:hover{
    background: linear-gradient(45deg, #1B65EB,#1BDBF8 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.instagram:hover {
    background: linear-gradient(45deg, #FCB845, #FD2246 ,#5538E8 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

.icon.map:hover {
    background: linear-gradient(45deg, rgb(27, 223, 66), rgb(105, 233, 13) );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .twitter:hover {
    background: linear-gradient(45deg, #1DA1F2,#34AAF2 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`;

export const FooterContent = styled.section`
margin: auto;
position: relative;
width:50%;
`;

export const FooterLink = styled.a`
color:var(--primaryGold) !important;
transition: .2s all;
text-transform: uppercase;
font-size: .8em;
transform: .2s all;
&:hover{
  color:var(--primaryTan) !important;
  letter-spacing:1px;
}

`;

export const FooterText = styled.p`
text-align: center;
margin:  2em 0;
text-transform: uppercase;
font-size: .8em;
letter-spacing: 2px;
`;

export const FooterSocial = styled.section`
margin: 0 2em;
padding:.5em;
display: inline-block;
`;