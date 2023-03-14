import React from 'react'
import './home.css'
import { IoHomeSharp } from 'react-icons/io5'
import Property from './property/Property'

function Home() {
  return (
    <>
      <div className="home">
        <img src="https://i.ibb.co/TtM2ckm/home-background.jpg" alt="home-background" border="0"></img>
        <div className='home-intro'>
          <div className='title'>WELCOME TO <div>MASKANI KENYA</div></div>
          <div className='detail'>FIND YOUR DREAM HOME WITH US</div>
          <p>Maskani Kenya is the trusted resource for home buyers, sellers, and dreamers offering the most comprehensive source of for-sale or rent properties</p>
          
          <button>Read More</button>
          <IoHomeSharp className='home-icon'/>

        </div>
      </div>
      <div className="recent-properties">
        
        <div className='r-header'>
          <h1>Recent Properties </h1>
          <h3>View recently posted properties</h3>
        </div>
        <Property />  
      </div>      
    </>
  )
}

export default Home