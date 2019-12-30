import styled from 'styled-components';

export const GlobalContianer = styled.section`
@import url('https://fonts.googleapis.com/css?family=Girassol|Raleway&display=swap');

* {
  margin: 0;
  padding: 0;
}

.ui.doubling.two.column.grid{
  margin-top:8em;
  margin-bottom:8em !important;
}

.ui.modal{
  margin:auto;
  width:95vw !important;
}

.ui.inverted.yellow.button{
    border:var(--primaryGold) !important;
}

.italic{
  color:var(--primaryHeader);
  font-style: italic;
  font-weight:bold;
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
  letter-spacing:-0.004em;
  line-height:1.58em;
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  text-align:justify;
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

`;