import React, { Component } from 'react';

const MovieReviews = (props) => {
  const movieDisplay = props.reviews.map(review_obj => <li className="review">{review_obj.display_title}</li>)
return <div className="review-list">{movieDisplay}</div>
}



export default MovieReviews
