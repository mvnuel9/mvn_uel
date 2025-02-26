import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_y4hssse', 
      'template_nafh66j', 
      form.current,
      'aYQVkqM9AKBtx2luZ' 
    )
      .then(
        (result) => {
          console.log("SUCCÈS :", result.text);
          alert('Message envoyé !');
          form.current.reset();
        },
        (error) => {
          console.error("ERREUR :", error.text);
          alert('Échec de l\'envoi : ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="objet" hidden>
            Objet
          </label>
          <input
            type="text"
            name="objet"
            id="objet"
            placeholder="Objet"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Envoyer" />
      </form>
    </section>
  );
}

export default Contact;