import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import StyledForm from '../components/Form';
import Input from '../components/Input';
import Label from '../components/Label';
import { getSearchedMovies, setQuery } from '../state/action';
import { getMoviesSelector, getQuerySelector } from '../state/selectors';
import { MovieCard } from './MovieCard';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuerySelector);
  const movies = useSelector(getMoviesSelector);

  const handleQueryChange = (e: any) => {
    const query = e.target.value;
    dispatch(setQuery(query));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(getSearchedMovies());
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

export default Form;
