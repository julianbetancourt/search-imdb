import * as types from '../actions/actionTypes';

const movies = (state = [], action) => {
  switch (action.type) {
    case types.SEARCH_MOVIES_SUCCESS:
      return action.movies;
    default:
      return state;
  }
}

export default movies;
