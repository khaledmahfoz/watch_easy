import React from 'react';
import useFetch from '../../customHooks/useFetch';

import MoviesList from '../../components/MoviesList/MoviesList';

const Toprated = () => {
   const [loadingState, moviesListState] = useFetch('/movie/top_rated');

   return (
      <MoviesList moviesListState={moviesListState} loadingState={loadingState} />
   );
}

export default Toprated;