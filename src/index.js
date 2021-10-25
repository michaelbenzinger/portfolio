import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import './scroll.js';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <div className='page__main'>
      <Main />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);