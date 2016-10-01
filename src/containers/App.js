import React, { Component } from 'react'
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import Movie from '../components/Movie';

class App extends Component {
  render() {
    const movies = this.props.movies.map((movie, i) =>
      <Movie
        title={movie.Title}
        img={movie.Poster}
        year={movie.Year}
        id={movie.imdbID}
        key={movie.imdbID} />
    );
    return (
      <div className="container">
        <SearchForm />
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            {movies}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(App);
