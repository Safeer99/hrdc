import React from "react";

interface Props {
  title: string;
  imageUrl: string;
}

export const Banner = ({ imageUrl, title }: Props) => {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent to-black" />
      <p className="absolute left-0 bottom-0 px-10 py-8 text-5xl font-semibold text-white">
        {title}
      </p>
    </div>
  );
};
