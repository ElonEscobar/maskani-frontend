import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'

function Contact() {

  const sendEmail = (e) => {
    e.prventDefault();
    emailjs.sendForm('service_8c1mcvk', 'template_7lo643t', form.current, '1GnPFN6kcleLf31Gc')
    e.target.reset()
  }

  const form = useRef();

  return (
   <section>
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your full name' required/>
        <input type='email' name='email' placeholder='Your email address' required/>
        <textarea name='message' rows="10" placeholder='Message...'></textarea>
        <button className='btn'>Send message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact