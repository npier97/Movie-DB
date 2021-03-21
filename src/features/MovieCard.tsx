import styled from '@emotion/styled';
import React from 'react';
import Text from '../components/Text';
import { IMovie } from '../interfaces/state';

const StyledContainer = styled.div({
  margin: '2rem',
  padding: '2rem 4rem',
  borderRadius: '10px',
  backgroundColor: 'white',
  boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)',
});

const StyledImage = styled.img({
  margin: '0 auto',
  display: 'block',
});

const StyledH3 = styled.h3({
  marginBottom: '0.5rem',
  fontSize: '3.2rem',
});

export const MovieCard: React.FC<IMovie> = ({ movie }) => {
  return (
    <StyledContainer>
      <StyledImage
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
      />
      <div>
        <StyledH3>{movie.title}</StyledH3>
        <Text size={12}>RELEASE DATE: {movie.release_date}</Text>
        <Text size={12}>RATING: {movie.vote_average}</Text>
        <Text className="card--desc" size={16}>
          {movie.overview}
        </Text>
      </div>
    </StyledContainer>
  );
};
