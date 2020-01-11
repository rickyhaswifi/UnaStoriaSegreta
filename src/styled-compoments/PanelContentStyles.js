import styled from 'styled-components';
import PanelBlur from '../components/images/panels/shared/panelblur.jpg';

// CONTAINER START

export const ParaPanel = styled.section`
@media (max-width: 800px) {
/* MOB */
width:100%;
margin:auto;
}

@media (max-width: 1080px) {
/* TAB */
width:70%;
margin:auto;
}

@media (min-width: 1080px) {   
/* DESK */
padding:2em;
/* left:0%;
overflow: scroll;
/* padding:10px; */
width:50%;
margin:auto;
}

`;

export const DetailPanel = styled.section`
@media (max-width: 800px) {
/* MOB */
width:90% !important;
margin:auto;
}

@media (max-width: 1080px) {
/* TAB */
width:80%;
margin:auto;
}

@media (min-width: 1080px) {   
/* DESK */
padding:2em;
/* left:0%;
overflow: scroll;
/* padding:10px; */
width:70%;
margin:auto;
}

`;

// CONTAINER END

export const PanelBanner = styled.section`
&::before{
  background-color:var(--primaryText);
}
width: 100%;
opacity:0.8;
margin:auto;
height: 60vh;
position: relative;
background-position: top !important;
background-repeat: no-repeat !important;
background-size: cover !important;

@media (max-width: 1080px) {
/* TAB */
height:70vh;
}
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
border-top:2px solid #000;
border-bottom:2px solid #000;
background-color:white;
color:var(--primaryHeader);
margin-bottom:.75em;
/* padding-left:20px; */
`;

export const PanelContentTitle = styled.h1`
margin-top:40px;
text-align:center;
font-size:4em;
text-decoration:underline;
padding-bottom:2px;
color:var(--primaryHeader);
@media (max-width: 1080px) {
/* TAB */
font-size:3em;
}
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

export const ViewPanelSection = styled.section`
padding:.7em;
display: flex;
justify-content: space-evenly !important;
margin:auto;
`;

export const ViewPanelButton = styled.a`
text-align:center;
display: flex;
margin:auto;
text-transform:uppercase;
justify-content: center;
align-items: center;
font-size:1.3em;
color:white;
background: url(${PanelBlur});
border-radius:var(--borderCurve);
letter-spacing:1px;
transition: .2s box-shadow, letter-spacing, color;
&:hover{
  box-shadow: 10px 10px 0px 0px rgba(1, 133, 164, 1);
-webkit-box-shadow: 10px 10px 0px 0px rgba(1, 133, 164, 1);
  letter-spacing:2px;
  color:var(--primaryGold);
}

height:250px;
width:175px;

@media (max-width: 769px) {
/* MOB */
font-size:.8em;
height:225px;
width:125px;
}
`;

export const Crumbs = styled.section`
/* border-top: 1px solid var(--primaryHeader) !important; */
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

export const Caption = styled.section`
min-height: 1em;
background: #f8f8f9;
padding: 1em 1.5em;
line-height: 1.4285em;
color: rgba(0,0,0,.87);
border-radius: .28571429rem;
box-shadow: 0 0 0 1px rgba(34,36,38,.22) inset, 0 0 0 0 transparent;
`;

export const Null = styled.section`
visibility: hidden;
`;