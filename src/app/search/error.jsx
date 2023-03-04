"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error:", error);
  }, [error, reset]);
  return (
    <div className="my-5 flex flex-col items-center justify-center pt-10">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
        Somethings went wrong!
      </h1>
      <button
        onClick={() => reset()}
        className="mt-10 rounded-xl bg-gradient-to-t from-amber-500 to-red-500 px-6 py-3 text-center text-xl font-semibold text-white shadow-md shadow-black md:text-2xl lg:text-4xl"
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
