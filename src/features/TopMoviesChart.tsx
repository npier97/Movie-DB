import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IReduxState, ITopRatedMovies } from '../interfaces/state';
import { getTopRated } from '../state/action';
import { TopMovie } from './TopMovie';

const StyledContainer = styled.div({
  margin: '2rem',
  padding: '2rem 4rem',
  borderRadius: '10px',
  backgroundColor: 'white',
  boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)',
});

export const TopRatedMovies: React.FC<ITopRatedMovies> = ({
  ratedMovies,
  getTopRated,
}) => {
  useEffect(() => {
    getTopRated();
  }, [getTopRated]);

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

const mapStateToProps = (state: IReduxState) => ({
  ratedMovies: state.rated.movies,
});

const mapDispatchToProps = (dispatch: any) => ({
  getTopRated: () => dispatch(getTopRated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);
