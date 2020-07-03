import React from 'react';
import './App.css';
import { SearchMovie } from "./components/SearchMovie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
