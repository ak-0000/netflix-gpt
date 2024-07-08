import React, { useEffect, useState } from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO} from '../utils/constans';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSignOut = () =>{
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        navigate("/error")
        // An error happened.
      });
      
    }
    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email, displayName , photoURL} = user;
          dispatch(addUser({uid : uid , email:email ,displayName:displayName , photoURL: photoURL}))
          
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }

      });
      // unsubscrbe when component unbound
      return ()=> unsubscribe(); 
    } , [])
  return (
    <div className='absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44'
        src = {LOGO}
        alt='logo'/>
        {user && 
          <div className='flex p-2'>
            <img className="w-12 h-12"src= {user?.photoURL} alt='usericon' />
          <button onClick={handleSignOut}className='font-bold text-white'>(SignOut)</button>
          </div>
        }
        </div>
  )
}

export default Header