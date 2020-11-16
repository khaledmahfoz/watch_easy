import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
import NowPlaying from '../../components/NowPlaying/NowPlaying';
import Popular from '../../components/Popular/Popular';

const Home = () => {
   const [loadingState, changeLoadingState] = useState(true);
   const [nowPlayingMoviesValState, changeNowPlayingMoviesValState] = useState(null);
   const [moviesValState, changeMoviesValState] = useState(null);

   useEffect(() => {
      (async () => {
         try {
            const movies = await axios.all([
               axios.get(`/movie/now_playing`),
               axios.get(`/movie/popular`)
            ]);
            changeMoviesValState(movies[0].data.results);
            changeNowPlayingMoviesValState(movies[1].data.results);
            changeLoadingState(false);
         } catch (err) {
            changeMoviesValState(null);
            changeNowPlayingMoviesValState(null);
            changeLoadingState(false);
         }
      })();
   }, [])

   return (
      loadingState
         ? (
            <div className="container">
               <Spinner />
            </div>
         )
         : (
            <>
               <NowPlaying data={nowPlayingMoviesValState} />
               <div className="container">
                  <Popular data={moviesValState} />
               </div>
            </>
         )
   );
}

export default Home;