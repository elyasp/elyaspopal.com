import React, { useState } from "react";
import { FormBox, FormGroup, Button, Title } from "./styles";

export const ContactForm = () => {
  const [sendStatus, setSendStatus] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setSendStatus("SUCCESS");
      } else {
        setSendStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <FormBox>
      <Title>
        <h5>Have a project, idea or a problem you'd like to discuss?</h5>
        <h2>Let's have a chat</h2>
      </Title>

      <form
        id="contact-form"
        action={process.env.REACT_APP_EMAIL_API}
        method="POST"
        onSubmit={submitForm}
      >
        <FormGroup>
          <label htmlFor="name">Name*</label>
          <input id="name" name="name" type="text" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" name="phone" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="8" />
        </FormGroup>
        <FormGroup>
          <small>* required</small>
        </FormGroup>
        {sendStatus === "ERROR" && (
          <FormGroup>
            <p>
              Ooops! There was an error. Try contacting me
              <a href="mailto:elyas@outlook.com"> here.</a>
            </p>
          </FormGroup>
        )}
        {sendStatus === "SUCCESS" ? (
          <FormGroup>
            <p>Thanks, I'll get back to you shortly! ✔️</p>
          </FormGroup>
        ) : (
          <Button>
            <button type="submit">SEND</button>
          </Button>
        )}
      </form>
    </FormBox>
  );
};
