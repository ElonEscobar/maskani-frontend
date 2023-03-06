import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'


function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">

      <div className='links'>

            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
      </div>

      <div className="socials">
            <a href='https://www.facebook.com/' title="follow us on Facebook" className="fa fa-facebook" target='_blank'></a>
            <a href='https://www.instagram.com/' title="follow us on instagram" className="fa fa-instagram" target='_blank'></a>
            <a href='https://twitter.com/' title="follow us on twitter" className="fa fa-twitter" target='_blank'></a>
      </div>

      <p>&copy; {currentYear} Maskani Kenya. All rights reserved.</p>

  </div>
);
}


export default Footer