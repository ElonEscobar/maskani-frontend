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