import React from 'react';

import Movie from '../../components/Movie/Movie';
import NotFoundMessage from '../../components/UI/NotFoundMessage/NotFoundMessage';
import Spinner from '../../components/UI/Spinner/Spinner';


const MoviesList = props => {
   let content = (
      <div className="row">
         {
            props.moviesListState
               ? props.moviesListState.results.map(movie => {
                  return (
                     <div key={movie.id} className="col-12 col-sm-6 col-lg-4 col-xlg-3 mt-4">
                        <Movie data={movie}>
                           <Movie.Title title={movie.title} />
                        </Movie>
                     </div>
                  );
               })
               : (
                  <div className="mt-4">
                     <NotFoundMessage message="No movies found" />
                  </div>
               )
         }
      </div>
   )
   return (
      <div className="container">
         {
            props.loadingState ? <Spinner /> : content
         }
      </div>
   );
}

export default MoviesList;