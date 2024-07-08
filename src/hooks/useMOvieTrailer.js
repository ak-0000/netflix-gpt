import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constans';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMOvieTrailer = (movie_id) => {
    const dispatch = useDispatch();
    const getMOviesVideo = async() =>{
         const data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', API_OPTIONS);
         const json = await data.json();
        //  console.log(json);
         const filterdata = json.results.filter((video) => video.type === "Trailer");
         const trailer = filterdata.length ? filterdata[0] : json.results[1];
         console.log(trailer);
         dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
        getMOviesVideo();
    } , []);
}

export default useMOvieTrailer


