import React, {useState, useEffect} from 'react';
import axios from 'axios';

import classes from './SearchBar.module.css';

import Input from '../../components/Input/Input';

const SearchBar = () => {
   const [inputValState, changeInputValState] = useState('');
   const [moviesListState, changeMoviesListState] = useState(null);
   const [loadingState, changeLoadingState] = useState(false);

   useEffect(() => {
      let canShow = true;

      if (inputValState !== '') {
         changeLoadingState(true);
         (async () => {
            try {
               const moviesListArr = await axios(`/search/movie?query=${inputValState}`);
               const moviesList = moviesListArr.data.results.slice(0, 5);
               canShow ? changeMoviesListState(moviesList) : changeMoviesListState([]);
               changeLoadingState(false);
            } catch (err) {
               changeLoadingState(false);
               changeMoviesListState(null);
               changeInputValState('');
            }
         })();
      } else {
         changeMoviesListState(null);
      }

      return () => canShow = false;
   }, [inputValState])

   const changeInputHandler = e => {
      changeInputValState(e.target.value);
   }

   const resetHandler = () => {
      changeInputValState("")
   }

   return (
      <div className={classes.SearchBar}>
         <div className="container">
            <div className="row">
               <div className="col-12 offset-md-6 col-md-6 offset-lg-8 col-lg-4">
                  <Input
                     value={inputValState}
                     loading={loadingState}
                     resetHandler={resetHandler}
                     moviesList={moviesListState}
                     changeHandler={changeInputHandler}
                     changeMoviesHandler={changeMoviesListState}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default SearchBar;