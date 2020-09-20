import React from 'react';
import star from '../images/star.png'

export const TopMovie =  ({movie}) => {
    return (
        <div className="top-movie">
            <img className="top-image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <h3>{movie.title} <small>({movie.release_date})</small></h3>
            <p>
              <img
                  className="star-icon"
                  src={star}
                  alt={"star"}
              />
              <small>{movie.vote_average}</small>
            </p>
        </div>
    )
}
