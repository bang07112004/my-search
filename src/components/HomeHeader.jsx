import Link from "next/link";
import React from "react";

function HomeHeader() {
  return (
    <header className="flex justify-end px-2 py-2 text-sm md:text-lg xl:text-xl">
      <div className="flex items-center gap-3">
        <Link
          href={"https://mail.google.com"}
          className="text-xl hover:underline"
        >
          Gmail
        </Link>
        <Link
          href={"https://image.google.com"}
          className="text-xl hover:underline"
        >
          Images
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10 cursor-pointer rounded-full p-1 transition-all duration-1000 hover:bg-gradient-to-b hover:from-blue-500 hover:to-pink-500"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
            clipRule="evenodd"
          />
        </svg>

        <button className="rounded-xl bg-opacity-0 bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-center text-xl font-bold text-white shadow-md shadow-black transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-black md:text-2xl xl:text-4xl">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
