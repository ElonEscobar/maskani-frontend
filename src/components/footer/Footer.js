import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <p>&copy; {currentYear} My Website. All rights reserved.</p>

  </div>
);
}


export default Footer