import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Banner from "components/Banner";
import styles from '../styles/contactForm.module.scss'
import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/mrgvgzkp",
      data: new FormData(form)
    })
      .then(r => {
        alert("Form Sent!")
        handleServerResponse(true, "Form Sent!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
      <form onSubmit={handleOnSubmit} >
          <input className={styles.input} type="text" name="name" placeholder="Full name"/><br></br>
          <input className={styles.input} type="text" name="email" placeholder="Email"/><br></br>
          <input className={styles.input} type="text" name="subject" placeholder="Subject"/><br></br>
          <textarea className={styles.message} type="text"name="message" placeholder="Message"/><br></br>
      <button className={styles.submit} type="submit" disabled={serverState.submitting}>Send</button>
      {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
    </form>
  );
}

export default function Contact() {
  return (
    <div className="contact">
      <Fade triggerOnce>
      <Banner
        imageSrc="/sfuia-team2.jpeg"
        text="Contact Us"
        height="50"
      />
        <Container
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              flexDirection: "column",
              margin: "3em auto",
            }}
          >
          <h2>Contact Us</h2>
          <p>Have a question you want to ask the SFUIA team? Feel free to contact us!</p>
          <ContactForm />
        </Container>
      </Fade>
    </div>
    
  );
}
