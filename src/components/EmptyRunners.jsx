import React from "react";

const EmptyRunners = () => {
  const number = 6;
  return (
    <>
      {Array.from({ length: number }, (_, index) => (
        <div className="inline-block flex-1  " key={index}>
          <div className="flex drop-shadow-sm rounded-sm ">
            <div
              className={`w-[100%] py-1.5 rounded-md m-1 flex justify-center text-md font-bold   bg-skin-marketcard   cursor-pointer ${
                index % 2 === 0 ? "text-skin-blue" : "text-skin-pink"
              }`}
            >
              <span className="m-auto brightness-125">-</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EmptyRunners;
