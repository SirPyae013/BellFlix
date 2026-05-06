import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <header className="bg-[#1A191F] flex justify-between   flex-nowrap overflow-x-auto whitespace-nowrap h-19 w-full items-center  sm:h-20 xl:h-22  no-scrollbar top-0  absolute z-5">
      <h1 className="text-xl font-bold tracking-wider text-white sm:text-3xl xl:text-4xl ">
        <span className="text-[#ffb800]">BELL</span>FLIX
      </h1>

      <div className="flex gap-3 pl-5 pr-2  text-white justify-evenly text-sm font-normal sm:gap-6 sm:text-lg md:text-2xl xl:gap-7  font-mono">
        <Link href="/" className="hover:text-[#ffb800]">
          Home
        </Link>
        <Link href="/signin" className="hover:text-[#ffb800]">
          Sign-in
        </Link>
        <Link href="/signup" className="hover:text-[#ffb800]">
          Sign-Up
        </Link>
        <Link
          href="/forgotpassword"
          className="hover:text-[#ffb800]tracking-tighter"
        >
          ForgotPassword?
        </Link>
        <Link href="/notfound" className="hover:text-[#ffb800]">
          404
        </Link>
      </div>
    </header>
  );
};

export default header;
