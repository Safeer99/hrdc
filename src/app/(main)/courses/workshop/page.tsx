import { Banner } from "@/components/banner";
import { columns } from "@/components/courses-column";
import { DataTable } from "@/components/data-table";
import { workshop } from "@/lib/data";
import React from "react";

const WorkshopPage = () => {
  return (
    <div>
      <Banner title="Workshop & Others" imageUrl="/banners/workshop.jpg" />
      <div className="p-4 md:px-10 md:py-8">
        <p className="text-sm text-slate-700 pb-8">
          Each HRDC organizes one or two workshops for Academic Administrators
          in a year to familiarize them with the philosophy and importance of
          orientation programmes and refresher courses, and persuade them to
          depute teachers. It enables them to understand their new roles as
          supervisors; and facilitate reforms in higher education through
          appropriate modification of management systems at various level.
        </p>
        <DataTable columns={columns} data={workshop} />
      </div>
    </div>
  );
};

export default WorkshopPage;
