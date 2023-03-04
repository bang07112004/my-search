"use client";

import { useState, useEffect, useRef } from "react";

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);
  const footerRef = useRef(null);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 10) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 10) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // calculate the height of the footer
  const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 0;

  // set the button's bottom position to the height of the footer
  const buttonStyle = {
    bottom: `${footerHeight + 20}px`, // add some padding to separate the button from the footer
  };

  return (
    <button
      className={`fixed right-5 hidden rounded-full bg-gray-500 p-3 text-white transition-all duration-300 ease-in-out md:inline ${
        showScroll ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={buttonStyle}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
