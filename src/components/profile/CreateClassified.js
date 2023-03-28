import React, { useState } from 'react'
import ProfileNav from './ProfileNav'
import './profile.css'


function CreateClassified() {

  const [newClassified, setNewClassified] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    location: '',
    occupation: '',
    description: '',
    img: ''
  })

  function handleCreateClassified(e){
    e.preventDefault();
    console.log(newClassified);
  }
  return (
    <div className="create-classifieds-container">
      <ProfileNav />
      <div className='create-classifieds'>
        <h2>Advertise your services</h2>

        <div className='create-classified-form'>
          <form className='create-classified' onSubmit={handleCreateClassified}>
            <label id='classified-img' className='classified-img-label'>Job Image</label>
            <input required type='file' accept='image/*' id='classified-img' className='classified-img' value={newClassified.img} onChange={(e)=> setNewClassified({...newClassified, img: e.target.value})}/>
            <br/>
            <label id='classified-fname' className='classified-fname-label'>First name</label>
            <input required type='text' id='classified-fname' className='classified-fname' value={newClassified.first_name} onChange={(e)=> setNewClassified({...newClassified, first_name: e.target.value})}/>
            <br/>
            <label id='classified-lname' className='classified-lname-label'>Last name</label>
            <input required type='text' id='classified-lname' className='classified-lname' value={newClassified.last_name} onChange={(e)=> setNewClassified({...newClassified, last_name: e.target.value})}/>
            <br/>

            <label id='classified-location'className='classified-location-label'>Location</label>
            <input required type='text' id='classified-location' className='classified-location' value={newClassified.location} onChange={(e)=> setNewClassified({...newClassified, location: e.target.value})}/>
            <br/>

            <label id='classified-occupation'className='classified-occupation-label'>Occupation</label>
            <input required type='text' id='classified-occupation' className='classified-occupation' value={newClassified.occupation} onChange={(e)=> setNewClassified({...newClassified, occupation: e.target.value})}/>
            <br/>

            <label id='classified-contact'className='classified-contact-label'>Contact</label>
            <input required type='text' id='classified-contact' className='classified-contact' value={newClassified.contact} onChange={(e)=> setNewClassified({...newClassified, contact: e.target.value})}/>
            <br/>

            <label id='classified-email'className='classified-email-label'>Email</label>
            <input required type='text' id='classified-email' className='classified-email' value={newClassified.email} onChange={(e)=> setNewClassified({...newClassified, email: e.target.value})}/>
            <br/>

            <label id='classified-desc'className='classified-desc-label'>description</label>
            <textarea required type='field' id='classified-desc' rows={1} cols={20} className='classified-desc' value={newClassified.description} onChange={(e)=> setNewClassified({...newClassified, description: e.target.value})}/>
            <br/>

            <button type='submit' className='create-new-classified-button'>create service</button>
          </form>
        </div>

        <div className='my-classifieds'>
          <h2>Created Services</h2>

        </div>

      </div>
    </div>
  )
}

export default CreateClassified