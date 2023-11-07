import React, { useEffect, useState } from 'react'
import ProfileNav from './ProfileNav'
import './profile.css'
import { BiCurrentLocation } from 'react-icons/bi'
import '../property/property.css'
import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin5Line } from 'react-icons/ri'

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
  const userId = localStorage.userId

  const [property, setProperty] = useState([]);

  useEffect(()=>{
    fetch(`http://127.0.0.1:3000/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.properties.length > 0 ){
          setProperty(data.properties)
        }else{
          setProperty([])
        }
      })
      .catch((err) => {
        setErrors(err)
        console.log(err)
      })
    
  },[])
  // console.log(property)
  
  

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
    }).then(res => res.json())
    .then((data) => {
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
              <select required className='property-type' id='property-type' onChange={e => setPType(e.target.value)}>
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
            {
              property.length > 0 ? 
                property.map((prop) => {
                  console.log(prop);
                  return(
                    <div className='main-card' key={prop.id}>
                    <div className='card-img'>
                      <img alt='home-img' src={prop.image_data} className='home-img' loading='lazy'/>
                      <div className='prop-actions'>
                        <div className='home-type'>{prop.home_type}</div>
                      
                        <div className='crud-btns'>
                          <div className='edit-pro-btn'>
                            <GrEdit/>
                          </div>
                          <div className='delete-pro-btn'>
                            <RiDeleteBin5Line/>
                          </div>
                        </div>
                      </div>
                      <div className='m-button'>
                        <button>More details</button>
                      </div>
                    </div>
                    <div className='details'>
                      <div className='home-details'>
                        <span className='home-name'>{prop.name}</span>
                        <span className='location'><BiCurrentLocation />{prop.location}</span>
                      </div>
                      <div className='price'>Ksh {prop.price}</div>
                    </div>
                  </div> 
                  )
                            
                 })
              :
              <h2>No Properties Owned</h2>             
            }
            

            
          </div>
        </div>
    </div>
  )
}

export default CreateProperty