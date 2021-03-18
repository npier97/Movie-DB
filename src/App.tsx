import React from 'react';
import './App.css';
import Form from './components/Form';
import TopMoviesChart from './components/TopMoviesChart';


function App() {
  return (
      <div className="container">
        <h1 className="title"><a href={'./'} className={'link'}>Movie Search</a></h1>
        <Form />
        <TopMoviesChart />
      </div>
  );
}

export default App;
