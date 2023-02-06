import React from 'react';
import { FaEnvelope, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './style/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p>You can reach me at:</p>
      <ul>
        <li>
          <FaEnvelope className="icon" />
          <a href="mailto:Chylbookings@gmail.com">Email Me</a>
        </li>
        <li>
          <FaTwitter className="icon" />
          <a href="https://twitter.com/chylmusic">Tweet Me</a>
        </li>
        <li>
          <FaInstagram className="icon" />
          <a href="https://instagram.com/chylmusic">Follow Me</a>
        </li>
        <li>
          <FaFacebook className="icon" />
          <a href="https://www.facebook.com/people/Koren-Rolle/100080670240096/">Facebook Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
