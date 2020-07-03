import React, { useContext } from "react";
import { MovieCard } from "./MovieCard";
import { MovieContext } from "../MovieContext";

export const SearchMovie = () => {
    const [query, setQuery, movies] = useContext(MovieContext);

    const search = async (e) => {
        e.preventDefault();

        // store urls to fetch in an array
        const urls = [
            `https://api.themoviedb.org/3/movie/top_rated?api_key=21e7b70aa3037a9a670477c21bc87838&language=en-US&page=1`,
            `https://api.themoviedb.org/3/search/movie?api_key=21e7b70aa3037a9a670477c21bc87838&language=en-US&query=${query}&page=1&include_adult=false`,

        ];

        // use map() to perform a fetch and handle the response for each url
        Promise.all(urls.map(url =>
            fetch(url)
            .then(res => res.json())
            .catch(err => console.error(err))
        ))
        .then(data => console.log(data))
    }

    return (
        <>
            <form className="form" onSubmit={search}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}