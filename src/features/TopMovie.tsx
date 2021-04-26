import styled from '@emotion/styled';
import React from 'react';
import Text from '../components/Text';
import star from '../images/star.png';
import { IMovie } from '../interfaces/state';
import {
  CSS_DISPLAY,
  CSS_FLEX_DIRECTION,
  CSS_FLEX_WRAP,
  CSS_JUSTIFY_CONTENT,
} from '../utils/theme';

const StyledContainer = styled.div({
  margin: '10px 0',
  display: CSS_DISPLAY.FLEX,
  justifyContent: CSS_JUSTIFY_CONTENT.SPACE_BETWEEN,
  flexDirection: CSS_FLEX_DIRECTION.ROW,
  flexWrap: CSS_FLEX_WRAP.WRAP,
});

const StyledImage = styled.img({
  width: '50px',
});

const StyledIcon = styled.img({
  width: '15px',
});

export const TopMovie: React.FC<IMovie> = ({ movie }) => {
  return (
    <StyledContainer>
      <StyledImage
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
      />
      <h3>
        {movie.title} ({movie.release_date})
      </h3>
      <Text size={12}>
        <StyledIcon src={star} alt={'star'} />
        {movie.vote_average}
      </Text>
    </StyledContainer>
  );
};
