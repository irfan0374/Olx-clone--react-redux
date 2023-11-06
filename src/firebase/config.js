import { initializeApp } from 'firebase/app';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBIos99E2SXcCU4WHYdXFZno1574G527YQ",
    authDomain: "fir-af77b.firebaseapp.com",
    projectId: "fir-af77b",
    storageBucket: "fir-af77b.appspot.com",
    messagingSenderId: "295798935565",
    appId: "1:295798935565:web:8110caabe523412d860544",
    measurementId: "G-TEYM1FVP2G"
  };

 export const app = initializeApp(firebaseConfig);