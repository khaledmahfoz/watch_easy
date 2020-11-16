import React from 'react';

import classes from './Popular.module.css';

import Movie from '../../components/Movie/Movie';
import NotFoundMessage from '../UI/NotFoundMessage/NotFoundMessage';

const Popular = props => {
   let content = <NotFoundMessage message="No Recent movies found" />;

   if (props.data && props.data.length) {
      content = (
         <div className="row">
            {
               props.data.map(elem => {
                  return (
                     <div key={elem.id} className="col-12 col-sm-6 col-lg-4 col-xlg-3">
                        <Movie data={elem}>
                           <Movie.Title {...elem} />
                        </Movie>
                     </div>
                  );
               })
            }
         </div>
      )
   }

   return (
      <>
         <div className="display-4 text-left mt-4 mb-2 text-white">Popular movies</div>
         <div className={classes.Movies}>
            {content}
         </div>
      </>
   );
}

export default Popular;