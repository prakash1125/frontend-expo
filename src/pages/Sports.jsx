import Footer from "../components/Footer";
import { RightNavbar } from "../components/RightNavbar";
import { Sports } from "../components/Sports";
import React, { useRef } from 'react';


export const SportsPage = () => {
  const scrollableRef = useRef(null);
  const scrollToTop = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <div className="w-full  md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ref={scrollableRef}"><Sports scrollToTop={scrollToTop}/></div>
      <div className="px-2 hidden md:block w-1/4" >
        <RightNavbar />
      </div>
    </>
  );
};
