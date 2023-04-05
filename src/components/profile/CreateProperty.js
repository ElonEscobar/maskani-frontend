import React, { useState } from 'react'
import ProfileNav from './ProfileNav'
import './profile.css'
import { BiCurrentLocation } from 'react-icons/bi'
import '../property/property.css'

function CreateProperty() {
  
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [amenities, setAmenities] = useState('')
  const [pType, setPType] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const apiUrl = "http://127.0.0.1:3000/properties"
  const [errors, setErrors] = useState()
  const token = localStorage.token
  

  function handleCreateProperty(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name)
    formData.append('location', location)
    formData.append('description', description)
    formData.append('amenities', amenities)
    formData.append('property_type', pType)
    formData.append('price', price)
    formData.append('image', image)

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }).then(res => res.json()).then((data) => {
      console.log('success');
      console.log(data);

    }).catch((err) => {
      setErrors(err)
      console.log('something went wrong');
      console.log(errors);
    });
  }
  
  function handleImage(e){
    setImage(e.target.files[0])
  }

  return (
    <div className="create-property-container">
        <ProfileNav/>
        <div className='create-properties'>
          <h2>Start advertising your properties here</h2>

          <div className='create-property-form'>
            <form className='create-property' onSubmit={handleCreateProperty}>
              <label htmlFor='property-img' className='property-img-label'>Property Image</label>
              <input required type='file' accept='image/*' id='property-img' className='property-img'  onChange={handleImage}/>
              <br/>
              <label htmlFor='property-name' className='property-name-label'>Property name</label>
              <input required type='text' id='property-name' className='property-name' value={name} onChange={e => setName(e.target.value)}/>
              <br/>

              <label htmlFor='property-location'className='property-location-label'>Property location</label>
              <input required type='text' id='property-location' className='property-location' value={location} onChange={e => setLocation(e.target.value)}/>
              <br/>

              <label htmlFor='property-desc'className='property-desc-label'>Property description</label>
              <textarea required type='field' id='property-desc' rows={1} cols={20} className='property-desc' value={description} onChange={e => setDescription(e.target.value)}/>
              <br/>

              <label htmlFor='property-amenities'className='property-amenities-label'>Property amenities</label>
              <input type='text' id='property-amenities' className='property-amenities' value={amenities} onChange={e => setAmenities(e.target.value)}/>
              <br/>

              <label htmlFor='property-type'className='property-type-label'>Type of property</label>
              <select  className='property-type' id='property-type' onChange={e => setPType(e.target.value)}>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
              <br/>

              <label htmlFor='property-price'className='property-price-label'>Price</label>
              <input required type='number' id='property-price' className='property-price' value={price} onChange={e => setPrice(e.target.value)}/>
              <br/>

              <button type='submit' className='create-new-property-button'>create property</button>
            </form>

          </div>
          {/*  */}
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