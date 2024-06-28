"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

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
        <p
          className="absolute transition duration-1000 inset-x-0 top-32 text-center text-5xl text-white font-semibold"
          style={{
            opacity: curIndex === 0 ? 1 : 0,
          }}
        >
          Our Vision
        </p>
        <p
          className="absolute transition duration-1000 inset-x-0 top-32 text-center text-5xl text-white font-semibold"
          style={{
            opacity: curIndex !== 0 ? 1 : 0,
          }}
        >
          Our Mission
        </p>
        <p
          className="max-w-[900px] mx-auto px-4 absolute transition duration-1000 inset-x-0 top-1/3 text-center text-sm text-white"
          style={{
            opacity: curIndex === 0 ? 1 : 0,
          }}
        >
          To groom energized, motivated and capable faculty of HEIs at all
          career stages for promoting a university culture in which faculty
          devotes necessary time for reflection, assessment, and scholarly work,
          continue to learn, design, develop and teach courses
        </p>
        <p
          className="max-w-[900px] mx-auto px-4 absolute transition duration-1000 inset-x-0 top-1/3 text-center text-sm text-white"
          style={{
            opacity: curIndex !== 0 ? 1 : 0,
          }}
        >
          Work as scholars and artists, encourages interdisciplinary,
          international and multicultural perspectives and activities and make
          fresh contributions to program and University governance.
        </p>
        <Button
          variant="customSecondary"
          className="absolute w-max mx-auto inset-x-0 top-2/3"
        >
          Learn More <ArrowUpRight className="size-5 ml-2" />
        </Button>
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
