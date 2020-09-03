import React from "react";
import { connect } from "react-redux";
import { getTopRated } from "../state/action";

export const TopRatedMovies = () => {

    return (
        <>
            <div>
                <h1>Top rated movies</h1>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    query: state.query
  });

  const mapDispatchToProps = (dispatch) => ({
    topRated: () => dispatch(getTopRated())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);