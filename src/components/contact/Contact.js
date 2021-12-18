import React from 'react';
import { useState } from 'react';

import api from '../../api/api';

const formBackgroundColor = 'rgba(191, 191, 191, .5)';
const formTextColor = 'cyan';

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    var payload = {
      name: name,
      email: email,
      content: message
    };

    console.log("handleSubmit called with payload: " + JSON.stringify(payload));

    setIsLoading(true);

    await api.Message.create(payload)
      .then(() => {
        setIsLoading(false)
        setIsSubmitted(true)
      });
  };

  if (isLoading) {
    return(
      <div className="container-fluid d-flex flex-column" style={{ flexGrow: '1' }}>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12">
            <h1 className="text-center">
              Contact
            </h1>
          </div>
        </div>
        <div className="row flex-grow-1 align-items-center">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="container-fluid d-flex flex-column" style={{ flexGrow: '1' }}>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12">
            <h1 className="text-center">
              Contact
            </h1>
          </div>
        </div>
        <div className="row flex-grow-1 align-items-center">
          <div className="d-flex justify-content-center">
            <h4>
              Message Received
            </h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid d-flex flex-column" style={{ flexGrow: '1' }}>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h1 className="text-center">
            Contact
          </h1>
        </div>
      </div>
      <div className="row flex-grow-1 align-items-end">
        <div className="col-lg-2 col-md-2">
          {/* spacer */}
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <label className="form-label" for="name">
            Name
          </label>
          <input
            className="form-control shadow-none"
            id="name"
            type="text"
            data-sb-validations="required"
            style={{
              backgroundColor: formBackgroundColor,
              border: 'none',
              color: formTextColor
            }}
            onChange={ e => setName(e.target.value)}
          />
          <div className="invalid-feedback" data-sb-feedback="name:required">
            Name is required.
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <label className="form-label" for="emailAddress">Email Address</label>
          <input
            className="form-control shadow-none"
            id="emailAddress"
            type="email"
            data-sb-validations="required, email"
            style={{
              backgroundColor: formBackgroundColor,
              border: 'none',
              color: formTextColor
            }}
            onChange={ e => setEmail(e.target.value)}
          />
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
      <div className="row flex-grow-1 align-items-start">
        <div className="col-lg-2 col-md-2">
          {/* spacer */}
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <label className="form-label" for="message">
            Message
          </label>
          <textarea
            className="form-control shadow-none"
            id="message"
            type="text"
            style={{
              height: '30rem',
              backgroundColor: formBackgroundColor,
              border: 'none',
              color: formTextColor
            }}
            data-sb-validations="required"
            onChange={ e => setMessage(e.target.value)}
          />
          <div className="invalid-feedback" data-sb-feedback="message:required">
            Message is required.
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="RetroButton" onClick={e => { handleSubmit(e) }}>
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
