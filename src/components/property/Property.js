import React from 'react'
import './property.css'

function Property() {
  return (
    <div className='flats'>
      <div className='main-card'>
        <div className='card-img'>
          <div className='type'>
            <span>For Sale</span>
          </div>
          <div className='m-button'>
            <button>More details</button>
          </div>
        </div>
        <div className='details'>
          <div>
            <span>Flat Name</span>
            <i class='fas fa-map-marker-alt'></i>
          </div>
          <div className='price'>5999</div>
        </div>
      </div>
      <div className='main-card'>
        <div className='card-img'>
          <div className='type'>
            <span>For Sale</span>
          </div>
          <div className='m-button'>
            <button>More details</button>
          </div>
        </div>
        <div className='details'>
          <div>
            <span>Flat Name</span>
            <span>location</span>
          </div>
          <div className='price'>4999</div>
        </div>
      </div>
     
    </div>
  )
}

export default Property