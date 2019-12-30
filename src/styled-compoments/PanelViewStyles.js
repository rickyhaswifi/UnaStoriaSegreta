import styled from 'styled-components';
import PanelBlur from '../components/images/panels/shared/panelblur.jpg';

export const ParaPanel = styled.section`
@media (max-width: 769px) {
/* MOB */
width:90%;
margin:auto;
}

@media (min-width: 769px) {   
/* DESK */
padding:2em;
/* left:0%;
overflow: scroll;
/* padding:10px; */
width:70%;
margin:auto;
}

`;

export const PanelBanner = styled.section`
width: 100%;
margin:auto;
height: 50vh;
position: relative;
background-position: center center;
background-repeat: no-repeat !important;
background-size: cover !important;
`;

export const Horizontal = styled.hr`
margin-top:2em;
margin-bottom:2em;
`;

export const PanelTitle = styled.h1`
margin-top:-45px !important;
z-index:1;
position: relative;
text-align:center;
font-size:4em;
border:2px solid #000;
background-color:white;
color:var(--primaryHeader);
/* padding-left:20px; */
`;

export const Quote = styled.h2`
margin: 1em 0 1em 0;
border-left: 5px solid var(--primaryHeader) !important;
padding-left:20px;
font-size:2.5em;
font-style:italic;
letter-spacing:.5px;
/* font-weight: bold; */
`;

export const PanelSub = styled.h3`
color:var(--primaryHeader);
border-bottom: 4px solid var(--primaryHeader) !important;
text-transform:uppercase;
margin: 1em 0 1em 0;
font-size:2.5em;
font-style:italic;
letter-spacing:.5px;
/* font-weight: bold; */
`;

export const ViewPanelButton = styled.a`
display: flex;
text-transform:uppercase;
flex-direction: column;
justify-content: center;
align-items: center;
font-size:3em;
color:white;
height:250px;
background: url(${PanelBlur});
border-radius:var(--borderCurve);
width:100%;
letter-spacing:2px;
transition: .4s font-size, letter-spacing, color;
&:hover{
  font-size:3.7em;
  letter-spacing:5px;
  color:var(--primaryGold);
}

`;

export const Crumbs = styled.section`
border-top: 1px solid var(--primaryHeader) !important;
padding:1em;
margin: 1em;
margin-bottom:5em;
letter-spacing:5px;
font-size:14px;
text-transform: uppercase;
`;

export const CrumbLeft = styled.a`
color:var(--primaryBlack) !important;
float: left;
padding:10px;
`;

export const CrumbRight = styled.a`
color:var(--primaryBlack) !important;
float: right;
padding:10px;
`;
