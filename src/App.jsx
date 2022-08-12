import React, { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import images from './components/images';

export default function App() {
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });

  const [imageArray, setImageArray] = useState(images);

  const shuffleImages = () => {
    setImageArray((prevImageArray) => {
      let newImageArray = structuredClone(prevImageArray);
      for (let i = newImageArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = newImageArray[i];
        newImageArray[i] = newImageArray[j];
        newImageArray[j] = temp;
      }
      return newImageArray;
    });
  };

  return (
    <div className="App">
      <Header score={score} />
      <Cards imageArray={imageArray} shuffleImages={shuffleImages} />
    </div>
  );
}
