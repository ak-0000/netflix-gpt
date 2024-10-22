import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, userAvatar } from '../utils/constans';
// import {checkValidDate} from '../utils'
const Login = () => {
    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    
    const [errorMessage , setErrorMessage] = useState(null) ;
    const handleButtonClick = () =>{
        // validate the form data
        // checkValidDate(email, password)
        const message  = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return ;
        // o/w 
        // Signin/signup
        if(!isSignInForm){
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: userAvatar,
                      }).then(() => {
                        // Profile updated!
                        // ...
                        const {uid,email, displayName , photoURL} = auth.currentUser;
                        dispatch(addUser({uid : uid , email:email ,displayName:displayName , photoURL: photoURL}))
                      }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(error.message);
                      });
                      
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+errorMessage);
            });
        }
        else{
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+errorMessage);
            });
         }
                    
    };
    const [isSignInForm,setIsSignInForm] = useState(true); 
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up "}</h1>
            {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700'/>}
            <input 
            ref={email}
            type="text" placeholder="Email-Address" className='p-4 my-4 w-full bg-gray-700'/>
            <input 
            ref={password}
            type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg ' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up "}</button>
            <p className='text-red-500'> {errorMessage}</p>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign Up Now " : "Already registered? Sign In Now"}</p>

        </form>
        <img className='h-screen object-cover md: w-screen' src={BG_URL}
        alt='bg'/>
        
        </div>
        </div>
  )
}

export default Login