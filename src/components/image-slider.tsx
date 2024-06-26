"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export const ImageSlider = () => {
  const slides = [{ url: "/1.jpg" }, { url: "/2.jpg" }];

  const [curIndex, setCurIndex] = useState(0);

  const prevSlide = () => {
    if (curIndex === 0) {
      setCurIndex(slides.length - 1);
    } else {
      setCurIndex((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (curIndex === slides.length - 1) {
      setCurIndex(0);
    } else {
      setCurIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (curIndex === slides.length - 1) {
        setCurIndex(0);
      } else {
        setCurIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [curIndex, setCurIndex]);

  return (
    <div className="max-w-[1400px] h-[650px] w-full m-auto relative group">
      <div
        className="w-full h-full bg-center bg-cover duration-1000 relative"
        style={{ backgroundImage: `url(${slides[curIndex].url})` }}
      >
        {/* <div className="bg-[url('/vision_mission.jpg')] absolute size-60 bg-contain bg-no-repeat bg-center"></div> */}
      </div>
      <div className="hidden group-hover:block absolute top-1/2 left-0 -translate-y-1/2 text-2xl p-1 text-muted-foreground hover:text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={50} />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 right-0 -translate-y-1/2 text-2xl p-2 text-muted-foreground hover:text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={50} />
      </div>
    </div>
  );
};
