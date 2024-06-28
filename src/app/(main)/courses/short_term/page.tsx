import { Banner } from "@/components/banner";
import { columns } from "@/components/courses-column";
import { DataTable } from "@/components/data-table";
import { shortTermCourses } from "@/lib/data";
import React from "react";

const ShortTermPage = () => {
  return (
    <div>
      <Banner title="Short Term Course" imageUrl="/banners/short-term.jpg" />
      <div className="p-4 md:px-10 md:py-8">
        <p className="text-sm text-slate-700 pb-8">
          HRDC organizes one-week short term programme on various themes like
          Academic Leadership, Climate Change, Entrepreneurship, Research
          Methodology and Gender Studies, etc. HRDCs also conduct training
          programme for non-teaching staff on various administrative procedures
          including ICT in Governance, financial management and inter personnel
          relations.
        </p>
        <DataTable columns={columns} data={shortTermCourses} />
      </div>
    </div>
  );
};

export default ShortTermPage;
