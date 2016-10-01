import * as types from './actionTypes';
import axios from 'axios';

export const searchMoviesSuccess = movies => ({
  type: types.SEARCH_MOVIES_SUCCESS,
  movies
})

export const searchMovies = (movie) => {
  return dispatch => {
    const baseUrl = `//omdbapi.com/?s=${movie}`
    axios.get(baseUrl)
      .then(res => {
        dispatch(searchMoviesSuccess(res.data.Search))
      })
      .catch(err => {throw err});
  }
}
