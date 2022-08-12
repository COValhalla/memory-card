import React from 'react';

export default function Cards(props) {
  const randomImages = props.imageArray.map((img) => {
    return (
      <div
        key={img.id}
        className="flex w-32 justify-center rounded border border-slate-400 p-2 hover:border-slate-500"
      >
        <img
          onClick={props.shuffleImages}
          src={img.src}
          alt=""
          id={img.id}
          className="h-36"
        />
      </div>
    );
  });

  return (
    <div className=" bg-slate-800 p-8">
      <div className="mx-auto flex  max-w-4xl flex-wrap justify-center gap-6 bg-slate-800 p-8">
        {randomImages}
      </div>
    </div>
  );
}
