import { Banner } from "@/components/banner";
import { columns } from "@/components/courses-column";
import { DataTable } from "@/components/data-table";
import { refresherCourses } from "@/lib/data";
import React from "react";

const RefresherPage = () => {
  return (
    <div>
      <Banner title="Refresher Course" imageUrl="/banners/refresher.jpg" />
      <div className="p-4 md:px-10 md:py-8">
        <p className="text-sm text-slate-700 pb-8">
          A refresher course is a training course in which academia improve
          their knowledge or skills and learn about new developments that are
          related to the job that they do. Lecturers working in the Universities
          and Colleges, who are included in the list of Colleges under Section
          2(f) of the UGC Act, even though they may not yet be fit under 12-B of
          the UGC Act, may be invited to participate in the Refresher courses.
          The refresher courses run by the HRDC will provide opportunities for
          teachers in service to exchange experience with their peers and to
          mutually learn from each other.
        </p>
        <DataTable columns={columns} data={refresherCourses} />
      </div>
    </div>
  );
};

export default RefresherPage;
