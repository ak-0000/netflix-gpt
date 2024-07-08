import React from 'react'
import {  useSelector } from 'react-redux';
import useMOvieTrailer from '../hooks/useMOvieTrailer';

const VideoBackground = ({movie_id}) => {
    
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMOvieTrailer(movie_id);
    
  return (
    <div >
        <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1&mute=1"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground