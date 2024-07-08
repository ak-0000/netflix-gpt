import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    movies && (<div className=' bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title = {"Now Playing Movies"} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {"Trending"} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {"Popular Movies"} movies = {movies.popularmovies}/>
      <MovieList title = {"Top-Rated Movies"} movies = {movies.unwatchedmovies}/>  
      <MovieList title = {"UpComing Movies"} movies = {movies.upcomingmovies}/>
      </div>
      {/*
      movieslist- popular 
      movieCard* n
      movieslist-trending 
      movieslist- now playing 
      movieslist-horrer 
      */}
    </div>
  )
)
}

export default SecondaryContainer