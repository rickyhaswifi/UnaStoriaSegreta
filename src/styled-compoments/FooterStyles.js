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
transform: .3s all;
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
