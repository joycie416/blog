import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileImg from "../../public/profile-img.jpg";
import Tistory from "../../public/icons/tistory-icon.svg";
import Github from "../../public/icons/github-icon.svg";

const Profile = () => {
  return (
    <section className="w-full sm:w-full sm:max-w-[--max-width] flex flex-col p-4 mx-auto sm:px-0">
      <div className="w-full grid grid-cols-2 gap-4 mb-6">
        <div>
          <Image
            src={ProfileImg}
            alt="프로필 이미지"
            className="w-[150px] sm:w-[300px] aspect-[2208/2944]"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p>
            도전을 즐기는 개발자 <br className="sm:hidden" /> 조해인입니다.
          </p>
          <div className="hidden sm:block">
            <p>
              다양한 방법으로 문제 상황을 해결하고 새로운 기술을 습득하고
              적용하는 것을 좋아합니다.
            </p>
            <p>
              TanStack Query의 AI와 영어로 대화하여, 검색으로 찾을 수 없었던
              TanStack Query 커스텀 훅의 런타임 에러를 해결했습니다. 또한 페이지
              로딩 속도를 개선하기 위해, shallow 라우팅을 지원하지 않는
              Next.js의 router.push 대신 history API를 사용했습니다.
            </p>
            <p>
              기존에 익숙한 기술에만 안주하지 않고, 다양한 영역에 도전하며
              지속적으로 성장하는 개발자가 되고자 합니다.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="https://joycie416.tistory.com/">
              <Image src={Tistory} alt="tistory" className="w-8" />
            </Link>
            <Link href="https://github.com/joycie416">
              <Image src={Github} alt="github" className="w-8" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm text-justify break-all sm:hidden">
        <p>
          다양한 방법으로 문제 상황을 해결하고 새로운 기술을 습득하고 적용하는
          것을 좋아합니다.
        </p>
        <p>
          TanStack Query의 AI와 영어로 대화하여, 검색으로 찾을 수 없었던
          TanStack Query 커스텀 훅의 런타임 에러를 해결했습니다. 또한 페이지
          로딩 속도를 개선하기 위해, shallow 라우팅을 지원하지 않는 Next.js의
          router.push 대신 history API를 사용했습니다.
        </p>
        <p>
          기존에 익숙한 기술에만 안주하지 않고, 다양한 영역에 도전하며
          지속적으로 성장하는 개발자가 되고자 합니다.
        </p>
      </div>
    </section>
  );
};

export default Profile;
