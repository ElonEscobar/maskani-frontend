import React from 'react'
import './home.css'

function Home() {
  return (
    <>
      <div className="home">
        <img src="https://i.ibb.co/TtM2ckm/home-background.jpg" alt="home-background" border="0"></img>
        <div className='home-intro'>
          <div className='title'>WELCOME TO MASKANI KENYA</div>
          <div className='detail'>FIND YOUR DREAM HOME WITH US</div>
          <p>Maskani Kenya is the trusted resource for home buyers, sellers, and dreamers offering the most comprehensive source of for-sale or rent properties</p>
          
          <button>Read More</button>
        </div>
      </div>      
    </>
  )
}

export default Home