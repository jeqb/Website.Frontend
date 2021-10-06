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

  return (
    <div className="Content-Container">
      <h1>
        Contact
      </h1>
      <div
        className="ContactForm"
      >
        <label>Name</label>
        <br/>
        <input
          name='Name'
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <br/>
        <br/>
        <label>Contact Email</label>
        <br/>
        <input
          name='Email'
          type='text'
          onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <br/>
        <label>Message</label>
        <br/>
        <textarea
          name='Message'
          type='text'
          cols="50"
          rows="10"
          onChange={e => setMessage(e.target.value)}
        />
        <br/>
        <br/>
        <div
          className="Button"
          onClick={e => { handleSubmit(e) }}
        >
          Submit
        </div>
      </div>
    </div>
  )
};

export default Contact;
