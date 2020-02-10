import styled from 'styled-components';

export const AllResponsive = styled.section`
@media (min-width: 769px) {
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
width: 100%;
min-height: 5vh;
position: fixed;
z-index:2;
}

@media (max-width: 769px) {
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
background-position: center;
width: 100%;
min-height: 5vh;
}
`;

export const MobileOnlyResponse = styled.section`
@media (max-width: 769px) {
  display:none;
}
`;

export const DeskOnlyResponse = styled.section`
position: relative;
@media (min-width: 769px) {
  display:none;
}
`;

export const FixMobile = styled.section`
position: sticky !important;
bottom:0 !important;
z-index:2;
`;