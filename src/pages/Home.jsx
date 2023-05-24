import { RightNavbar } from "../components/RightNavbar";
import { Home } from "../components/Home";
import { Chatbot } from "../components/Chatbot";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Chatbot />
      <div className="w-full  md:p-2 overflow-y-scroll scrollbar-hide h-[91vh] ">
        <Home />
        <Footer />
      </div>
      <div className="px-2 z-0 hidden lg:block w-1/4  ">
        <RightNavbar />
      </div>
      
    </>
  );
};  
