import React from 'react';

export default function Cards(props) {
  const randomImages = props.imageArray.map((img) => {
    return (
      <div
        key={img.id}
        className="flex justify-center rounded border border-slate-400 p-2 hover:border-slate-500 sm:w-10 lg:w-32"
      >
        <img
          onClick={props.shuffleImages}
          src={img.src}
          alt=""
          id={img.id}
          className="sm: w-10 lg:h-36 lg:w-auto"
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
