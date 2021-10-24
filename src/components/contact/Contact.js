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
    <div className="Content-Container">
      <h1>
        Contact
      </h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Message
          </label>
          <textarea class="form-control" placeholder="Type Message here" rows="4"></textarea>
        </div>
        <div class="RetroButton">
          Submit
        </div>
      </form>
    </div>
  )
};

export default Contact;
