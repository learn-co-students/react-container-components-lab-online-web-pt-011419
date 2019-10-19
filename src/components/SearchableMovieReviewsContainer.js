import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleSearchInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
  }

componentDidMount(){
      fetch (NYT_API_URL + this.state.searchTerm)
      .then(response => response.json())
      .then(searchableMovieReviewsData => this.setState({reviews:searchableMovieReviewsData}))
      .catch( error => console.error(error) )
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFormSubmit}>
          <input type='text' placeholder='Search' onChange={this.handleSearchInputChange}></input>
          <button type='submit'>Search</button>
        </form>
        <br />
      <MovieReviews   reviews={this.state.reviews} />
      </div>
    )
  }
  }

  export default SearchableMovieReviewsContainer
