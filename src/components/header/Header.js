import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='nav'>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/classified" >Classifieds</NavLink>
            </li>
            <li>
                <NavLink to="/properties" >properties</NavLink>
            </li>

        </ul>
    </div>
  )
}

export default Header