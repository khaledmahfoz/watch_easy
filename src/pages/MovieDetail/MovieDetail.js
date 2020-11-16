import React from 'react'
import {useParams} from 'react-router-dom';

import classes from './MovieDetail.module.css';

import Spinner from '../../components/UI/Spinner/Spinner'
import Detail from '../../components/Detail/Detail';
import Rating from '../../components/Rating/Rating';
import NotFoundMessage from '../../components/UI/NotFoundMessage/NotFoundMessage';
import useFetch from '../../customHooks/useFetch';

const MovieDetail = () => {
   const {id} = useParams();

   const [loadingState, movieState] = useFetch(`/movie/${id}`, [id]);

   return (
      loadingState
         ? (
            <div className="container">
               <Spinner />
            </div>
         )
         : (
            <>
               <div className="container">
                  <div className={classes.Details}>
                     {
                        movieState ? (
                           <div className="row">
                              <div className="col-12 col-lg-6">
                                 <div className={classes.Detail_Img_Wrapper}>
                                    <div className={classes.Details_Img} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieState.poster_path}`}}></div>
                                    <div className={classes.Title}> {movieState.title}</div>
                                    <div className={classes.Rating}>
                                       <Rating vote={movieState.vote_average} dim="30px" />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                 <div className={classes.Details_Info}>
                                    <Detail>
                                       <Detail.Name>original title:</Detail.Name>
                                       <Detail.Data data={movieState.original_title} />
                                    </Detail>

                                    <Detail>
                                       <Detail.Name>status:</Detail.Name>
                                       <Detail.Data data={movieState.status} />
                                    </Detail>

                                    <Detail>
                                       <Detail.Name>runtime:</Detail.Name>
                                       <Detail.Data data={movieState.runtime + 'min'} />
                                    </Detail>

                                    <Detail>
                                       <Detail.Name>original language:</Detail.Name>
                                       <Detail.Data data={movieState.original_language} />
                                    </Detail>

                                    <Detail>
                                       <Detail.Name>release date:</Detail.Name>
                                       <Detail.Data data={movieState.release_date} />
                                    </Detail>

                                    <Detail>
                                       <Detail.Name>catageories:</Detail.Name>
                                       <Detail.ListData data={movieState.genres} />
                                    </Detail>

                                    <Detail>
                                       <Detail.Name>overview:</Detail.Name>
                                       <Detail.Data data={movieState.overview} />
                                    </Detail>

                                 </div>
                              </div>
                           </div>
                        ) : <NotFoundMessage message="No details found" />
                     }
                  </div>
               </div>
            </>
         )
   );
}



export default MovieDetail;