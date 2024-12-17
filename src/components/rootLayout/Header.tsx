import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex px-4 py-2 sm:px-0 sticky top-0 left-0 right-0 bg-white">
      <div className="w-full sm:w-full sm:max-w-[--max-width] mx-auto ">
        <Link href="/">Haein</Link>
      </div>
    </header>
  );
};

export default Header;
