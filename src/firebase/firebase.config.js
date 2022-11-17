// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


//.env.local file likhte hobe

// REACT_APP_apiKey=AIzaSyABdsFcdOpqLmfSnwkCpP9iZH6KfU3kEQc
// REACT_APP_authDomain=practice-for-email.firebaseapp.com
// REACT_APP_projectId=practice-for-email
// REACT_APP_storageBucket=practice-for-email.appspot.com
// REACT_APP_messagingSenderId=974715361266
// REACT_APP_appId=1:974715361266:web:9bd55af13a786249ecbd6b