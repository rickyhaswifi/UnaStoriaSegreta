import styled from 'styled-components';

export const GlobalContianer = styled.section`
@import url('https://fonts.googleapis.com/css?family=Girassol|Raleway&display=swap');

* {
  margin: 0;
  padding: 0;
}

.ui.doubling.two.column.grid{
  margin-top:4em;
  margin-bottom:4em !important;
}

.ui.modal{
position: absolute !important;
  margin-top:4em !important;
  width:95vw !important;
}

.ui.segment {
  font-size: 1.3rem;
  justify-content: center;
  letter-spacing:0.002em;
  line-height:1.58em;
  text-align:justify;
  text-align-last:left;
}

.ui.inverted.yellow.button{
    border:var(--primaryGold) !important;
}

.italic{
  /* color:var(--primaryBlack); */
  font-style: italic;
  font-weight:600 !important;
  /* background-image: linear-gradient(to top, rgba(256,256,31,0.2) 50%, rgba(255,0,0,0) 50%);
  width: auto;
  display: inline; */
}

h1{
  font-family: 'Girassol', cursive;
  text-transform: uppercase;
}

h2{
  font-family: 'Girassol', cursive;
  text-transform: lowercase;
}

h3{
  font-family: 'Raleway', sans-serif;
}

.ui.inverted.menu{
  background-color: var(--primaryMenu);
}

.flick{
  padding:10px;
  border-radius:5px;
}

p{
  padding: 1.5em 0em;
  justify-content: center;
  letter-spacing:0.004em;
  line-height:1.58em;
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  text-align:justify;
word-spacing:-2px;
  text-align-last:left;
}

a{
  font-family: 'Raleway', sans-serif;
}

*::selection {
  color:var(--primaryGold);
  background: #002E49;
}
*::-webkit-selection {
  color:var(--primaryGold);
  background: #002E49;
}
*::-moz-selection {
  color:var(--primaryGold);
  background: #002E49;
}

.ui.small.segments, .segment {
    font-size: .92857143rem !important;
}

`;