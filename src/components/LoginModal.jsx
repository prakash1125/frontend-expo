import React, { useState } from "react";
import { AiFillAndroid } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from 'react-i18next';

export const LoginModal = ({ closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { i18n, t } = useTranslation();
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
    <div className="z-50 ">
      <div className="fixed  inset-0 bg-gray-100 bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
        <div className=" relative bg-[black] p-5 rounded-xl w-96">
          <button
            className="absolute top-4 right-3"
            type="button"
            onClick={closeModal}
          >
            <MdOutlineClose className="text-[#CCD1D5] text-3xl font-bold" />
          </button>
          <h1 className="font-semibold text-center text-xl text-[#CCD1D5] mb-5 mt-1">
           {t("LOGIN")}
          </h1> 

          <div className="flex flex-col">
            <div className="phone-number mb-5">
              <label className="text-[#CCD1D5] text-xs font-semibold mb-2" htmlFor="">
               {t("PHONE_NUMBER")}
              </label>
              <input
                type="tel"
                className=" bg-[#22262a] w-full p-2 rounded focus:outline-none text-[#CCD1D5]"
                placeholder="+91XXXXXX"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div className="password">
              <label className="text-[#CCD1D5] text-xs font-semibold mb-2" htmlFor="">
                {t("PASSWORD")}
              </label>
              <input
                type="password"
                className=" bg-[#22262a] w-full p-2 rounded focus:outline-none text-[#CCD1D5]"
                placeholder="Password"
              />
            </div>
            <div className="text-sm text-right mt-1  ">
              <span className="cursor-pointer text-[#CCD1D5] hover:text-[#5c6060]">
               {t("FORGET_PASSWORD")}
              </span>
            </div>
            <div className="flex items-center mb-2 mt-4">
              <input
                className="mr-1 w-4 h-4"
                type="checkbox"
                name=""
                id="signed-in"
              />
              <label className="text-sm text-[#CCD1D5]" htmlFor="signed-in">
               {t("KEEP_ME_SIGNED_IN")}
              </label>
            </div>

            <button
              type="button"
              className="p-2 px-4 uppercase font-semibold rounded-md hover:bg-[#0D8247] bg-[#169c59] text-lg text-white focus:outline-none "
            >
              {" "}
               {t("LOG_IN")}
            </button>
          </div>

          <div className="text-center text-xs font-bold text-[#CCD1D5] leading-4 mt-1.5">
            <p className="mb-4">
       {t("EASY_BET")}
            </p>
          </div>

          <div className="download-btn ">
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-center p-1.5 px-4 w-full uppercase font-semibold rounded-md bg-[#32383e] text-lg text-white focus:outline-none "
            >
              {" "}
              {t("DOWNLOAD_APK")}
              <AiFillAndroid className="text-2xl" />
            </button>
          </div>

          <div className="text-sm text-center my-1">
            <p className="text-[#CCD1D5]">
             {t("DONT_HAVE_AN_ACC")} {" "}
              <span className="text-[#01932d] cursor-pointer">Join now {t("JOIN_NOW")} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
