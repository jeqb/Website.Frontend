import React from 'react';
import './About.css';
import Self from './self.jpg';
import Sunset from './sunset.jpg';

const About = () => {
  return (
    <div className="Content-Container">
      <h1>
        About
      </h1>
      <img
        src={Self}
        alt=""
        className="Self-Image"
      />
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
      <img
        src={Sunset}
        alt=""
        className="Sunset-Image"
      />
      <p>
        Now I work as a full stack developer, with .Net being my preferred backend and
        then React or Angular for the frontend.
      </p>
    </div>
  )
};

export default About;