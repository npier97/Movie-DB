import React from "react";
import { MovieCard } from "./MovieCard";
import Form from "./Form";
import { connect } from "react-redux";

export const SearchMovie = ({query, movies}) => (
    <>
        <Form />
        <div className="card-list">
            {console.log(movies)}
            {/* {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))} */}
        </div>
    </>
);

const mapStateToProps = state => ({
    query: state.query,
    movies: state.movies
});

export default connect(mapStateToProps)(SearchMovie);
