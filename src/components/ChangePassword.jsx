import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const { i18n, t } = useTranslation();
export const ChangePassword = ({ closeModal }) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
    <div className="z-50">
      <div className="fixed inset-0 bg-gray-100 bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
        <div className="relative bg-[black] p-5 rounded-xl w-96">
          <button
            className="absolute top-4 right-3"
            type="button"
            onClick={()=>closeModal(false)}
          >
            <MdOutlineClose className="text-[#CCD1D5] text-3xl font-bold" />
          </button>
          <h1 className="font-semibold capitalize text-center text-xl text-[#CCD1D5] mb-5 mt-1">
            {t("CHANGE_PASSWORD")} 
          </h1>

          <div className="flex flex-col">
            <div className="current-password mt-3">
              <label
                className="text-[#CCD1D5] text-xs font-semibold"
                htmlFor=""
              >
                 {t("CURRENT_PASSWORD")} 
              </label>
              <input
                type="password"
                className=" bg-[#22262a] w-full mt-2 p-3 rounded focus:outline-none text-[#CCD1D5]"
                placeholder="Current Password"
              />
            </div>
            <div className="new-password mt-3">
              <label
                className="text-[#CCD1D5] text-xs font-semibold "
                htmlFor=""
              >
              {t("NEW_PASSWORD")} 
              </label>
              <input
                type="password"
                className=" bg-[#22262a] w-full mt-2 p-3 rounded focus:outline-none text-[#CCD1D5]"
                placeholder="New Password"
              />
            </div>
            <div className="confirm-password mt-3">
              <label
                className="text-[#CCD1D5] text-xs font-semibold"
                htmlFor=""
              >
                {t("CONFIRM_NEW_PASSWORD")} 
              </label>
              <input
                type="password"
                className=" bg-[#22262a] w-full p-3 mt-2 rounded focus:outline-none text-[#CCD1D5]"
                placeholder="Confirm New Password"
              />
            </div>

            <button
              type="button"
              className="p-2 px-4 mt-5 mb-10 capitalize font-semibold rounded-md hover:bg-[#0D8247] bg-[#169c59] text-lg text-white focus:outline-none "
            >
              {" "}
               {t("CHANGE_PASSWORD")} 
            </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};
