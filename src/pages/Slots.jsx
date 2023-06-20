import React,  { Fragment, useRef } from "react";
import { Slots } from "../components/Slots";
import Footer from "../components/Footer";

export const SlotsPage = () => {
  const scrollableRef = useRef(null);
  const scrollToTop = () => {
    
    if (scrollableRef.current) {
      console.log("SlotsPage")
      scrollableRef.current.scrollIntoView(true);
    }
  };

  return (
    <div className="w-full md:p-1 overflow-y-scroll scrollbar-hide h-[91vh]" ref={scrollableRef} >
<Slots scrollToTop={scrollToTop}/>
    </div>
    
  );
};
