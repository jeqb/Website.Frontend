import React from 'react';
import AzureLogo from './azure-logo.png';
import DotnetLogo from './dotnet-logo.jpg';
import ReactLogo from './react-logo.png';
import SqlLogo from './sql-database-logo.png';

/*

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

*/


const Services = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h1 className="text-center">
            Services
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12 text-center">
          <div>
            <img
              src={DotnetLogo}
              alt=""
              className="img-fluid"
            />
            <p className="text-center">
              I am a .NET developer specalizing in .Net Core backend services.
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 text-center">
          <div>
            <img
              src={AzureLogo}
              alt=""
              className="img-fluid"
            />
            <p className="text-center">
              Multiple years of web development experience in Microsoft Azure.
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 text-center">
          <div>
            <img
              src={ReactLogo}
              alt=""
              className="img-fluid"
            />
            <p className="text-center">
              My frontend framework of choice is React.
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 text-center">
          <div>
            <img
              src={SqlLogo}
              alt=""
              className="img-fluid"
            />
          </div>
          <p className="text-center">
              Multiple years of web development experience in Microsoft Azure.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
