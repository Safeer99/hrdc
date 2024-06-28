import { Banner } from "@/components/banner";
import React from "react";

const NonAcademinPage = () => {
  return (
    <div>
      <Banner title="Non-teaching Staff" imageUrl="/banners/non-academic.jpg" />
      <div className="p-4 md:px-10 md:py-8 space-y-4 text-sm text-slate-700">
        <p>
          Non-teaching Staff can be engaged against vacant sanctioned positions
          on contractual basis as per the respective university norms.
          Daily-wage staff cannot be regularized. The following Non-Teaching
          staff is prescribed for HRDCs:
        </p>
        <ol type="1" className="list-decimal leading-relaxed pl-4">
          <li>
            Technical Officer: 1 (ICT applications, maintenance and training).
          </li>
          <li> Section Officer: 1</li>
          <li> Senior Assistant: 1</li>
          <li> Junior Assistant: 1</li>
          <li>
            Documentation Assistant (at the level of Professional Assistant):1
          </li>
          <li> Steno-typist/Computer Operator: 1</li>
          <li> Peon/Multi-Tasking Staff (at the level of Group-C): 1</li>
          <li>
            Hostel Attendant: 1 (in case of those ASCs that have independent
            accommodation/hostel facilities).
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NonAcademinPage;
