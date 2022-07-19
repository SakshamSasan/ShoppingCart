import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAaBeIds55303yoIcM_cGx7X3DEgQ7rGIM",
  authDomain: "cart-ac81a.firebaseapp.com",
  projectId: "cart-ac81a",
  storageBucket: "cart-ac81a.appspot.com",
  messagingSenderId: "441047252209",
  appId: "1:441047252209:web:41d4a762e433d71acd3d50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getFirestore(app);
export default db;

const root = ReactDOM.createRoot(document.getElementById('root')||document.createElement('div'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
