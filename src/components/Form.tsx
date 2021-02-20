import React from "react";
import { connect } from "react-redux";
import { IForm, IReduxState } from "../interfaces/state";
import { getSearchedMovies, setQuery } from "../state/action";
import { MovieCard } from "./MovieCard";

const Form: React.FC<IForm> = ({ query, movies, setQuery, onSubmit }) => {
  const handleQueryChange = (e: any) => {
    const query = e.target.value;
    setQuery(query);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={handleQueryChange}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {movies && (
        <div className="card-list">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  query: state.query,
  movies: state.search.movies,
});

const mapDispatchToProps = (dispatch: any) => ({
  setQuery: (query: string) => dispatch(setQuery(query)),
  onSubmit: () => {
    dispatch(getSearchedMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
