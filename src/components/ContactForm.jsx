import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "UtlYFYcma-3xMzP9E"
      )
      .then(
        (error) => {
          console.log(error.text);
          // eslint-disable-next-line no-restricted-globals
        },
        location.reload(),
        alert("You're message has been sent")
      );
  };
  return (
    <form ref={form}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Contact Number</label>
      <input type="email" name="user_number" />
      <label htmlFor="vet">
        Are you a Vet?
        <select id="vet" name="vet" placeholder="No">
          <option>Yes</option>
          <option>No</option>
        </select>
      </label>
      <label htmlFor="animal_type">
        Which animal are you seeking help for?
        <select id="animal_type" name="animal_type" placeholder="No">
          <option>Equine</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Other</option>
        </select>
      </label>
      <label>Subject</label>
      <input type="text" name="user_subject" />
      <label>Location</label>
      <input type="text" name="user_location" />
      <label>Message</label>
      <textarea name="message" />
      <input onClick={sendEmail} type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
