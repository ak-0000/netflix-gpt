import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../utils/constans'

const GptSearch = () => {
  return (
    <><div className='fixed -z-10 '>
        <img className='h-screen object-cover md: w-screen' src={BG_URL}
        alt='bg'/>
    </div>
        <div className='' >
        <GptSearchBar/>
        <GptMoviesSuggestion/>
    </div></>
    
  )
}

export default GptSearch