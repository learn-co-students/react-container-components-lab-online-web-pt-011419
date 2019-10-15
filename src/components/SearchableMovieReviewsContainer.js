import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component{
    state ={
        reviews: [],
        searchTerm: ''
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch(URL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(resp => this.setState({reviews: resp.results}))
    }


    handleChange = e => {
        this.setState({searchTerm: e.target.value})
    }

    render(){
        return <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
            <MovieReviews review={this.state.reviews} />
        </div>
    }
}