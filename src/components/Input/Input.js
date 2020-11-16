import React from 'react';
import {useHistory} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import classes from './Input.module.css';

const Input = props => {
   const history = useHistory();

   const navigateToMovie = (id) => {
      props.resetHandler();
      props.changeMoviesHandler(null);
      history.push(`/movie/${id}`);
   }

   let content = null;
   if (props.moviesList) {
      if (props.moviesList && props.moviesList.length) {
         content = (
            <div className={classes.Movies_List}>
               {
                  props.moviesList.map(item => {
                     return (
                        <div className={classes.Movies_ListItem} key={item.id} onClick={navigateToMovie.bind(this, item.id)}>{item.title}</div>
                     );
                  })
               }
            </div>
         )
      } else {
         content = (
            <div className={classes.Movies_List}>
               <div>No result found</div>
            </div>
         )
      }
   }
   return (
      <div className={classes.List_Container}>
         <input ref={props.inputRef} className={classes.Input} type="text" placeholder="Movie name" value={props.value} onChange={props.changeHandler} />
         {
            props.loading
               ? (
                  <div className={classes.Spinner}>
                     <Spinner animation="border" role="status" variant="success" size="sm">
                        <span className="sr-only">Loading...</span>
                     </Spinner>
                  </div>
               )
               : content
         }
      </div>
   )
}

export default Input;