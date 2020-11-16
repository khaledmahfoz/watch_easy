import React from 'react';
import StarRatings from 'react-star-ratings';

const Rating = props => {
   return (
      <StarRatings
         rating={props.vote / 2}
         starRatedColor="#f47663"
         numberOfStars={5}
         name='rating'
         starDimension={props.dim}
         starSpacing="1px"
      />
   );
}

export default Rating;