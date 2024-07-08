import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {addUnwatchedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constans';

const useUnwatchedMovies = () => {
    const dispatch = useDispatch();
    const getUnwatchedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUnwatchedMovies(json.results));
    }
  
    useEffect(() =>{
      getUnwatchedMovies(); 
    },[])
}

export default useUnwatchedMovies;