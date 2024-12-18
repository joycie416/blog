import React from "react";
import ExperienceSubsection from "./ExperienceSubsection";

const Experience = () => {
  return (
    <section className="w-full sm:w-full sm:max-w-[--max-width] flex flex-col p-4 mx-auto sm:px-0">
      <h3>Experiences</h3>
      <ExperienceSubsection
        title="내일배움캠프"
        period="2024.07.15 - 2024.11.22 (4개월)"
      >
        <p>고용노동부 국비지원 부트캠프</p>
        <ul className="ml-1 list-inside list-disc">
          <li>과정명: 실무형 프론트엔드 엔지니어 양성과정</li>
          <li>주관: 스파르타코딩클럽</li>
        </ul>
        <p>
          비전공자로 약 4개월만에 JavaScript, TypeScript, React, Next.js 등을
          터득하여, 웹 서비스를 개발할 수 있는 역량을 강화함.
        </p>
        <p>
          네 번의 팀 프로젝트를 진행하며 다른 개발자들과 협업하는 능력을
          강화했으며, 최종 프로젝트(따꼼) 진행 시 디자이너와 협업하며 비개발자와
          소통하는 방법을 익힘.
        </p>
      </ExperienceSubsection>
      <ExperienceSubsection
        title="데이터과학 입문 부트캠프"
        period="2023.08.09 - 2023.08.11"
      >
        <ul className="ml-1 list-inside list-disc">
          <li>팀프로젝트 기여도: 60%</li>
        </ul>
        <p>
          파이썬과 numpy, pandas, matplotlib 라이브러리를 사용해 데이터를
          분석하고 시각화하는 방법을 익힘.
        </p>
        <p>
          하루 동안 진행한 팀 프로젝트에서 데이터 분석, 시각화를 모두 진행해
          발표해 6팀 중 1등 수상.
        </p>
      </ExperienceSubsection>
      <ExperienceSubsection title="교내 SW TA" period="2019.03 - 2021.12 (3년)">
        <p>
          미분적분학 1,2, 코딩의논리, 대수알고리즘, 정보와수학 등 파이썬 혹은
          SAGE(파이썬 기반 프로그래밍 언어)를 활용하는 수업에 꾸준히 조교로
          참여함.
        </p>
        <p>
          직접 실습 강의를 진행하거나 실습 보조를 하며 코드 리뷰나 토론 형태의
          협업 역량을 강화함. 학생들의 다양한 코드를 보며 여러 관점에서 문제를
          접근할 수 있는 문제 해결 능력을 강화함.
        </p>
      </ExperienceSubsection>
      <ExperienceSubsection
        title="미분적분학 해설지 제공 앱 만들기"
        period="2019.03 - 2019.06 (4개월)"
      >
        <p>
          교내 필수 교양 과목인 미분적분학 1,2 교재의 해설지를 제공하는
          안드로이드 앱 개발.
        </p>
        <p>안드로이드 스튜디오 사용. 직접 푼 해설을 LaTeX으로 변환해 제공.</p>
      </ExperienceSubsection>
    </section>
  );
};

export default Experience;
