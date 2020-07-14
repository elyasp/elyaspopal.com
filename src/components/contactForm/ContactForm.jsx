import React, { useState } from "react";
import axios from "axios";
import { FormBox, FormGroup, Button, Title } from "./styles";

export const ContactForm = (props) => {
  const [guestData, setGuestData] = useState([{}]);

  const onNameChange = (event) => {
    setGuestData({ ...guestData, name: event.target.value });
  };

  const onEmailChange = (event) => {
    setGuestData({ ...guestData, email: event.target.value });
  };

  const onMessageChange = (event) => {
    setGuestData({ ...guestData, message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: guestData,
    }).then((response) => {
      if (response.data.status === "success") {
        window.alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        window.alert("Message failed to send.");
      }
    });
  };

  const resetForm = () => {
    setGuestData({ name: "", email: "", message: "" });
  };

  return (
    <FormBox>
      <Title>
        <h5>Have a project, idea or a problem you'd like to discuss?</h5>
        <h2>Let's have a chat</h2>
      </Title>

      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <FormGroup>
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            type="text"
            value={guestData.name}
            onChange={onNameChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="email"
            value={guestData.email}
            onChange={onEmailChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="8"
            value={guestData.message}
            onChange={onMessageChange}
          />
        </FormGroup>
        <FormGroup>
          <small>* required</small>
        </FormGroup>
        <Button>
          <button type="submit">SEND</button>
        </Button>
      </form>
    </FormBox>
  );
};
