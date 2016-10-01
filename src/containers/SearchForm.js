import React, { Component } from 'react';
import { connect } from 'react-redux';
import {searchMovies} from '../actions/moviesActions';

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMovies(this.refs.title.value)
    this.refs.title.value = '';
  }
  render() {
    return (
      <div className="row" style={{marginBottom: '1em'}}>
        <div className="col-md-8 col-md-offset-2">
          <div className="search-form">
            <h1 className="text-center">Search for a movie</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <input type="text" className="form-control" ref="title"/>
              </div>
              <button className="btn btn-primary btn-block">Search Movies</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (movie) => dispatch(searchMovies(movie))
  }
}

export default connect(null, mapDispatchToProps)(SearchForm);
