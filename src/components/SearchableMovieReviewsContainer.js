import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'CBcLQfJqUAjMBxvSAWNMulc4sDPQdmmT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json' + `api-key=${NYT_API_KEY}`


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchReviews(this.state.searchTerm)
  }

  fetchReviews = (searchTerm) => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${NYT_API_KEY}`)
      .then(response => response.json())
      .then(reviewData => this.setState({ reviews: reviewData.results}))
  }



  render() {
    return <div className= "searchable-movie-reviews">
      <form className="ui form" onSubmit={this.handleSubmit}>
        <input type="text" name="searchTerm" id="searchTerm" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})}></input>
        <button className="ui secondary button" >Find Reviews</button>
      </form>
      <MovieReviews reviews={this.state.reviews} /></div>
  }
  }

  export default SearchableMovieReviewsContainer;
