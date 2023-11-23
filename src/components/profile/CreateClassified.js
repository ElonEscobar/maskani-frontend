import React, { useEffect, useState } from 'react'
import ProfileNav from './ProfileNav'
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from 'react-icons/ri'
import { animateScroll as scroll } from 'react-scroll';

import './profile.css'


function CreateClassified() {

  const [sName, setsName] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const apiUrl = "http://127.0.0.1:3000/classifieds"
  const [errors, setErrors] = useState()
  const [classifieds, setClassifieds] = useState([])
  const token = localStorage.token
  const userId = localStorage.userId

  const [isUpdating, setIsUpdating] = useState(false)

  // get classifieds and update dom

  useEffect(()=>{
    try {
      const getClassifieds = async () =>{
        let req = await fetch(`http://127.0.0.1:3000/users/${userId}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        if (req.ok){
          let data = await req.json()
          setClassifieds(data.classifieds)
        }else{
          console.log('Failed to fetch')
        }

      }
      getClassifieds();

    } catch (error) {
      console.log('Something went wrong')
    }
  },[])

  // clear inputs

  const clearInputs = () => {
    setDescription('')
    setImage('')
    setLocation('')
    setsName('')
  }

  // 

  const handleFormSubmit = (e) => {
    e.preventDefault()

    isUpdating ? updateService(): handleCreateClassified()
  }


  // create service POST
  
  function handleCreateClassified(){
    
    const formData = new FormData();
    formData.append('name', sName)
    formData.append('location', location)
    formData.append('description', description)
    formData.append('image', image)

   
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }).then(res => res.json()).then((data) => {
      console.log(data);
      alert('success');
      window.location.reload();

    }).catch((err) => {
      setErrors(err)
      console.log(errors);
    });

   
  }

  function handleImage(e){
    setImage(e.target.files[0]);
  }

  // handle service deletion
  const handleDeleteService = async(id) =>{
    try {
      let req = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (req.ok){
        console.log(`Deleted ${id}`)
        alert('Deleted service')
        window.location.reload();
      }else{
        console.log('something went wrong')
      }
    } catch (error) {
      console.log('Error',error)
    }

  }

  // fill in the form inputs with the values to be updated
  const handleServiceUpdate = async(id) => {
    localStorage.serviceId = id
    console.log('service to edit:', id)
    
    let serviceToEdit = classifieds.find((classified) => classified.id === id)
    console.log(serviceToEdit)
    
    setLocation(serviceToEdit.location)
    setsName(serviceToEdit.first_name)
    setImage(serviceToEdit.image_data)
    setDescription(serviceToEdit.description)
    
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart'
    })
    
    setIsUpdating(true)
  }
  
  // handle service update

  const updateService = async() => {
    let id = localStorage.serviceId
    
    const formData = new FormData()
    formData.append('name', sName)
    formData.append('location', location)
    formData.append('description', description)
    formData.append('image', image)

    try {
      const req = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
      if(req.ok){
        const res = await req.json()
        console.log(res)
        alert('updated service successfully')
        window.location.reload()
      }else{
        console.log('something went wrong')
      }

    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <div className="create-classifieds-container">
      <ProfileNav />
      <div className='create-classifieds'>
        <h2>Advertise your services</h2>

        <div className='create-classified-form'>
          <form className='create-classified' onSubmit={handleFormSubmit}>
            <label htmlFor='classified-img' className='classified-img-label'>Job Image</label>
            <input  type='file' accept='image/*' id='classified-img' className='classified-img' onChange={handleImage}/>
            <br/>
            <label htmlFor='classified-fname' className='classified-fname-label'>Service title</label>
            <input required type='text' id='classified-fname' className='classified-fname' value={sName} onChange={(e)=> setsName(e.target.value)}/>
            <br/>

            <label htmlFor='classified-location'className='classified-location-label'>Location</label>
            <input required type='text' id='classified-location' className='classified-location' value={location} onChange={(e)=> setLocation(e.target.value)}/>
            <br/>


            <label htmlFor='classified-desc'className='classified-desc-label'>Description</label>
            <textarea required type='field' id='classified-desc' rows={3} cols={20} className='classified-desc' value={description} onChange={(e)=> setDescription(e.target.value)}/>
            <br/>

            <button type='submit' className='create-new-classified-button'>{isUpdating? 'Update Changes': 'Create Service'}</button>
          </form>
        </div>

        <h2>Created Services</h2>
        <div className='my-classifieds'>
        {
          classifieds.length > 0 ?
            classifieds.map((service) => {
              return(
                <div className='classified-main-card' key={service.id}>
                  <div className='classified-img-card'>
                    <img alt='img' src={service.image_data}></img>
                    <div className='serv-crud-btns'>
                      <MdOutlineModeEdit className='edit-pro-btn' role='button' onClick={() => handleServiceUpdate(service.id)}/>
                      <RiDeleteBin5Line className='delete-pro-btn' role='button' onClick={()=> handleDeleteService(service.id)}/>
                    </div>
                  </div>
                  <div className='classified-details'>
                    <div className='name'>{service.first_name}</div>
                    <p className='desc'>{service.description}</p>
                  </div>
                </div> 
              )

            })
            :
            <h2>No services created yet</h2>

        }
        </div>

      </div>
    </div>
  )
}

export default CreateClassified