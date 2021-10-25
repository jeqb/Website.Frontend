import React, { useState } from 'react';
import { withRouter, useHistory  } from 'react-router-dom';

const Header = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const history = useHistory();

  const handleClick = (path) => {
    
    history.push(path);
  
  };
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-expand-md">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className={`nav-link active ${isNavCollapsed ? 'RetroButton' : 'RetroButton Button-Collapsed'}`}
                aria-current="page"
                onClick={() => handleClick('/about')}
              >
                About
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link active ${isNavCollapsed ? 'RetroButton' : 'RetroButton Button-Collapsed'}`}
                aria-current="page"
                onClick={() => handleClick('/services')}
              >
                Services
              </div>
            </li>
            <li className="nav-item">
              <div
                  className={`nav-link active ${isNavCollapsed ? 'RetroButton' : 'RetroButton Button-Collapsed'}`}
                  aria-current="page"
                  onClick={() => handleClick('/contact')}
                >
                  Contact
                </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
