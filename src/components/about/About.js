import React from 'react'
import { RiHomeHeartLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";


import './about.css'

function About() {
  return (
    <>
      <div className='about_page'>
        <div className='about_header'>
          <img src='https://i.ibb.co/S65L0Jd/exterior33.jpg' alt='About_img' loading='lazy'></img>
          <h3>About Us</h3>
        </div>
        <div className='about_intro'>
          <p>Welcome to <span>Maskan Kenya</span>, where your journey to finding the perfect home begins. We understand that buying or selling a property is a significant milestone, and our mission is to make this process seamless and rewarding for you.</p>
        </div>
        <div className='about_us'>
          <img src="https://i.ibb.co/7v50CjN/interior1.jpg" alt="interior1" border="0"/>
          <div className='why_us'>
            <h4>OUR GREAT SERVICES</h4>
            <h3>Why Choose Us</h3>
            <p>At Maskan Kenya, we are a team of dedicated professionals with a passion for real estate. Our expertise spans across various aspects of the industry, including residential and commercial properties. Whether you are a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to guide you every step of the way.</p>

            <a href='/auth'>Get Started</a>
          </div>
        </div>
        <div className='about_services'>
              <div className='ser card_one'>
                <RiHomeHeartLine className='ser-icon'/>
                <h3>Property Insurance</h3>
                <p>A series of policies that offer either property of coverage</p>
              </div>
              <div className='ser card_two'>
                <FaRegMoneyBillAlt className='ser-icon'/>
                <h3>Tax Advantage</h3>
                <p>Tax advantage which applies to investments</p>
              </div>
              <div className='ser card_three'>
                <BsGraphDownArrow className='ser-icon'/>
                <h3>Lowest Commission</h3>
                <p>No longer have to negotiate and hoggle other agents</p>
              </div>
              <div className='ser card_four'>
                <BsBuildings className='ser-icon'/>
                <h3>Perfect Property</h3>
                <p>Top rated property sales all over the country</p>
              </div>

            </div>


      </div>
    </>
  )
}

export default About