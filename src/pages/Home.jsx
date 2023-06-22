import { RightNavbar } from "../components/RightNavbar";
import { Home } from "../components/Home";
import { Chatbot } from "../components/Chatbot";
import Footer from "../components/Footer";

export const HomePage = () => {
  const scrollToTop = () => {
    console.log(window.scrollY, "called scroll");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full lg:p-2 p-1 overflow-y-scroll scrollbar-hide h-[91vh] ">
        <Home />
        <Footer scrollToTop={scrollToTop} />
      </div>
      <div className="hidden lg:flex lg:flex-col lg:basis-2/6">
        {/* <div className="px-2 z-0 hidden md:block w-1/4  "> */}
        <RightNavbar />
        {/* </div> */}
      </div>
    </>
  );
};
