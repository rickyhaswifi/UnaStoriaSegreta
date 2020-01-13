import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </BrowserRouter>
,document.getElementById('segreta'));