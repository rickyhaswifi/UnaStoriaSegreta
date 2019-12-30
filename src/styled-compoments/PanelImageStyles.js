import styled from 'styled-components';

export const PanelImageFeature = styled.section`
@media (max-width: 769px) {
/* MOB */
width:100%;
height:200px;
background-color:red;
}

@media (min-width: 769px) {
/* DESK */
margin:auto;
height:100vh;
position:absolute;
right:0%;
display:block;
width:50%;
}
`;