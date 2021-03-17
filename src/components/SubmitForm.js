import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation, ApolloProvider } from '@apollo/client';

import './SubmitForm.css';

const SUBMIT_FORM = gql`
    mutation submitForm($firstName: String!, $lastName: String!, $message: String!) {
        submitForm(firstName: $firstName, lastName: $lastName, message: $message) {
            firstName,
            lastName,
            message
        }
    }
`;

const SubmitForm = () => {
  const formValidation = {
    firstName: {},
    lastName: {},
    message: {},
  }
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState(formValidation);
  const [success, setSuccess] = useState(false);
  const [submitForm, {}] = useMutation(SUBMIT_FORM);

  const validateForm = async () => {
    setErrors(formValidation);
    const currentError = Object.assign({}, formValidation);
    if (!firstName) {
      currentError.firstName.errorMsg = 'Cannot be empty';
    }
    if (!lastName) {
      currentError.lastName.errorMsg = 'Cannot be empty';
    }
    if (!message) {
      currentError.message.errorMsg = 'Cannot be empty';
    }
    if (!firstName || !lastName || !message) {
      setErrors(currentError);
    } else {
      const submit = await submitForm({ variables: { firstName, lastName, message } })
      if (submit && submit.data) {
        setSuccess(true);
        setFirstName('');
        setLastName('');
        setMessage('');
      }
    }
  }
  return (
    <form>
      { !!success && <div className="alert">Thank you for your inquiry!</div> }
      <div className={`input-group ${errors.firstName.errorMsg ? 'error' : ''}`}>
        <label htmlFor="firstName" className="input-label">First name</label>
        <div className="">
          <input
            type="text"
            readOnly=""
            className="submit-input"
            id="firstName"
            placeholder="Your first name here"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <div className="error-message">{errors.firstName.errorMsg}</div>
        </div>
      </div>
      <div className={`input-group ${errors.lastName.errorMsg ? 'error' : ''}`}>
        <label htmlFor="lastName" className="input-label">Last name</label>
        <div className="">
          <input
            type="text"
            readOnly=""
            className="submit-input"
            id="lastName"
            placeholder="Your last name here"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <div className="error-message">{errors.lastName.errorMsg}</div>
        </div>
      </div>
      <div className={`input-group ${errors.message.errorMsg ? 'error' : ''}`}>
        <label htmlFor="messsage" className="input-label">Your message</label>
        <div className="">
          <textarea
            rows={3}
            readOnly=""
            className="submit-input textarea-input"
            id="message"
            placeholder="Type your message here"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <div className="error-message">{errors.message.errorMsg}</div>
        </div>
      </div>
      <button
        type="submit"
        className="submit-btn"
        onClick={(e) => {
          e.preventDefault();
          validateForm();
        }}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default SubmitForm;