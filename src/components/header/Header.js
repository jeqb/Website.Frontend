import React from 'react';
import { withRouter, useHistory  } from 'react-router-dom';

import './Header.css';

const Header = () => {

  const history = useHistory();

  const handleClick = (path) => {
    
    history.push(path);
  
  };

  return (
    <div className="Header">
      <div
        className="Button End"
        onClick={() => handleClick('/contact')}
      >
        Contact
      </div>
      <div
        className="Button"
        onClick={() => handleClick('/services')}
      >
        Services
      </div>
      <div
        className="Button"
        onClick={() => handleClick('/about')}
      >
        About
      </div>
    </div>
  );
};

export default withRouter(Header);
