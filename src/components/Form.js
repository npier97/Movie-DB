import React from 'react';
import { setQuery, getMovies } from '../state/action';
import { connect } from "react-redux";
import { MovieCard } from './MovieCard';

const Form = ({query, movies, setQuery, onSubmit}) => {
  const handleQueryChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
  <>
    <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query"
            placeholder="i.e. Jurassic Park"
            value={query} onChange={handleQueryChange}
            />
        <button className="button" type="submit">Search</button>
    </form>
    {movies && (
      <div className="card-list">
        {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    )}
  </>
)};

const mapStateToProps = state => ({
  query: state.query,
  movies: state.search.movies,
});

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query)),
  onSubmit: () => {
    dispatch(getMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
