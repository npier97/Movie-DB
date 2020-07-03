import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={[query, setQuery, movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}