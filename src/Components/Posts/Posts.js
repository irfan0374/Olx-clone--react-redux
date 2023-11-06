import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { postContext } from '../../store/postContext';
import { useNavigate } from 'react-router-dom';


function Posts() {
  const [products, setProduct] = useState([])
  const {setDetails} = useContext(postContext)
  const navigate = useNavigate()
  useEffect(()=>{
    getDocs(collection(getFirestore(), "product")).then((productDoc) => {
      const allpost = productDoc.docs.map((product) => {
        return {
          ...product.data(),
          id:product.id
        }
      })
       setProduct(allpost)
    },[])
    
  })
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.length == 0?
            <div class="loader"></div>
            :
            ''
          }
          { products.map((product) => {

           return <div
            className="card"
            onClick={() => {
              setDetails(product)
              console.log(product)
              navigate('/viewpost')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image"> 
              <img src={product.url} alt="" />
              
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price} </p>
              <span className="kilometer">{product.name}</span>
              <p className="name"> {product.category}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          })
          
         }
        </div>
      </div>
    
    </div>
  );
}

export default Posts;