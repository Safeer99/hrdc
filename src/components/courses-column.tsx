"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

type FIPCourses = {
  course: string;
  start: string;
  end: string;
  university: string;
};

export const columns: ColumnDef<FIPCourses>[] = [
  {
    accessorKey: "course",
    header: "Course Name",
  },
  {
    accessorKey: "start",
    header: "Start Date",
    cell: ({ row }) => {
      return <div className="min-w-24">{format(row.original.start, "PP")}</div>;
    },
  },
  {
    accessorKey: "end",
    header: "End Date",
    cell: ({ row }) => {
      return <div className="min-w-24">{format(row.original.end, "PP")}</div>;
    },
  },
  {
    accessorKey: "university",
    header: "University/College",
  },
];
