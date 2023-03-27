import React from 'react';

import useFetch from '../../customHooks/useFetch';
import MoviesList from '../../components/MoviesList/MoviesList';

const Upcoming = () => {
   const [loadingState, moviesListState] = useFetch('/movie/upcoming', []);

   return (
      <MoviesList moviesListState={moviesListState} loadingState={loadingState} />
   );
}

export default Upcoming;