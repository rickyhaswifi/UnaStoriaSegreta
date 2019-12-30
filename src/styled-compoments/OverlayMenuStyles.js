import styled from 'styled-components';

export const OverlayMenu = styled.section`
background:var(--redGradient);
position: relative;
margin:auto !important;
/* width:90vw; */
/* z-index:9999 !important; */
height:90vh;
padding:1em;
`;

export const OvTitle = styled.a`
font-size:24px;
color:var(--primaryBlack);
font-family: 'Girassol', cursive !important;
text-transform: uppercase;
`;

export const OvItem = styled.a`
white-space: nowrap;
text-align:left;
font-size:2.5em;
text-transform:uppercase;
letter-spacing:2px;
font-weight:bold;
display:block;
margin-top:.2em;
margin-bottom:.2em;
color:white;
transition: .2s font-size, letter-spacing, margin-left, content;
&:hover{
  font-size:3em;
  letter-spacing:2px;
  margin-left:10px;
  color:var(--primaryGold);
  &::after{
    content:' ➝';
  }
}
`;
