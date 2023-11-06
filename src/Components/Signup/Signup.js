import React,{useState,useEffect,useContext} from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/firebaseContext';
import { createUserWithEmailAndPassword, getAuth,updateProfile } from 'firebase/auth';
import {useNavigate,NavLink}from 'react-router-dom'
import {collection,addDoc, getFirestore }from 'firebase/firestore'

export default function Signup() {
  const [Username,setName]=useState('');
  const [Email,setEmail]=useState('');
  const [Phone,setPhone]=useState('');
  const [Password,setPassword]=useState('');
  const navigate=useNavigate();
  const {app}=useContext(FirebaseContext)
  const haddleSubmit=(e)=>{
    e.preventDefault()
const auth=getAuth()
createUserWithEmailAndPassword(auth,Email,Password).then((result)=>{
  updateProfile(result.user, {displayName:Username}).then(()=>{
    addDoc(collection(getFirestore(),'users'),{
      id:result.user.uid,
      username:Username,
      phone:Phone,
    }).then(()=>{
      navigate('/login')
    })
  })
}
  )}
  const handleLogin=()=>{
    navigate('/login')
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={haddleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={Phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <p>already have an account? <NavLink to='/login'>Login</NavLink></p>
      </div>
    </div>
  );
}
