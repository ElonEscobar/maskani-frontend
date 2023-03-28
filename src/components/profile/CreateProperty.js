import React, { useState } from 'react'
import ProfileNav from './ProfileNav'
import './profile.css'
import { BiCurrentLocation } from 'react-icons/bi'
import '../property/property.css'

function CreateProperty() {
  const [newProperty, setNewProperty] = useState({
    img: '',
    name: '',
    location: '',
    description: '',
    amenities: [],
    propertyType: '',
    price: ''
  })

  function handleCreateProperty(e){
    e.preventDefault();
    console.log(newProperty)
  }
  
  return (
    <div className="create-property-container">
        <ProfileNav/>
        <div className='create-properties'>
          <h2>Start advertising your properties here</h2>

          <div className='create-property-form'>
            <form className='create-property' onSubmit={handleCreateProperty}>
              <label id='property-img' className='property-img-label'>Property Image</label>
              <input required type='file' accept='image/*' id='property-img' className='property-img' value={newProperty.img} onChange={(e)=> setNewProperty({...newProperty, img: e.target.value})}/>
              <br/>
              <label id='property-name' className='property-name-label'>Property name</label>
              <input required type='text' id='property-name' className='property-name' value={newProperty.name} onChange={(e)=> setNewProperty({...newProperty, name: e.target.value})}/>
              <br/>

              <label id='property-location'className='property-location-label'>Property location</label>
              <input required type='text' id='property-location' className='property-location' value={newProperty.location} onChange={(e)=> setNewProperty({...newProperty, location: e.target.value})}/>
              <br/>

              <label id='property-desc'className='property-desc-label'>Property description</label>
              <textarea required type='field' id='property-desc' rows={1} cols={20} className='property-desc' value={newProperty.description} onChange={(e)=> setNewProperty({...newProperty, description: e.target.value})}/>
              <br/>

              <label id='property-amenities'className='property-amenities-label'>Property amenities</label>
              <input type='text' id='property-amenities' className='property-amenities' value={newProperty.amenities} onChange={(e)=> setNewProperty({...newProperty, amenities: e.target.value})}/>
              <br/>

              <label id='property-type'className='property-type-label'>Type of property</label>
              <select  className='property-type' id='property-type' value={newProperty.propertyType} onChange={(e)=> setNewProperty({...newProperty, propertyType: e.target.value})}>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
              <br/>

              <label id='property-price'className='property-price-label'>Price</label>
              <input required type='text' id='property-price' className='property-price' value={newProperty.price} onChange={(e)=> setNewProperty({...newProperty, price: e.target.value})}/>
              <br/>

              <button type='submit' className='create-new-property-button'>create property</button>
            </form>

          </div>
          <div className='my-properties'>
            <h2>Created Properties</h2>

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
        </div>
    </div>
  )
}

export default CreateProperty