// Both the login and signup action is done in this file

import React, { useState } from 'react'
import './auth.css'

function Auth() {
    const [userDetails, setUserDetails] = useState({
        first_name:'',
        last_name:'',
        email:'',
        contact:'',
        location:'',
        category:'',
        password:'',
        password_confirmation:''
    })

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    function handleClear(e){
        e.preventDefault();
        console.log('clear');
        setLoginDetails({email: '', password:''});
        setUserDetails({
            first_name:'',
            last_name:'',
            email:'',
            contact:'',
            location:'',
            category:'',
            password:'',
            password_confirmation:''
        })
     
    }
  
    function handleSignup(e){
        e.preventDefault();
        console.log(userDetails);
    }

    function handleLogin(e){
        e.preventDefault();
        console.log(loginDetails);
    }
  return (
    <>
        <div className='auth'>
            <div className='login'>
                <h2>Login</h2>
                <p>Got an account? Login now</p>
                <form className='log-inputs' onSubmit={handleLogin}>
                    <input type='text' value={loginDetails.email} placeholder='Email' className='log-email' onChange={(e)=> setLoginDetails({...loginDetails, email: e.target.value})}/>
                    <input type='password' value={loginDetails.password} placeholder='Password' className='log-password'  onChange={(e)=> setLoginDetails({...loginDetails, password: e.target.value})}/>
                    <button type='submit'>Login</button>
                </form>
            </div>
            <div className='signup'>
                <h2>Register</h2>
                <p>Sign up here!</p>
                <form className='log-inputs' onSubmit={handleSignup}>
                    <div className='names'>
                        <input type='text' value={userDetails.first_name} placeholder='First name' className='first-name' onChange={(e)=> setUserDetails({...userDetails, first_name: e.target.value})}/>
                        <input type='text'  value={userDetails.last_name} placeholder='Last name' className='last-name' onChange={(e)=> setUserDetails({...userDetails, last_name: e.target.value})}/>
                    </div>
                    <input type='text'  value={userDetails.email} placeholder='Email' className='email' onChange={(e)=> setUserDetails({...userDetails, email: e.target.value})}/>
                    <input type='text' value={userDetails.contact} placeholder='Contact' className='contact' onChange={(e)=> setUserDetails({...userDetails, contact: e.target.value})}/>
                    <input type='text'  value={userDetails.location} placeholder='Location' className='location' onChange={(e)=> setUserDetails({...userDetails, location: e.target.value})}/>

                    <input type='password'  value={userDetails.password} placeholder='Password' className='log-password' onChange={(e)=> setUserDetails({...userDetails, password: e.target.value})}/>
                    <input type='password'  value={userDetails.password_confirmation} placeholder='Confirm password' className='log-password-confirmation' onChange={(e)=> setUserDetails({...userDetails, password_confirmation: e.target.value})}/>

                    <div className='sign-buttons'>
                        <button type='submit'>Sign up</button>
                        <button onClick={handleClear}>Clear</button>
                    </div>
                    

                </form>
            </div>
        </div>
    </>
  )
}

export default Auth