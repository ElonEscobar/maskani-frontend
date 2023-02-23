import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='nav'>
        <ul className='navlinks'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/properties" >Properties</NavLink>
            </li>
            
            <li>
                <NavLink to="/classified" >Classifieds</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            

        </ul>
    </div>
  )
}

export default Header