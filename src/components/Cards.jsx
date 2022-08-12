import React from 'react';
import images from './images';
import aerith from '../assets/images/aerith.webp';

export default function Cards() {
  const randomImages = images.map((img) => {
    return (
      <div className="border-2 border-slate-400">
        <img src={img.src} alt="" />
      </div>
    );
  });

  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6 bg-slate-800 p-8">
      {randomImages}
    </div>
  );
}
