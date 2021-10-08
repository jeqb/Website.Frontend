import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="Content-Container">
      <h1>
        Services
      </h1>
      <h3>
        Cloud Development
      </h3>
      <p className="Description">
        My career is in Cloud development - specifically in Microsoft Azure. I have experience with
        Azure DevOps CI/CD, Azure App Services (with and without containerization), and Azure functions.
      </p>
      <br/>
      <h3>
        Backend
      </h3>
      <p className="Description">
        Backend web development is how I got started. I've done extensive backend web services in both
        .Net Core as well as python based ML systems.
      </p>
      <br/>
      <h3>
        Frontend
      </h3>
      <p className="Description">
        Currently, I work as a fullstack developer where my frontend work is in Angular. My favorite framework
        however, is React (which is what this website is built on).
      </p>
    </div>
  );
};

export default Services;
