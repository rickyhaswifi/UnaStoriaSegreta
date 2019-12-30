import styled from 'styled-components';

export const StorySec = styled.section`
margin-top:3em !important;
position: relative;
height:auto;
width: 100%;
text-align:center;
`;

export const StoryHeroSub = styled.h3`
color:white;
white-space: nowrap;
font-size:2em;
margin-bottom:1em !important;
/* position: absolute;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%); */

@media (max-width: 769px) {
letter-spacing:2px;
font-size:2.5vw;
/* top: 65%; */
}

@media (min-width: 769px) {
letter-spacing:5px;
font-size:2em;
/* top: 75%; */
}

`;

export const StoryHeroTitle = styled.h1`
color:white;
white-space: nowrap;
font-size:8em;
/* position: absolute; */
/* top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%); */

@media (max-width: 800px) {
font-size:8vw;
}

@media (min-width: 800px) {
font-size:6em;
}

`;

export const StoryP = styled.p`
color:var(--primaryText);
margin:auto !important;
width:80%;
padding-top: 10px !important;
border-left: 2px solid #fff !important;
padding-left:20px !important;
`;