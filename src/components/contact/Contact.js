import React from 'react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit= (e) => {
    console.log('name: ', name);
    console.log('email: ', email);
    console.log('message: ', message);
  };

  // onChange={e => setName(e.target.value)}
  // onClick={e => { handleSubmit(e) }}

  return (
    <div className="container-fluid h-70">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h1 className="text-center">
            Contact
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2">
          {/* spacer */}
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <label className="form-label" for="name">
            Name
          </label>
          <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
          <div className="invalid-feedback" data-sb-feedback="name:required">
            Name is required.
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <label className="form-label" for="emailAddress">Email Address</label>
          <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
          <div className="invalid-feedback" data-sb-feedback="emailAddress:required">
            Email Address is required.
          </div>
          <div className="invalid-feedback" data-sb-feedback="emailAddress:email">
            Email Address Email is not valid.
          </div>
        </div>
        <div className="col-lg-2 col-md-2">
          {/* spacer */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2">
          {/* spacer */}
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <label className="form-label" for="message">
            Message
          </label>
          <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height: '10rem'}} data-sb-validations="required"></textarea>
          <div className="invalid-feedback" data-sb-feedback="message:required">
            Message is required.
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="RetroButton">
              Submit
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2">
          {/* spacer */}
        </div>
      </div>
    </div>
  )
};

export default Contact;
