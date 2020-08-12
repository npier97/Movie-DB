import { SET_QUERY, SEARCH_MOVIE } from './constants';

export const setQuery = (setQuery) => {
  return { type: SET_QUERY, payload: setQuery };
};

export const getMovies = () => (dispatch, getState) => {
  const state = getState()
  const queryParams = state.query

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=21e7b70aa3037a9a670477c21bc87838&language=en-US&query=${queryParams}&page=1&include_adult=false`)
  .then(res => res.json())
  .then(data => {
    console.log('data', data)
    return dispatch({type: SEARCH_MOVIE, payload: data.results});
  });
 }
