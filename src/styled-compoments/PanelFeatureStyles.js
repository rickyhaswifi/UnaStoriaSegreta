import styled from 'styled-components';

export const PanelBanner = styled.section`
width: 80vw;
margin: auto !important;
min-height: 50vh;
`;

export const PanelContent = styled.section`
transition: .2s all;
&:hover{
  transform: scale(1.1);
}
`;

export const PanelCTA = styled.section`

`;

export const PanelImage = styled.section`
min-height: 100%;
background-position: center !important;
background-repeat: no-repeat !important;
background-size: cover !important;
box-shadow: 10px 10px 0px 0px rgba(1, 133, 164, 1);
-webkit-box-shadow: 10px 10px 0px 0px rgba(1, 133, 164, 1);

@media (max-width: 769px) {
  height:400px;
  width:100%;
}

@media (min-width: 769px) {
  height:600px;
  width:100%;
}

transition: .2s all;
&:hover{
  opacity:0.5;
  box-shadow: 15px 15px 0px 3px rgba(1, 133, 164, 1);
-webkit-box-shadow: 15px 15px 0px 3px rgba(1, 133, 164, 1);
}

`;

export const PanelText = styled.h1`
color: #fff;
text-transform:capitalize !important;
position: relative;
display:inline-block;
font-weight:bold;
white-space: nowrap;

@media (max-width: 769px) {
  font-size:2.5em;
}

@media (min-width: 769px) {
  font-size:4.5em;
}

&::after{
  content: "";
  position: absolute;
  width: 100%;
  background-image: var(--redGradient) !important;
  opacity:0.5;
  left: 5px;
  bottom: 5px;
  height: .6em;
  z-index: -1;
}


`;

export const PanelDetail = styled.p`
color: #fff;
padding:5px !important;
font-size:20px;
margin-bottom:1.5em !important;

@media (max-width: 769px) {
  width:100%;
}

@media (min-width: 769px) {
  width:90%;
}
`;

export const PanelButton = styled.a`
color:white;
letter-spacing:2px;
font-size:25px;
padding-top:1em;
padding-bottom:1em;
padding-left:1em !important;
padding-right:1em !important;
margin-top:2em !important;
border:2px gold solid;
border-radius:2px;
width:200px;
height:55px;
@media (max-width: 769px) {
  width:100% !important;
  padding-left:2em !important;
padding-right:2em !important;
  margin:auto !important;
}
`;

export const Horizontal = styled.hr`
position: relative;
margin-top:3em !important;
margin-bottom: 3em !important;
border: 0;
height: 1px; 
background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)); 
`;
