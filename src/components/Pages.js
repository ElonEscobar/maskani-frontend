import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './header/Header'
import Footer from './footer/Footer'
import About from './about/About'
import Property from './property/Property'
import Classifieds from './classifieds/Classifieds'
import Home from './Home'
import Contact from './contact/Contact'

function Pages() {
  return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/properties' element={<Property/>} />
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='/classified' element={<Classifieds/>} />
                <Route exact path='/' element={<Home/>} />

            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default Pages