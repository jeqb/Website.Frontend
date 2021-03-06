import React from 'react';
import Self from './self.jpg';
import Desert from './desert.jpg';

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h1 className="text-center">
            About
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1 col-md-1">
          {/* spacer */}
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 text-center">
          <img
            src={Self}
            alt=""
            className="img-fluid"
            style={{borderRadius: '3%', border: '2px solid cyan'}}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3">
          {/* spacer */}
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <p>
            I am a software engineer based out of Phoenix Arizona. I specialize in
            cloud developement, specifically in the Azure ecosystem.
          </p>
          <p>
            I started out in the data and analytics world getting extensive experience
            with MS SQL Server reporting. Then I moved into the world of Machine Learning
            where I got started in the Azure Ecosystem with microservice architecture,
            CI/CD, containerization, and python. After doing that for a while, I moved
            into Enterprise software development doing .Net development full time.
          </p>
          <p>
            I'm always looking to build and improve my skillset with .Net as my preferred backend and
            React for the frontend.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8">
          {/* spacer */}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <img
            src={Desert}
            alt=""
            className="img-fluid"
            style={{borderRadius: '3%', border: '2px solid cyan'}}
          />
        </div>
      </div>
    </div>
  )
};

export default About;
