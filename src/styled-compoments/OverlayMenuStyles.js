import styled from 'styled-components';

export const OverlayMenu = styled.section`
background:var(--redGradient);
position: relative;
width:100%;
min-height:100vh;
padding:2em !important;
text-align:left;
`;

export const CloseIcon = styled.section`
position: absolute;

@media (min-width: 950px) {
/* DESK */
top:25px;
right:25px;
}

@media (max-width: 950px) {
/* MOBILE */
bottom:65px;
right:45%;
}


font-size:40px;
color: var(--primaryText);
transition: .5s color;
&:hover{
  color:var(--primaryGold);
}
`;

export const OvTitle = styled.a`
font-size:24px;
width:100%;
margin:0;
font-family: 'Girassol', cursive !important;
text-transform: uppercase;
color: var(--primaryGold);
transition: .5s color;
&:hover{
  color:var(--primaryText);
}
`;

export const OvItem = styled.a`
white-space: nowrap;
padding: .5em .5em .5em 0 !important;
text-align:left;
font-size:1.8em;
text-transform:uppercase;
letter-spacing:2px;
font-weight:800 !important;
display:block;
margin-top:.2em;
margin-bottom:.2em;
color:white;
transition: .3s font-size, letter-spacing, margin-left, content;
&:hover{
  font-size:2em;
  letter-spacing:2px;
  margin-left:10px;
  color:var(--primaryGold);
  &::after{
    content:' ➝';
  }
}

@media (max-width: 950px) {
  /* MOBILE */
font-size:1.5em;
&:hover{
  font-size:2em;
}
}
`;
