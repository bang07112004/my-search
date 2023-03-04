export const dynamic = "force-dynamic";

import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="mt-24 text-center">
        <div className=" bg-gradient-to-b from-red-500 to-blue-500 bg-clip-text p-3 text-center tracking-wide">
          <h1 className="text-3xl font-bold text-transparent md:text-5xl xl:text-6xl">
            My Browser
          </h1>
        </div>
        <HomeSearch />
      </div>
    </>
  );
}
