import styled from 'styled-components';

export const HeroBanner = styled.section`
width: 100%;
height: calc(100vh - 40px);
position: relative;
/* background-attachment: fixed !important; */
background-position: center !important;
background-repeat: no-repeat center center !important;
background-size: cover !important;
opacity: 0.5;
z-index: -1;
&::before{
  content: '╲╱';
  color: var(--primaryGold);
  position: absolute;
  opacity: 1 !important;
  text-shadow: 0 0 .2rem rgba(0,0,0,0.5);
  width: 6rem;
  font-size: 3rem;
  font-weight:bold;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  bottom: 2rem;
  margin-left: -3rem;
  left: 50%;
  animation: bounce 2.8s ease infinite;
}

@keyframes bounce {
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}
`;

export const HomeHeroSub = styled.h3`
margin:auto;
color:white;
text-transform:uppercase;
text-align: center;
white-space: nowrap;
font-size:2em;

@media (max-width: 769px) {
letter-spacing:2px;
font-size:1.7vw;
}

@media (min-width: 769px) {
letter-spacing:6px;
font-size:1em;
}

`;

export const HomeHeroTitle = styled.h1`
margin:auto;
color:var(--primaryGold);
text-align: center;
font-size:8em;
white-space: nowrap;
font-size:8vw;

@media (max-width: 746px) {
font-size:11vw;
}

@media (min-width: 975px) {
  font-size:11vw;
}

`;

export const HeroTextCont = styled.section`
height: calc(100vh - 40px);
width:100%;
display:flex;
margin:auto;
flex-direction: column;
z-index:1;
justify-content: center;
align-items: center;
position: absolute;
`;