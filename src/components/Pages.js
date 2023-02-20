import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './Header'
import Footer from './Footer'
import About from './About'
import Property from './Property'
import Classifieds from './Classifieds'
import Home from './Home'
import Contact from './Contact'

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
        </Router>
    </>
  )
}

export default Pages