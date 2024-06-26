import { Banner } from "@/components/banner";
import { DataTable } from "@/components/data-table";
import { hrdcList } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type HRDCList = {
  state: string;
  institute: string;
  name: string;
};

export const columns: ColumnDef<HRDCList>[] = [
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "institute",
    header: "Institute",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
];

const HRDCListPage = () => {
  return (
    <div>
      <Banner
        title="Human Resource Development Centre"
        imageUrl="/banners/hrdc-list.jpg"
      />
      <div className="px-10 py-8">
        <DataTable columns={columns} data={hrdcList} />
      </div>
    </div>
  );
};

export default HRDCListPage;
