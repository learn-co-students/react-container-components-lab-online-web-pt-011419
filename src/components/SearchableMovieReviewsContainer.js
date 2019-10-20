import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'xBqn21e5PtlW3jT4AqewWoPEpVpeGKVn';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}))
  }

  render() {
    return <div className= "searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
        <button>Search Reviews</button>
      </form>
      <MovieReviews reviews={this.state.reviews} />
    </div>
  }

}
