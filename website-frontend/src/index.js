import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// fonts
import './fonts/Road_Rage.otf';
import './fonts/TarrgetRegular-WEOz.otf';
import './fonts/VCR_OSD_MONO_1.001.ttf';
import './fonts/Indelible.otf';
import './fonts/Neon.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
