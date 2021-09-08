import React from 'react';
import './Background.css';
import { ReactComponent as CloudSvg } from './cloud_effect.svg';

const Background = () => {
  return(
    <div
      className="background-80s animated-clouds stars"
    >
      <div class="sun"></div>

      <div class="grid"></div>

      <div class="overlay"></div>

      <CloudSvg/>
    </div>
  )
};

export default Background;
