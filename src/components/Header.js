import React, { useEffect, useState } from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES} from '../utils/constans';
import { toggleGptSearchView } from '../utils/gptSlice';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
    } , []);

    const handleGptSearchClick = () =>{
      // toggle gpt search 
      dispatch(toggleGptSearchView());
      
    }
    const handleLanguageChange =  (e) =>{
      dispatch(changeLanguage(e.target.value))
    } 
  return (
    <div className='absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between '>
        <img 
        className='w-44 mx-auto md:mx-0'
        src = {LOGO}
        alt='logo'/>
        {user && 
          <div className='flex p-2 justify-between'>
            {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>}
            <button className='px-4 py-2 mx-4 my-2 bg-purple-800 text-white rounded-lg border-none' onClick={handleGptSearchClick}>{showGptSearch ? "HomePage" : "GptSearch"}</button>
            <img className="hidden md:block w-12 h-12"src= {user?.photoURL} alt='usericon' />
          <button onClick={handleSignOut}className='font-bold text-white'>(SignOut)</button>
          </div>
        }
        </div>
  )
}

export default Header