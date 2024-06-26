"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "./ui/button";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

export const CoursesCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 760 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 760, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      image: "/course_card_1.jpg",
      title: "Physical Fitness & Wellbeing",
      link: "#",
      start: new Date(),
      end: new Date(),
      college: "GEHU Dehradun",
    },
    {
      image: "/course_card_2.jpg",
      title: "Presentation Skills",
      link: "#",
      start: new Date(),
      end: new Date(),
      college: "GEHU Dehradun",
    },
    {
      image: "/course_card_1.jpg",
      title: "Artificial Intelligence and Machine Learning in Teaching",
      link: "#",
      start: new Date(),
      end: new Date(),
      college: "GEHU Dehradun",
    },
    {
      image: "/course_card_2.jpg",
      title: "Community Engagement in Higher Education",
      link: "#",
      start: new Date(),
      end: new Date(),
      college: "GEHU Dehradun",
    },
  ];

  return (
    <div className="my-12 max-w-[1100px] h-full m-auto">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        arrows={false}
      >
        {data.map((item) => (
          <div
            key={item.title}
            className="p-2 bg-background shadow shadow-slate-500 rounded-xl m-4 flex flex-col group"
          >
            <div className="w-full relative h-[180px] overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt="title image"
                fill
                className="object-cover scale-110 group-hover:scale-100 duration-300"
              />
            </div>
            <p className="font-semibold text-left text-lg select-none pt-4 group-hover:text-green-600 duration-300 line-clamp-2 h-[72px]">
              {item.title}
            </p>
            <div className="w-full my-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-5 text-green-600" />
                {item.college}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="size-5 text-green-600" />
                {format(item.start, "PPP")} - {format(item.end, "PPP")}
              </div>
            </div>
            <Link href={item.link}>
              <Button
                variant="custom"
                className="w-max mx-auto mb-4 mt-2 rounded-full"
              >
                <ArrowRight className="size-5 mr-2" />
                <p className="text-sm">Explore More</p>
              </Button>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
