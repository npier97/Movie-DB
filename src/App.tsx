import React from 'react';
import Container from './components/Container';
import Link from './components/Link';
import H1 from './components/titles/H1';
import Form from './features/Form';
import TopMoviesChart from './features/TopMoviesChart';

function App() {
  return (
    <Container>
      <H1>
        <Link href={'./'}>Movie Search</Link>
      </H1>
      <Form />
      <TopMoviesChart />
    </Container>
  );
}

export default App;
