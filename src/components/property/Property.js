import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import './property.css'

function Property() {
  return (
    <div className='flats'>
      <div className='main-card'>
        <div className='card-img'>
          <img alt='home-img' src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className='home-img'/>
          <div className='type'>
            <span>For Rent</span>
          </div>
          <div className='m-button'>
            <button>More details</button>
          </div>
        </div>
        <div className='details'>
          <div className='home-details'>
            <span className='home-name'>Flat Name</span>
            <span className='location'><BiCurrentLocation />location</span>
          </div>
          <div className='price'>Ksh 5999</div>
        </div>
      </div>
      <div className='main-card'>
        <div className='card-img'>
          <img alt='home-img' src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className='home-img'/>
          <div className='type'>
            <span>For Sale</span>
          </div>
          <div className='m-button'>
            <button>More details</button>
          </div>
        </div>
        <div className='details'>
          <div className='home-details'>
            <span className='home-name'>Flat Name</span>
            <span className='location'><BiCurrentLocation />location</span>
          </div>
          <div className='price'>Ksh 8999</div>
        </div>
      </div>
     
    </div>
  )
}

export default Property