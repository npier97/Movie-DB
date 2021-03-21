import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import StyledForm from '../components/Form';
import Input from '../components/Input';
import Label from '../components/Label';
import { IForm, IReduxState } from '../interfaces/state';
import { getSearchedMovies, setQuery } from '../state/action';
import { MovieCard } from './MovieCard';

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
      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="query">Movie Name</Label>
        <Input
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={handleQueryChange}
        />
        <Button type="submit">Search</Button>
      </StyledForm>
      {movies && (
        <div>
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
