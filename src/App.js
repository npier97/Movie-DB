import React from 'react';
import './App.css';
import { SearchMovie } from "./components/SearchMovie";

function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovie />
    </div>
  );
}

export default App;
