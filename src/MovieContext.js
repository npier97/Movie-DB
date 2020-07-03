import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);

  return (
    <MovieContext.Provider value={[query, setQuery, movies, setMovies, topRated, setTopRated]}>
      {props.children}
    </MovieContext.Provider>
  );
}