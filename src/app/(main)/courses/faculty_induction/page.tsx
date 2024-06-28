import { Banner } from "@/components/banner";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/courses-column";
import { fipCourses } from "@/lib/data";
import React from "react";

const FIPPage = () => {
  return (
    <div>
      <Banner title="Faculty Induction Program" imageUrl="/banners/fip.jpg" />
      <div className="p-4 md:px-10 md:py-8">
        <p className="text-sm text-slate-700 pb-8">
          The intent of a teacher induction program is to provide a systematic
          structure of support for beginning teachers. This professional
          development provides the beginning teacher with vital information on
          topics that are relevant to them during their first year in the
          classroom. Teacher induction is a professional development program
          that incorporates mentoring and is designed to offer support,
          guidance, and orientation for beginning teachers during the transition
          into their first teaching jobs.
        </p>
        <DataTable columns={columns} data={fipCourses} />
      </div>
    </div>
  );
};

export default FIPPage;
