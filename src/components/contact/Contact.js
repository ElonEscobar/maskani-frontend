import React from 'react'
// import './contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'
// import IMG1 from '../assets/illustration@2x-85cce263ddf60035c6702cc57dd1fc2a-4d4c8.jpg'

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8c1mcvk', 'template_7lo643t', form.current, 'zEgGGsirEpKj4kZql')
    e.target.reset()
  }

  const form = useRef();

  return (
   <section>
    
    <div className="contact-container">
      
      <form ref={form} onSubmit={sendEmail}>
        <h1>Talk to us?</h1>

 
        <input type='text' name='name' placeholder='Your full name' required/>
        
        <input type='email' name='email' placeholder='Your email address' required/>
         
        <textarea name='message' rows="10" placeholder='Message...'></textarea>
        <button className='btn'>Send message</button>
      </form>
    </div>
    <div className='contact-pic'>
    <img src='https://marvelapp.com/static/illustration@2x-85cce263ddf60035c6702cc57dd1fc2a-4d4c8.jpg' alt='contact-pic'/>

    </div>
   
  
   </section>

  
   
  )
}

export default Contact