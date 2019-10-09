import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = 'GpZfkEGNi95XrZix01OLTdMs1Clit9Am';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super () 

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(reviews => {
      this.setState({reviews: reviews.results})
    })
  }
  
  handleChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
