import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";

export const MoviesCharts = () => {
    const [topRated, setTopRated] = useContext(MovieContext);

    // store urls to fetch in an array
    // const urls = [
    //   `https://api.themoviedb.org/3/movie/top_rated?api_key=21e7b70aa3037a9a670477c21bc87838&language=en-US&page=1`,
    // ];

    // // use map() to perform a fetch and handle the response for each url
    // Promise.all(urls.map(url =>
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => {setTopRated(data)})
    //     .catch(err => console.error(err))
    // ))

    return (
        <>
            <div>
                <h1>Top rated movies</h1>
            </div>
        </>
    )
}