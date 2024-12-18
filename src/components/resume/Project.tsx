import React from "react";
import ProjectCard from "./ProjectCard";
import TakkomImg from "../../public/projects/takkom.svg"

const Project = () => {
  return (
    <section className="w-full sm:w-full sm:max-w-[--max-width] flex flex-col p-4 mx-auto sm:px-0">
      <h3>Projects</h3>
      <div className="grid grid-cols-3 gap-6">
        <ProjectCard
          data={{ name: "따꼼", description: "우리 아이 예방 접종 기록을 저장하고 동네 병원을 찾아보세요.", image: TakkomImg }}
        />
        <ProjectCard
          data={{ name: "레코드 팡팡", description: "우리 아이 예방 접종 기록을 저장하고 동네 병원을 찾아보세요.", image: TakkomImg }}
        />
      </div>
    </section>
  );
};

export default Project;
