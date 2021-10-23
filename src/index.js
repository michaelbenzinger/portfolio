import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Navigation from './Navigation';
import Main from './Main';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);