import { SET_QUERY, SEARCH_MOVIE, TOP_RATED } from './constants';

export const setQuery = (setQuery) => {
  return { type: SET_QUERY, payload: setQuery };
};

//Promiseallhttps://stackoverflow.com/questions/52329257/chaining-fetch-calls-react-js/52332869

export const getSearchedMovies = () => (dispatch, getState) => {
  const state = getState()
  const queryParams = state.query

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=21e7b70aa3037a9a670477c21bc87838&language=en-US&query=${queryParams}&page=1&include_adult=false`)
  .then(res => res.json())
  .then(data => {
    return dispatch({type: SEARCH_MOVIE, payload: data.results});
  });
 }

 export const getTopRated = () => (dispatch) => {
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=21e7b70aa3037a9a670477c21bc87838&language=en-US&page=1`)
  .then(res => res.json())
  .then(data => {
    return dispatch({type: TOP_RATED, payload: data.results});
  });
 }