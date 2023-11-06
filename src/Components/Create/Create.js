import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {useNavigate}from 'react-router-dom'
import {AuthContext} from '../../store/firebaseContext'
import {getDownloadURL, getStorage,ref,uploadBytesResumable}from 'firebase/storage'
import { addDoc, collection,getFirestore} from 'firebase/firestore';
const Create = () => {
  const [name,setName]=useState('');
  const [category,setCategory]=useState('');
  const [price,setPrice]=useState('');
  const [image,setImage]=useState('');
 
  const {user,setUser} =useContext(AuthContext)
  const navigate=useNavigate()
  const date=new Date()
  const handleSubmit = ()   =>{
   
    const storage=getStorage()
  
    const storageRef=ref(storage,`/image/${image.name}`);

    const uploadTask=uploadBytesResumable(storageRef,image)
    

    uploadTask.then(({ref})=>{
     
      getDownloadURL(ref).then((url)=>{
        addDoc(collection(getFirestore(),'product'),{
          name:name,
          category:category,
          price:price,
          url:url,
          userId:user.uid,
          createdAt:date.toDateString()
        }).then(()=>{
          alert('Your product is added succesfull')
          navigate('/')
        })
      })
    })

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
       
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" 
            type="number"
             id="fname" 
             value={price}
             onChange={(e)=>{
              setPrice(e.target.value)
             }}
            name="Price" />
            <br />
    
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
        
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
