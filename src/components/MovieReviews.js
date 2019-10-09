// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => {
  //console.log(reviews, "this")
  return (
    <div className="review-list">
      {reviews.map(review => {
       return(
         <div className="review" key={review.display_title}>
          <h2>{review.display_title}</h2>
          <h4>{review.mpaa_rating}</h4>
          <p>{review.summary_short}</p>
         </div>
       )
      })}
    </div>
  )
}

export default MovieReviews;