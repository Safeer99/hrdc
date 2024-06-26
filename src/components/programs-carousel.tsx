"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const ProgramsCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 3,
    },
    smalltablet: {
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
      title: "FIP (Gurudakshita)",
      description:
        "The intent of a teacher induction program is to provide a systematic structure of support for beginning teachers. This professional development provides the beginning teacher with vital information on topics that are relevant to them during their first year in the classroom. Teacher induction is a professional development program that incorporates mentoring and is designed to offer support, guidance, and orientation for beginning teachers during the transition into their first teaching jobs.",
      link: "#",
    },
    {
      title: "Refresher Course",
      description:
        "A refresher course is a training course in which academia improve their knowledge or skills and learn about new developments that are related to the job that they do. Lecturers working in the Universities and Colleges, who are included in the list of Colleges under Section 2(f) of the UGC Act, even though they may not yet be fit under 12-B of the UGC Act, may be invited to participate in the Refresher courses. The refresher courses run by the HRDC will provide opportunities for teachers in service to exchange experience with their peers and to mutually learn from each other.",
      link: "#",
    },
    {
      title: "Short Term Course",
      description:
        "HRDC organizes one-week short term programme on various themes like Academic Leadership, Climate Change, Entrepreneurship, Research Methodology and Gender Studies, etc. HRDCs also conduct training programme for non-teaching staff on various administrative procedures including ICT in Governance, financial management and inter personnel relations.",
      link: "#",
    },
    {
      title: "Workshop & Others",
      description:
        "Each HRDC organizes one or two workshops for Academic Administrators in a year to familiarize them with the philosophy and importance of orientation programmes and refresher courses, and persuade them to depute teachers. It enables them to understand their new roles as supervisors; and facilitate reforms in higher education through appropriate modification of management systems at various level.",
      link: "#",
    },
  ];

  return (
    <div className="my-12 max-w-[1100px] m-auto">
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
            className="p-8 py-10 bg-white rounded-xl m-4 max-h-[380px] h-full flex flex-col justify-between group"
          >
            <div>
              <p className="font-semibold text-lg select-none group-hover:text-green-600 duration-300">
                {item.title}
              </p>
              <p className="line-clamp-[7] leading-relaxed text-sm text-muted-foreground my-4 select-none">
                {item.description}
              </p>
            </div>
            <Link href={item.link}>
              <Button className="mt-10 w-max mx-auto rounded-full p-2 px-3 bg-primary text-white gap-2 group-hover:bg-green-600 duration-300">
                <ArrowRight className="size-5" />
                <p className="text-sm">Explore More</p>
              </Button>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
