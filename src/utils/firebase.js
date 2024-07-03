// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBArNTiMqxLq4IJYAFdMR0LFw9o4LdMY0s",
  authDomain: "netflix-gpt-fd496.firebaseapp.com",
  projectId: "netflix-gpt-fd496",
  storageBucket: "netflix-gpt-fd496.appspot.com",
  messagingSenderId: "45228869009",
  appId: "1:45228869009:web:842db4ca7474ef0418c630",
  measurementId: "G-M4TSVJ6JRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();