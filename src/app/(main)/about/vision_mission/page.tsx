import { Banner } from "@/components/banner";
import React from "react";

const VisionMissionPage = () => {
  return (
    <div>
      <Banner title="Vision & Mission" imageUrl="/banners/vision_mission.jpg" />
      <p className="p-4 md:px-10 md:py-8 text-slate-700">
        To groom energized, motivated and capable faculty of HEIs at all career
        stages for promoting a university culture in which faculty devotes
        necessary time for reflection, assessment, and scholarly work, continue
        to learn, design, develop and teach courses, work as scholars and
        artists, encourages interdisciplinary, international and multicultural
        perspectives and activities and make fresh contributions to program and
        University governance.
      </p>
    </div>
  );
};

export default VisionMissionPage;
