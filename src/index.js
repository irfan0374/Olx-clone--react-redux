import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {app} from './firebase/config' 
import Context from './store/firebaseContext'
import { FirebaseContext } from './store/firebaseContext';

ReactDOM.render(
    <FirebaseContext.Provider value={({app})} >
        <Context>
        <App />
        </Context>
    </FirebaseContext.Provider>
, document.getElementById('root'));


