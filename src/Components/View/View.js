import React,{useContext,useEffect,useState} from 'react';
import {postContext} from '../../store/postContext'
import {collection,query,where,getDocs,getFirestore, onSnapshot, QuerySnapshot}from 'firebase/firestore'

import './View.css';
import { FirebaseContext } from '../../store/firebaseContext';
function View() {
  const [userDetails,setUserdetails]=useState()
  const {postDetails}=useContext(postContext)
 
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}                                                   
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       
      </div>
    </div>
  );
}
export default View;
