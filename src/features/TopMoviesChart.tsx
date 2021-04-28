import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopRated } from '../state/action';
import { getTopRatedSelector } from '../state/selectors';
import { CSS_COLOR } from '../utils/theme';
import { TopMovie } from './TopMovie';

const StyledContainer = styled.div({
  margin: '2rem',
  padding: '2rem 4rem',
  borderRadius: '10px',
  backgroundColor: CSS_COLOR.WHITE,
  boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)',
});

export const TopRatedMovies: React.FC = () => {
  const dispatch = useDispatch();
  const ratedMovies = useSelector(getTopRatedSelector);

  useEffect(() => {
    dispatch(getTopRated());
  }, [dispatch]);

  return (
    <div>
      <h1>Top rated movies</h1>
      {ratedMovies && (
        <StyledContainer>
          {ratedMovies.map((movie) => (
            <TopMovie movie={movie} key={movie.id} />
          ))}
        </StyledContainer>
      )}
    </div>
  );
};

export default TopRatedMovies;
