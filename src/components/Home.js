import React from 'react'
import './home.css'
import { IoHomeSharp } from 'react-icons/io5'
import Property from './property/Property'
import Classifieds from './classifieds/Classifieds'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Home page img section */}
      <div className="home">
        <img src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="home-background" border="0"></img>
        <div className='home-intro'>
          <div className='title'>WELCOME TO <div>MASKAN KENYA</div></div>
          <div className='detail'>FIND YOUR DREAM HOME WITH US</div>
          
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>

        </div>
      </div>
      <div className='home-intro-p'>
        <p><span>Maskan Kenya</span> is the trusted resource for home buyers, sellers, and dreamers offering the most comprehensive source of for-sale or rent properties</p>
      </div>

      {/* Recents properties section */}
      <div className="recent-properties">
        
        <div className='r-header'>
          <h1>RECENT PROPERTIES</h1>
          <h3>View recently posted properties</h3>
        </div>
        <Property />  
      </div>

      {/* ad header */}
      <div className='middle'>
        <div className='ad'>
          <p>Find <span>your</span></p>
          <h3>Customers here</h3>
        </div>
        <div className='sign-ad'>
          <h2><Link to='/auth'><span> Sign up </span></Link> with us now and start advertising your properties here</h2>
          <Link to='/auth'><button>Get started</button></Link>
        </div>
      </div>
    
      {/* Classifieds section */}
      <div className="recent-classifieds">
        <div className='cl-header'>
          <h1>CLASSIFIEDS</h1>
          <h3>Get professional service from our experts</h3>
        </div>
        <Classifieds />  
      </div>      
    </>
  )
}

export default Home