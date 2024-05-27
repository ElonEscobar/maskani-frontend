import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

     
      emailjs.sendForm('service_c9kz8zh', 'template_2umij0u', form.current, '42QuITGgcZVEUKNXk')
      e.target.reset()
  };

  return (
    <div className="container">
      <h1>Contact us</h1>
      <p className="sub-title">MASKAN SOCIALS</p>

      <div id="contact-container">
        <div className="contact-info">
          <h4>contact information</h4>
          <p>fill up the form and the click send</p>

          <div className="icon-text">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>0712-345-678</span>
          </div>

          <div className="icon-text">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <span>adminmaskan@gmail.com</span>
          </div>

          <div className="icon-text">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>Nairobi, Kenya</span>
          </div>

          <div className="social-media">
            <a className="icon-circle">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a className="icon-circle">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a className="icon-circle">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="col-2">
            <div className="form-group">
              <label>first name</label>
              <input name='name' className="input" type="text" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name='email' className="input" type="email" />
            </div>
          </div>

          <div className="col-2">
            <div className="form-group solo">
              <label>message</label>
              <textarea name='message'></textarea>
            </div>
          </div>

          <div className="col-2">
            <div className="form-group right">
              <button type="submit" value="Send"className="primary">send message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
