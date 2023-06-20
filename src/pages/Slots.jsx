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
<<<<<<< HEAD
    <div className="w-full md:p-1 overflow-y-scroll scrollbar-hide h-[91vh]" ref={scrollableRef} >
<Slots scrollToTop={scrollToTop}/>
    </div>
    
=======
    <>
      <div className="w-full   md:p-1 overflow-y-scroll scrollbar-hide h-[91vh]  ">
        <Slots />
        <Footer />
      </div>
    </>
>>>>>>> cf3a5b3ced196397c236e7f53c6f51b7d9ff9eec
  );
};
