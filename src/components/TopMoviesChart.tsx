import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IReduxState, ITopRatedMovies } from "../interfaces/state";
import { getTopRated } from "../state/action";
import { TopMovie } from "./TopMovie";

export const TopRatedMovies: React.FC<ITopRatedMovies> = ({
  ratedMovies,
  getTopRated,
}) => {
  useEffect(() => {
    getTopRated();
  }, []);

  return (
    <div>
      <h1>Top rated movies</h1>
      {ratedMovies && (
        <div className="top-chart">
          {ratedMovies.map((movie) => (
            <TopMovie movie={movie} key={movie.id} />
          ))}
        </div>
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
