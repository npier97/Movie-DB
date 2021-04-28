import { IReduxState } from '../interfaces/state';

export const getQuerySelector = (state: IReduxState) => state.query;

export const getMoviesSelector = (state: IReduxState) => state.search.movies;

export const getTopRatedSelector = (state: IReduxState) => state.rated.movies;
