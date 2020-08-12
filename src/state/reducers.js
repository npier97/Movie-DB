import { combineReducers } from "redux";
import { SEARCH_MOVIE, SET_QUERY } from './constants';

const DEFAULT_STATE = { query: '', movies: [] }

const setQuery = (state = DEFAULT_STATE.query, action) => {
  switch(action.type) {
    case SET_QUERY:
      return action.payload;
    default:
      return state;
  }
}

const searchMovie = (state = DEFAULT_STATE.movies, action) => {
  switch(action.type) {
    case SEARCH_MOVIE:
      return {...state, movies: action.payload};
    default:
      return state;
  }
};

const allReducers = combineReducers({
  search: searchMovie,
  query: setQuery
});

export default allReducers;
