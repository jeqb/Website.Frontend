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
            <p style={{ textAlign: 'left', paddingLeft: '5%', paddingRight: '5%' }}>
              I am a .NET developer who focuses on writing testable, scalable, and maintainable code.
              Most of my work in C# / .NET has been in backend web systems and cloud integrations.
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
            <p style={{ textAlign: 'left', paddingLeft: '5%', paddingRight: '5%' }}>
              Microsoft Azure is my cloud system of choice. My career was started in cloud development building an ML system
              in python which deployed into Azure App services via the Azure Devops CI/CD pipelines.
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
            <p style={{ textAlign: 'left', paddingLeft: '5%', paddingRight: '5%' }}>
              My frontend framework of choice is React. I'm always looking for opportunities to get better with it.
              As a matter of fact, this website is built on React.
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
            <p style={{ textAlign: 'left', paddingLeft: '5%', paddingRight: '5%' }}>
              I originally worked as a Data Analyst writing SQL queries all day every day for about 9 months.
              Writing 200-500 line queries was the norm for me. Temp tables are your friend. Microsoft SQL server
              is the tool of my trade.
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
