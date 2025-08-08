// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-text">
          Interested in collaborating, asking questions, or just saying hi?
        </p>
        <p className="contact-text">
          Reach out at: <a href="mailto:contact@labelis.co">contact@labelis.co</a>
        </p>
        <p className="contact-text">Or find me on:</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/elisa-cohen-a7894a175" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/labelis" target="_blank" rel="noreferrer">GitHub</a>
          {/* Tu peux ajouter plus de liens ici */}
        </div>
      </div>

    </section>
  );
}
