import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="p-4 pt-8 md:px-10 md:py-8">
      <h2 className="text-center text-4xl font-semibold mb-10">
        Our Portfolio
      </h2>
      <div className="h-full mx-auto max-w-[1090px] grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/about_1.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/about_2.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/about_3.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/course_card_1.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/course_card_2.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/about_1.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/about_2.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/about_3.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/course_card_1.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative min-h-[300px] shadow shadow-black/60">
          <Image
            src="/course_card_2.jpg"
            alt="gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
