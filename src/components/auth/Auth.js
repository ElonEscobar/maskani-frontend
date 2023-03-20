// Both the login and signup action is done in this file

import React, { useState } from 'react'
import './auth.css'

function Auth() {

    const [errors, setErrors] = useState([]);
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

        const apiUrl = 'http://127.0.0.1:3000/users'

        const signup = async () => {
            let res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify(userDetails)
            });
            if (res.status  > 199 && res.status < 300){
                let data = await res.json();
                console.log(data);
            }else {
                let err = await res.json();
                setErrors(err);
                console.log(errors);

            }

            
        };
        signup();
        console.log('creating user:');

    }


    function handleLogin(e){
        e.preventDefault();
        console.log(loginDetails);

        const apiUrl = 'http://127.0.0.1:3000/login';

        async function login(){
            let res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(loginDetails)
            });
            
            if (res.status  > 199 && res.status < 300){
                let data = await res.json();
                console.log(data);
                localStorage.token = data.jwt;
            }else {
                let err = await res.json();
                setErrors(err);
                console.log(errors);
            }
        }
        login();            
        console.log('logging in')
        

    }
  return (
    <>
        <div className='auth'>
            <div className='login'>
                <h2>Login</h2>
                <p>Got an account? Login now</p>
                <form className='log-inputs' onSubmit={handleLogin}>
                    <input type='text'required value={loginDetails.email} placeholder='Email' className='log-email' onChange={(e)=> setLoginDetails({...loginDetails, email: e.target.value})}/>
                    <input type='password'required value={loginDetails.password} placeholder='Password' className='log-password'  onChange={(e)=> setLoginDetails({...loginDetails, password: e.target.value})}/>
                    <button type='submit'>Login</button>
                </form>
            </div>
            <div className='signup'>
                <h2>Register</h2>
                <p>Sign up here!</p>
                <form className='log-inputs' onSubmit={handleSignup}>
                    <div className='names'>
                        <input type='text'required value={userDetails.first_name} placeholder='First name' className='first-name' onChange={(e)=> setUserDetails({...userDetails, first_name: e.target.value})}/>
                        <input type='text' required value={userDetails.last_name} placeholder='Last name' className='last-name' onChange={(e)=> setUserDetails({...userDetails, last_name: e.target.value})}/>
                    </div>
                    <input type='text' required value={userDetails.email} placeholder='Email' className='email' onChange={(e)=> setUserDetails({...userDetails, email: e.target.value})}/>
                    <input type='text'required value={userDetails.contact} placeholder='Contact' className='contact' onChange={(e)=> setUserDetails({...userDetails, contact: e.target.value})}/>
                    <input type='text' required value={userDetails.location} placeholder='Location' className='user-location' onChange={(e)=> setUserDetails({...userDetails, location: e.target.value})}/>
                    <select value={userDetails.category} className='category-select' onChange={(e)=> setUserDetails({...userDetails, category: e.target.value})}>
                        <option>select category</option>
                        <option>buyer</option>
                        <option>seller</option>
                    </select>

                    <input type='password' required value={userDetails.password} placeholder='Password' className='log-password' onChange={(e)=> setUserDetails({...userDetails, password: e.target.value})}/>
                    <input type='password' required value={userDetails.password_confirmation} placeholder='Confirm password' className='log-password-confirmation' onChange={(e)=> setUserDetails({...userDetails, password_confirmation: e.target.value})}/>

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