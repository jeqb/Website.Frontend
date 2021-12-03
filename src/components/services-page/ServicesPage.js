import React from 'react';
import AzureLogo from './azure-logo.png';
import DotnetLogo from './dotnet-logo.jpg';
import ReactLogo from './react-logo.png';
import SqlLogo from './sql-database-logo.png';

const ServicesPage = () => {
  return (
    <div className="container-fluid d-flex flex-column" style={{ flexGrow: '1' }}>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h1 className="text-center">
            Services
          </h1>
        </div>
      </div>
      <div className="row flex-grow-1 align-items-center">
        <div className="">
          {/* spacer */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <div>
            <img
              src={DotnetLogo}
              alt=""
              style={{maxHeight: '20vh'}}
            />
            <p>
              I am a .NET developer specalizing in .Net Core backend services.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <div>
            <img
              src={AzureLogo}
              alt=""
              style={{maxHeight: '20vh'}}
            />
            <p>
              Multiple years of web development experience in Microsoft Azure.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <div>
            <img
              src={ReactLogo}
              alt=""
              style={{maxHeight: '20vh'}}
            />
            <p>
              My frontend framework of choice is React.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <div>
            <img
              src={SqlLogo}
              alt=""
              style={{maxHeight: '20vh'}}
            />
          </div>
            <p>
              Multiple years of web development experience in Microsoft Azure.
            </p>
        </div>
        <div className="">
          {/* spacer */}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
