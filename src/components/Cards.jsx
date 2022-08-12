import React from 'react';

export default function Cards(props) {
  const randomImages = props.imageArray.map((img) => {
    return (
      <div key={img.id} className="border-2 border-slate-400">
        <img onClick={props.shuffleImages} src={img.src} alt="" id={img.id} />
      </div>
    );
  });

  return (
    <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6 bg-slate-800 p-8">
      {randomImages}
    </div>
  );
}
