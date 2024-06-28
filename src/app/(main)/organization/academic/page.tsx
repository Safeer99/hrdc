import { Banner } from "@/components/banner";
import React from "react";

const AcademicPage = () => {
  return (
    <div>
      <Banner title="Academic Staff" imageUrl="/banners/academic.jpg" />
      <div className="p-4 md:px-10 md:py-8">
        <h3 className="font-semibold text-2xl">Professor Director</h3>
        <p className="text-sm py-2 text-slate-700">
          The Professor – Director will be appointed on regular basis. The
          qualifications for the post of Director will be the same as for the
          post of Professor. The Professor-Director will be appointed by the
          Chairman, UGC out of a panel of names (in alphabetical order)
          recommended by the Selection Committee constituted for the purpose by
          the Chairman, UGC. One of the members of the Selection Committee would
          be the Vice-Chancellor of the concerned University. Wherever, the
          regular Directors are appointed, they will be continued as
          Professor-Director, HRDC by following UGC Regulations, 2018.
          <br />
          <br />
          The Director of HRDC shall be the Chief Executive Officer of HRDC in
          terms of academic, Administrative and Financial matters. He shall be
          member of scrutiny and selection committee for recruitment of
          Non-Teaching Staff.
        </p>
        <h3 className="font-semibold text-2xl mt-4">Assistant Professor</h3>
        <p className="text-sm py-2 text-slate-700">
          Any new recruitment in HRDC at the level of faculty, only one
          Assistant Professor be recruited by following UGC Regulations, 2018.
          In case, if there is a delay in appointment of Assistant Professor,
          the University may hire faculty on contract basis by following UGC
          norms. In future, these positions should be filled by Direct
          Recruitment as prescribed for Assistant Professors by UGC Regulations
          except the Director, HRDC of host University shall also be a member of
          Selection Committee.
          <br />
          The existing faculty at the level of Assistant Professor and Associate
          Professor, the CAS promotion norms amended to the extent in UGC
          Regulations 2018, Appendix-II, Table 1 & 2 shall be applicable.
          <br />
          If Associate Professor is already appointed in any HRDC, the post
          shall continue to be coterminus with the superannuation of incumbent.
          If the post of Associate Professor or 13 both the posts - Associate
          Professor and Assistant Professor are vacant then only Assistant
          Professors’ post will be filled by direct recruitment. Services
          rendered by the core staff in HRDCs may be counted for promotion both
          in the HRDC or in their parent departments including CAS at the level
          of Assistant Professor (Level-1, Level-2 and to Associate Professor).
          The existing Associate Professors/Assistant Professors who are
          fulfilling the criteria of UGC Regulations 2018 should also be
          extended CAS to the Level of Professors. Such Professors will continue
          to be the faculty of HRDC and may be considered eligible to apply for
          the post of Director under direct/open recruitment. They shall have to
          apply and compete for the post of Director under direct recruitment.
        </p>
      </div>
    </div>
  );
};

export default AcademicPage;
