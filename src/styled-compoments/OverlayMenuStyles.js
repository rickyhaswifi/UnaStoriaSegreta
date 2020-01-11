import styled from 'styled-components';

export const OverlayMenu = styled.section`
background:var(--redGradient);
/* position: absolute; */
width:100%;
right:0;
/* z-index:9999 !important; */
min-height:90vh;
padding:2em !important;
/* visibility: hidden; */
`;

export const CloseIcon = styled.section`
position: absolute;
top:30px;
right:30px;
font-size:40px;
color: var(--primaryText);
transition: .5s color;
&:hover{
  color:var(--primaryGold);
}
`;

export const OvTitle = styled.a`
font-size:24px;
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
font-size:2.3em;
text-transform:uppercase;
letter-spacing:2px;
font-weight:800 !important;
display:block;
margin-top:.2em;
margin-bottom:.2em;
color:white;
transition: .3s font-size, letter-spacing, margin-left, content;
&:hover{
  font-size:2.6em;
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
