import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './header/Header'
import Footer from './footer/Footer'
import About from './about/About'
import Property from './property/Property'
import Classifieds from './classifieds/Classifieds'
import Home from './Home'
import Contact from './contact/Contact'
import Auth from './auth/Auth'
import Profile from './profile/Profile'
import CreateProperty from './profile/CreateProperty'
import CreateClassified from './profile/CreateClassified'
import CreateItem from './profile/CreateItem'

function Pages() {

  // Auto-login 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const apiUrl = 'http://localhost:3000/auto_login'

  const setCurrentUser = (user) =>{
    setIsLoggedIn(true);
    setUser(user);
  }

  useEffect(() => {
    const token = localStorage.token;

    if (typeof token !== 'undefined' && token.length > 1 && token !== 'undefined'){
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({token})
      })
      .then(res => res.json())
      .then(data => setCurrentUser(data))
    }else{
      console.log('no token available, log in')
    }
  },[]);
  console.log(user);

  return (
    <>
        <Router>
            <Header isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route exact path='/auth' element={<Auth setIsLoggedIn={setIsLoggedIn}/>} />
                <Route exact path='/profile' element={<Profile user={user} isLoggedIn={isLoggedIn}/>} />
                <Route exact path='/my-properties' element={<CreateProperty />}/>
                <Route exact path='/my-classifieds' element={<CreateClassified />}/>
                <Route exact path='/my-items' element={<CreateItem />}/>

                

                <Route exact path='/about' element={<About/>} />
                <Route exact path='/properties' element={<Property/>} />
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='/classified' element={<Classifieds/>} />
                <Route exact path='/' element={<Home />} />

            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default Pages