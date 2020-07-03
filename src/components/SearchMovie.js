import React, { useContext } from "react";
import { MovieCard } from "./MovieCard";
import { MovieContext } from "../MovieContext";
import { Form } from "./Form";

export const SearchMovie = () => {
    const [query, movies, setMovies] = useContext(MovieContext);

    const search = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=21e7b70aa3037a9a670477c21bc87838&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            // toggleVisibility()
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <Form search={search()}/>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}