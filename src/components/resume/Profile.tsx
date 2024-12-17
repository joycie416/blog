import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileImg from "../../public/profile-img.jpg";
import Tistory from "../../public/icons/tistory-icon.svg";
import Github from "../../public/icons/github-icon.svg";

const Profile = () => {
  return (
    <section className="w-full sm:w-full sm:max-w-[--max-width] p-4 mx-auto grid grid-cols-2 gap-4 sm:px-0">
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
        <div className="flex gap-2">
          <Link href="https://joycie416.tistory.com/">
            <Image src={Tistory} alt="tistory" className="w-8" />
          </Link>
          <Link href="https://github.com/joycie416">
            <Image src={Github} alt="github" className="w-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
