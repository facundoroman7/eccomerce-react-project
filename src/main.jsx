import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUiK7biRYR3k5iAD1Nl8lmMbO4X5dr_aU",
  authDomain: "tiendalibros-f8b55.firebaseapp.com",
  projectId: "tiendalibros-f8b55",
  storageBucket: "tiendalibros-f8b55.appspot.com",
  messagingSenderId: "477452206946",
  appId: "1:477452206946:web:4b4df32ef1d9a41888223b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>

  <ChakraProvider>

    <App />
  </ChakraProvider>


  </React.StrictMode>,
)
