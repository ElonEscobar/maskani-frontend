import React, { useEffect, useState } from 'react'
import ProfileNav from './ProfileNav'
import './profile.css'


function Profile({ user }) {

  const [fName, setFName] = useState('')
  const [sName, setSName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')

  const token = localStorage.token;
  const userId = localStorage.userId;
  const apiUrl = `http://127.0.0.1:3000/users/${userId}`

  const [err, setErr] = useState([])
  const [isUpdated, setIsUpdated] = useState(false);

  
  useEffect(()=>{
    console.log(userId);
    fetch(apiUrl, {
      method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        }
    })
    
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFName(data.first_name);
        setSName(data.last_name)
        setEmail(data.email);
        setLocation(data.location);
        setTel(data.contact)
        setCategory(data.category);
      })
  }, [])


  const handleUpdate = (e) => {
    e.preventDefault();

    const userData = {
      first_name: fName,
      last_name: sName,
      email: email,
      contact: tel,
      location: location,
      category: category

    }

 
    async function updateUser() {
      let req = await fetch(apiUrl, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(userData)
      })
      if(req.status > 199 && req.status < 300){
        let res = await req.json()
        console.log(res)
        setFName(res.first_name);
        setSName(res.last_name);
        setEmail(res.email);
        setLocation(res.location);
        setTel(res.contact);
        setIsUpdated(true);
        console.log('success')
        
      }else{
        let errors = await req.json()
        setErr(errors);
        console.log(err);
      }
    }
    updateUser()


  }
  return (
    <div className='main-profile-page'>
      <ProfileNav />
      <div className='user-info'>
        <h2 className="user-info-header">Update User Information here</h2>

        <form className='user'>
          <div className='usr'>
            <label htmlFor='fName'>First Name</label>
            <input type='text' id='fName' required value={fName} onChange={(e) => setFName(e.target.value)}/>
          </div>
          <div className='usr'>
            <label htmlFor='lName'>Last Name</label>
            <input type='text' id='lName' required value={sName} onChange={(e) => setSName(e.target.value)}/>
          </div>
          <div className='usr'>
            <label htmlFor='email'>Email Address</label>
            <input type='text' id='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='usr'>
            <label htmlFor='contact'>Contact</label>
            <input type='tel' id='contact' required value={tel} onChange={(e) => setTel(e.target.value)}/>
          </div>
          <div className='usr'>
            <label htmlFor='location'>Location</label>
            <input type='text' id='location' required value={location} onChange={(e) => setLocation(e.target.value)}/>
            
          </div>
          {
            isUpdated ? 
              <div className='success-popup'>
                <h3>Updated successfully</h3>
              </div>:<h2>...</h2>
            
            
          }
          <button className='update-usr-button' onClick={handleUpdate}>Save Changes</button>
        </form>

      </div>

    </div>
  )
}

export default Profile