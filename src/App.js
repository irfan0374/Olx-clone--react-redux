import React,{useEffect,useContext} from 'react';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import Post from './store/postContext'
import { AuthContext, FirebaseContext } from './store/firebaseContext';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  const {setUser}=useContext(AuthContext)
  const {app}=useContext(FirebaseContext)
  const auth=getAuth()
  useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
    if(user){
      setUser(user)
      const uid=user.uid
    }else{
      // User is signed out
      console.log('user is signed out')
    }
   })

   
  })
  return (
    <div>
      <Post>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element ={<Login/>} />
          <Route path='/create' element ={<Create/>} />
          <Route path='/viewpost' element ={<ViewPost/>} />
      </Routes>
    </Router>
    </Post>
    </div>
  );
}

export default App;
