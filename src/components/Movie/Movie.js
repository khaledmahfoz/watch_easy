import React from 'react';
import Rating from '../Rating/Rating';
import {useHistory} from 'react-router-dom';

import classes from './Movie.module.css';

const Movie = props => {
   const history = useHistory();

   const {id, poster_path, vote_average} = props.data;

   const navigateHandler = () => {
      history.push(`/movie/${id}`);
   }

   return (
      <div className={classes.Movie} onClick={navigateHandler}>
         <div className={classes.Img} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
            {props.children}
         </div>
         <div className={classes.Movie_Info}>
            <Rating vote={vote_average} dim="20px" />
         </div>
      </div>
   );
}

Movie.Title = ({title, original_title}) => {
   return (
      <>
         <div className={classes.Info}>
            <div>{title}</div>
         </div>
      </>
   );
};

export default Movie;