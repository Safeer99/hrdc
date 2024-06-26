"use client";

import { format } from "date-fns";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  image: string;
  date: Date;
  description?: string;
  link: string;
  tag: string;
}

export const NewsCard = ({
  date,
  image,
  link,
  tag,
  title,
  description,
}: Props) => {
  return (
    <div className="h-[420px] relative group">
      <div className="h-[70%] relative w-full rounded-lg overflow-hidden shadow shadow-slate-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 duration-300" />
      </div>
      <Link href={link}>
        <div className="absolute z-10 top-1/2 -translate-y-1/2 left-[75%] size-11 bg-green-600 rounded-full grid place-items-center duration-300 -rotate-180 scale-0 group-hover:scale-100 group-hover:rotate-0">
          <ArrowRight className="text-white" />
        </div>
      </Link>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-white shadow shadow-slate-500 rounded-lg p-4 text-left">
        <p className="text-xs uppercase text-muted-foreground">{tag}</p>
        <p className="font-semibold my-2 line-clamp-2 h-[30%] group-hover:text-green-600 duration-300">
          {title}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="size-4 text-green-600" />
          {format(date, "PPP")}
        </div>
        <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
          {description ? description : title}
        </p>
      </div>
    </div>
  );
};
