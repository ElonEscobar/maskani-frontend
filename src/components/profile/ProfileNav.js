import React from 'react'
import './profile.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiLogOutCircle } from 'react-icons/bi'

function ProfileNav({ user, isLoggedIn }) {
  const navigate = useNavigate()

  function handleLogout(){
    localStorage.token = ''
    navigate('/')
    isLoggedIn(false);
  }
  return (
    <>
       <div className="profile">
          <img src='https://cdn-icons-png.flaticon.com/512/1246/1246314.png?w=740&t=st=1679683199~exp=1679683799~hmac=a8d4b23324ab7b5193f5171f824ae62906c8b68e9790c152db16323769c6d919' alt='profile-icon'/>
          <ul className='profile-nav'>
            <li>
              <NavLink to='/profile'>My Profile</NavLink>
            </li>
            <li>
              <NavLink to='/my-properties'>My Properties</NavLink>
            </li>
            <li>
              <NavLink to='/my-classifieds'>My Services</NavLink>
            </li>
            <li>
              <NavLink to='/my-items'>My Items</NavLink>
            </li>
          </ul>

          <button className='profile-nav-btn' onClick={handleLogout}> <BiLogOutCircle className='log-out-icon'/> Logout</button>
       </div>

     
       
      

        {/* <div className='profile-page'>
            <div className='side-nav'>
                <h2>Welcome back user</h2>
                
                <div className='side-nav-links'>
                    <div>Advertise property</div>
                    <div>Offer services</div>
                    <div>Advertise Items</div>
                </div>
            </div>

            <div className='profile-content'>

            </div>
        </div> */}
    </>
  )
}

export default ProfileNav