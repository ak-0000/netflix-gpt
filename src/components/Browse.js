import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUnwatchedMovies from '../hooks/useUnwatchedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUnwatchedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse