import React, { useState } from 'react'
import ProfileNav from './ProfileNav'
import './profile.css'


function CreateClassified() {

  // const [newClassified, setNewClassified] = useState({
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   contact: '',
  //   location: '',
  //   occupation: '',
  //   description: '',
  //   img: ''
  // })
  const [fName, setFname] = useState('')
  const [lName, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [location, setLocation] = useState('')
  const [occupation, setOccupation] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const apiUrl = "http://127.0.0.1:3000/classifieds"
  const [errors, setErrors] = useState()
  const token = localStorage.token
  
  function handleCreateClassified(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', fName)
    formData.append('last_name', lName)
    formData.append('email', email)
    formData.append('contact', contact)
    formData.append('location', location)
    formData.append('occupation', occupation)
    formData.append('description', description)
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
      console.log(errors);
    });

   
  }

  function handleImage(e){
    setImage(e.target.files[0]);
  }
  return (
    <div className="create-classifieds-container">
      <ProfileNav />
      <div className='create-classifieds'>
        <h2>Advertise your services</h2>

        <div className='create-classified-form'>
          <form className='create-classified' onSubmit={handleCreateClassified}>
            <label htmlFor='classified-img' className='classified-img-label'>Job Image</label>
            <input required type='file' accept='image/*' id='classified-img' className='classified-img' onChange={handleImage}/>
            <br/>
            <label htmlFor='classified-fname' className='classified-fname-label'>First name</label>
            <input required type='text' id='classified-fname' className='classified-fname' value={fName} onChange={(e)=> setFname(e.target.value)}/>
            <br/>
            <label htmlFor='classified-lname' className='classified-lname-label'>Last name</label>
            <input required type='text' id='classified-lname' className='classified-lname' value={lName} onChange={(e)=> setLname(e.target.value)}/>
            <br/>

            <label htmlFor='classified-location'className='classified-location-label'>Location</label>
            <input required type='text' id='classified-location' className='classified-location' value={location} onChange={(e)=> setLocation(e.target.value)}/>
            <br/>

            <label htmlFor='classified-occupation'className='classified-occupation-label'>Occupation</label>
            <input required type='text' id='classified-occupation' className='classified-occupation' value={occupation} onChange={(e)=> setOccupation(e.target.value)}/>
            <br/>

            <label htmlFor='classified-contact'className='classified-contact-label'>Contact</label>
            <input required type='number' id='classified-contact' className='classified-contact' value={contact} onChange={(e)=> setContact(e.target.value)}/>
            <br/>

            <label htmlFor='classified-email'className='classified-email-label'>Email</label>
            <input required type='text' id='classified-email' className='classified-email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <br/>

            <label htmlFor='classified-desc'className='classified-desc-label'>Description</label>
            <textarea required type='field' id='classified-desc' rows={1} cols={20} className='classified-desc' value={description} onChange={(e)=> setDescription(e.target.value)}/>
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