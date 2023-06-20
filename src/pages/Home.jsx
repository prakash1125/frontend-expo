import { RightNavbar } from "../components/RightNavbar";
import { Home } from "../components/Home";
import { Chatbot } from "../components/Chatbot";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <>
<<<<<<< HEAD
      <Chatbot />
      <div className="w-full md:w-3/4 md:p-2 overflow-y-scroll scrollToTop={scrollToTop} scrollbar-hide h-[91vh] ">
        <Home />
        <Footer/>
      </div>
      <div className="px-2 z-0 hidden md:block w-1/4  ">
        <RightNavbar />
      </div>
    </>
  );
};  

=======
        <div className="w-full lg:p-2 p-1 overflow-y-scroll scrollbar-hide h-[91vh] ">
          <Home />
          <Footer />
        </div>
        <div className=" hidden lg:flex lg:flex-col lg:basis-2/6 ">
        {/* <div className="px-2 z-0 hidden md:block w-1/4  "> */}
          <RightNavbar />
        {/* </div> */}
        </div>
    </>
  );
};
>>>>>>> cf3a5b3ced196397c236e7f53c6f51b7d9ff9eec
