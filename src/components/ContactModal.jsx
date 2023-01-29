import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactModal = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Contact
      </button>

      {modal && (<div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <button onClick={toggleModal}>X</button>
            <h2>Love to Hear From You, Get in Touch 👋🐶</h2>
            <p>
              For appointments and bookings please fill out the form below.
              For general enquiries please feel free to leave your name and number
              and Maddie will be in contact with you at the earliest availability.
            </p>
            <ContactForm />
          </div>
      </div>)}
    </>
  )
  }

export default ContactModal
