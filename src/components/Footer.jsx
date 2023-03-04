import React from "react";
import Country from "./Country";

function Footer() {
  return (
    <div className=" sm:text-md absolute bottom-0 w-full bg-gradient-to-b from-gray-500 to-slate-300 text-sm md:text-lg xl:text-xl">
      <div className="border-b px-8 py-3">
        <Country />
      </div>
      <div className="flex flex-col items-center justify-between space-y-7 px-8 py-3 sm:flex-row sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link ">About</li>
          <li className="link ">Advertising</li>
          <li className="link ">Business</li>
          <li className="link ">How Search works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link ">Privacy</li>
          <li className="link ">Term</li>
          <li className="link ">Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
