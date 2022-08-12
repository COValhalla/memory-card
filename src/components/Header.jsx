import React, { useState } from 'react';

export default function Header(props) {
  console.log(props.score);
  return (
    <div className="mx-auto flex max-w-5xl  place-items-center justify-around bg-slate-500 p-8 font-fantasy text-4xl">
      <h1 className="">Final Fantasy: Memory Edition</h1>
      <div>
        <h1>Current Score: {props.score.currentScore} </h1>
        <h1>Best Score: {props.score.bestScore}</h1>
      </div>
    </div>
  );
}
