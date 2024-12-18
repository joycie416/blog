import { EducationType } from "@/types/education";
import React, { PropsWithChildren } from "react";

const EducationSubsection = ({
  children,
  data,
}: PropsWithChildren<{ data: EducationType }>) => {
  const { university, period, gpa, degree, courses } = data;
  return (
    <div className="w-full grid sm:grid-cols-[minmax(auto,240px)_auto] gap-5 py-4 mt-4 border-t-[2px] border-black">
      <div className="flex flex-col">
        <p><span>{university}</span> <br className="max-sm:hidden"/> <span>{degree}</span></p>
        <p>{period}</p>
      </div>
      <div>
        <div className="flex flex-col">
          <p>GPA: {gpa}/4.5</p>
          <p>{courses.join(", ")} 등</p>
        </div>
        <hr className="my-4" />
        {children}
      </div>
    </div>
  );
};

export default EducationSubsection;
