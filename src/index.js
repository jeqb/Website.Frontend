import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// fonts
import './fonts/Road_Rage.otf';
import './fonts/TarrgetRegular-WEOz.otf';
import './fonts/VCR_OSD_MONO_1.001.ttf';
import './fonts/Indelible.otf';
import './fonts/Neon.ttf';
import './fonts/zeroes two.ttf';
import './fonts/SF Atarian System.ttf';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
