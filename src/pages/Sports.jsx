import { RightNavbar } from "../components/RightNavbar";
import { Sports } from "../components/Sports";

export const SportsPage = () => {
  return (
    <>
      <div className="w-full p-2 overflow-y-scroll scrollbar-hide h-[91vh]  "><Sports /></div>
      <div className=" hidden lg:flex lg:flex-col lg:basis-2/6 ">
        <RightNavbar />
      </div>
    </>
  );
};
