import React from 'react';
import './RetroBackground.css';
import { ReactComponent as CloudSvg } from './cloud_effect.svg';

// Original source: https://codepen.io/inegoita/pen/BgdXMw

const RetroBackground = () => {
  return(
    <div
      className="background-80s animated-clouds stars"
    >
      <div className="sun"></div>

      <div className="grid"></div>

      <div className="overlay"></div>

      <CloudSvg/>
    </div>
  )
};

export default RetroBackground;
