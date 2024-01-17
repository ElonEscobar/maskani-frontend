import React from "react";
import "./contact.css"

function contact(){

  return(
    <div className="container">
      <h1>Contact us</h1>
      <p className="sub-title">Lorem ipsum</p>

      <div id="contact-container">
        <div className="contact-info">
            <h4 >
              contact information
            </h4>

            <p>fill up the form and the click send</p>

            <div className="icon-text">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>0712-345-678</span>
            </div>

            <div className="icon-text">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <span>adminmaskan@gmail.com</span>
            </div>

            <div className="icon-text">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>Nairobi,Kenya</span>
            </div>

            

            <div className="social-media">
              <a href="#" className="icon-circle">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>

              <a href="#" className="icon-circle">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>

              <a href="#" className="icon-circle">
              <i class="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
        </div>

        <form className="form">
          <div className="col-2">

            <div className="form-group">
              <label>first name</label>
              <input className="input" type="text"/>
            </div>

             <div className="form-group">
              <label>last name</label>
              <input className="input" type="text"/>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input className="input" type="email"/>
            </div>
          </div>


           <div className="col-2">
           <div className="form-group solo">
              <label>message</label>
              <textarea></textarea>
            </div>

           </div>


          <div className="col-2">
           <div className="form-group right">
           <button className="primary">send message</button>
           </div>
          </div>


        </form>
      </div>

    </div>
  )
}

export default contact
