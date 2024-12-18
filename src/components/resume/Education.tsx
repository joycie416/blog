import React from "react";
import EducationSubsection from "./EducationSubsection";
import { EducationType } from "@/types/education";

const Education = () => {
  const bachelar: EducationType = {
    university: "강원대학교",
    period: "2021.03 - 2022.08",
    degree: "수학과 이학석사",
    gpa: 4.5,
    courses: ["암호론", "해석적 정수론", "조합론"],
  };
  const master: EducationType = {
    university: "강원대학교",
    period: "2017.03 - 2021.02",
    degree: "수학과 학사",
    gpa: 4.3,
    courses: [
      "선형대수학",
      "대수알고리즘",
      "이산수학",
      "정수론",
      "데이터분석수학",
      "정보와수학",
      "컴퓨터프로그래밍기초",
    ],
  };
  return (
    <section className="w-full sm:w-full sm:max-w-[--max-width] flex flex-col p-4 mx-auto sm:px-0">
      <h3>Education</h3>
      <EducationSubsection data={bachelar}>
        <ol className="list-inside list-decimal">
          <li>학석사연계 과정으로, 1년반만에 석사 취득</li>
          <li>
            SAGE를 사용해 졸업 논문 내용을 열 케이스에 대해 실험함
            <ul className="pl-5 list-inside list-disc">
              <li>두 집합 사이의 일대일대응 관계를 보임</li>
              <li>
                일대일대응 관계를 이루는 함수와 두 집합을 각각 계산하는 함수를
                SAGE로 구현함
              </li>
            </ul>
          </li>
        </ol>
      </EducationSubsection>
      <EducationSubsection data={master}>
        <ol className="list-inside list-decimal">
          <li>학석사연계 과정으로, 1년반만에 석사 취득</li>
          <li>차석 졸업</li>
          <li>우등상: 졸업 성적 우수자</li>
          <li>학과 장학금 수여: 학업 성적 및 태도 우수자</li>
          <li>조기 졸업(7학기)</li>
          <li>
            <span>이수 과목 보충 설명</span>
            <ul className="pl-5 list-inside list-disc marker:mr-2">
              <li>
                대수알고리즘: 대수학 이론을 SAGE(파이썬 기반 프로그래밍 언어)를
                사용해 실습
              </li>
              <li>데이터분석수학: 파아썬을 사아용해 선형 회귀 등 실습</li>
              <li>정보와수학: 파이썬을 사용해 RSA, PCA, SVD 등 실습</li>
              <li>컴퓨터프로그래밍기초: C++ 기초 학습</li>
            </ul>
          </li>
        </ol>
      </EducationSubsection>
    </section>
  );
};

export default Education;
