import React from 'react'
import { IMG_CDN_URL } from '../utils/constans'

const MovieCart = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'> 
        <img alt='movieCard' src= {IMG_CDN_URL + posterPath}/> 
    </div>
  )
}

export default MovieCart