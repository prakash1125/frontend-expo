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
<<<<<<< HEAD
      <div className="w-full  md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ref={scrollableRef}"><Sports scrollToTop={scrollToTop}/></div>
      <div className="px-2 hidden md:block w-1/4" >
=======
      <div className="w-full p-2 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <Sports />
        <Footer />
      </div>
      <div className=" hidden lg:flex lg:flex-col lg:basis-2/6 ">
>>>>>>> cf3a5b3ced196397c236e7f53c6f51b7d9ff9eec
        <RightNavbar />
      </div>
    </>
  );
};
