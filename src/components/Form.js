import React, { useContext } from 'react';
import { MovieContext } from "../MovieContext";

export const Form = search => {
  const [query, setQuery] = useContext(MovieContext);

  return (
    <form className="form" onSubmit={search}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query"
            placeholder="i.e. Jurassic Park"
            value={query} onChange={(e) => setQuery(e.target.value)}
            />
        <button className="button" type="submit">Search</button>
    </form>
  )
};
