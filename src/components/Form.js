import React from 'react';
import { setQuery, getMovies } from '../state/action';
import { connect } from "react-redux";

const Form = ({query, setQuery, onSubmit}) => {
  const handleQueryChange = (e) => {
    const query = e.target.value;

    console.log('trying to handle submit for query', query);
    setQuery(query);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  console.log(query)

  return (
  <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="input" type="text" name="query"
          placeholder="i.e. Jurassic Park"
          value={query} onChange={handleQueryChange}
          />
      <button className="button" type="submit">Search</button>
  </form>
)};

const mapStateToProps = state => ({
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query)),
  onSubmit: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
