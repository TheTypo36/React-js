// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDP83CAgCL87DzzsglZ66s5sUYjRXxpJ5s',
  authDomain: 'react-hooks-blog-1f769.firebaseapp.com',
  projectId: 'react-hooks-blog-1f769',
  storageBucket: 'react-hooks-blog-1f769.appspot.com',
  messagingSenderId: '742036924778',
  appId: '1:742036924778:web:80719d8d4226a32a601d13',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
