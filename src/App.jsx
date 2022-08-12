import React, { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';

export default function App() {
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });

  return (
    <div className="App">
      <Header score={score} />
      <Cards />
    </div>
  );
}
