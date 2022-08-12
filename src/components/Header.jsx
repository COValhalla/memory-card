import React, { useState } from 'react';

export default function Header(props) {
  return (
    <div className="mx-auto flex   place-items-center justify-around bg-slate-400 p-8 font-fantasy lg:text-4xl">
      <h1 className="">Final Fantasy: Memory Edition</h1>
      <div>
        <h1>Current Score: {props.score.currentScore} </h1>
        <h1>Best Score: {props.score.bestScore}</h1>
      </div>
    </div>
  );
}
