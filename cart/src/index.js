import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCODeNqGvKXBdvXMXLSF-FyszLj71w5-Vs",
  authDomain: "cart-1257b.firebaseapp.com",
  projectId: "cart-1257b",
  storageBucket: "cart-1257b.appspot.com",
  messagingSenderId: "1086518673254",
  appId: "1:1086518673254:web:a289bfcf81d365454292a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


