"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    try {
      const response = await fetch("https://random-word-api.herokuapp.com/word")
        .then((res) => res.json())
        .then((data) => data[0]);
      if (!response) return;
      router.push(`/search/web?searchTerm=${response}`);
    } catch (error) {
      console.error(error);
    } finally {
      setRandomSearchLoading(false);
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 flex w-full max-w-[90%] items-center justify-center rounded-full border border-gray-200 px-5 py-2 transition-shadow duration-300 focus-within:shadow-md focus-within:shadow-black hover:shadow-md hover:shadow-black sm:max-w-xl lg:max-w-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="  h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter keywords..."
          className=" ml-3 flex-grow focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="  h-8 w-8"
        >
          <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
          <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
        </svg>
      </form>
      <div className="flex justify-center space-x-5 pb-2 text-xl font-semibold text-white  md:text-3xl xl:text-4xl">
        <button
          onClick={handleSubmit}
          type="submit"
          className="flex items-center gap-x-2 rounded-xl bg-gradient-to-b from-gray-600 to-violet-600  px-5 py-2 shadow-md shadow-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black active:scale-90 active:shadow-md active:shadow-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 md:h-10 md:w-10"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="flex items-center gap-x-2 rounded-xl bg-gradient-to-b from-gray-600 to-violet-600 px-5  py-2 shadow-md shadow-black  transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black active:scale-90 active:shadow-md active:shadow-black disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {randomSearchLoading ? (
            <div className="bg-gradient-to-t from-yellow-500 to-slate-300 bg-clip-text">
              <p className="text-transparent">Loading...</p>
            </div>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 md:h-10 md:w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              A Word!
            </>
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
