import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTopRated } from "../state/action";
import { TopMovie } from "./TopMovie";

export const TopRatedMovies = ({ratedMovies, getTopRated}) => {
    useEffect(() => { getTopRated(); }, []);

    return (
        <div>
            <h1>Top rated movies</h1>
            {ratedMovies && (
                <div className="top-chart">
                {console.log(ratedMovies)}
                    {ratedMovies.map(movie => (
                        <TopMovie movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    ratedMovies: state.rated.movies
  });

  const mapDispatchToProps = (dispatch) => ({
    getTopRated: () => dispatch(getTopRated())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);