import React from 'react'

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review =>
        <div className="review">
          <p /><a href={review.link.url}>{review.headline}</a><br />
          by {review.byline}
          <blockquote>{review.summary_short}</blockquote>
        </div>
      )}
    </div>
  )
}

export default MovieReviews
