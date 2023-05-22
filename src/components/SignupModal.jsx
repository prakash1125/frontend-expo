import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

export const SignupModal = ({ closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="z-50">
      <div className="fixed inset-0 bg-gray-100 bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
        <div className="relative bg-[black] p-5 rounded-xl w-96">
          <button
            className="absolute top-4 right-3"
            type="button"
            onClick={closeModal}
          >
            <MdOutlineClose className="text-[#CCD1D5] text-3xl font-bold" />
          </button>
          <h1 className="font-semibold text-center text-xl text-[#CCD1D5] mb-5 mt-1">
            Signup
          </h1>

          <div className="flex flex-col">
            <div className="phone-number mb-5">
              <label
                className="text-[#CCD1D5] text-xs font-semibold mb-2"
                htmlFor=""
              >
                Phone Number
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="tel"
                  className="w-20 text-center bg-[#22262a] w-full p-3 rounded focus:outline-none text-[#CCD1D5]"
                  placeholder="91"
                  value="91"
                />
                <input
                  type="tel"
                  className=" bg-[#22262a] w-full p-3 rounded focus:outline-none text-[#CCD1D5]"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
            </div>
            <div className="password">
              <label
                className="text-[#CCD1D5] text-xs font-semibold mb-2"
                htmlFor=""
              >
                Password
              </label>
              <input
                type="password"
                className=" bg-[#22262a] w-full p-3 rounded focus:outline-none text-[#CCD1D5]"
                placeholder="Password"
              />
            </div>
            <div className="confirm-password mt-3">
              <label
                className="text-[#CCD1D5] text-xs font-semibold mb-2"
                htmlFor=""
              >
                Confirm Password
              </label>
              <input
                type="password"
                className=" bg-[#22262a] w-full p-3 rounded focus:outline-none text-[#CCD1D5]"
                placeholder="Confirm Password"
              />
            </div>

            <button
              type="button"
              className="p-2 px-4 mt-5 uppercase font-semibold rounded-md hover:bg-[#0D8247] bg-[#169c59] text-lg text-white focus:outline-none "
            >
              {" "}
              Join Now
            </button>
          </div>

          <div className="text-sm text-center my-3">
            <p className="text-[#CCD1D5]">
              Already have account?{" "}
              <span className="text-[#01932d] cursor-pointer">Login</span>
            </p>
          </div>

          <div className="download-btn ">
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-center p-2 px-4 w-full font-semibold rounded-md bg-[#169c59] text-lg text-white focus:outline-none "
            >
              {" "}
              <BsWhatsapp className="text-2xl" />
              Get id easily on whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
