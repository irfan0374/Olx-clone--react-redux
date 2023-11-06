import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate,Link,NavLink}from 'react-router-dom'
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    const auth=getAuth()
    signInWithEmailAndPassword(auth,email,password).then(()=>{
     navigate('/')
    }).catch((error)=>{
    alert(error.message)
    })
  }
 
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            defaultValue="Doe"
            required
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <p>Don't have an account<NavLink to='/signup'>Signup</NavLink></p>
      </div>
    </div>
  );
}

export default Login;
