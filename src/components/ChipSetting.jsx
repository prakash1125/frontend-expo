import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from 'react-i18next';

export const ChipSetting = ({ closeModal }) => {
  const [inputValues, setInputValues] = useState([
    {
      nameOne: "name",
      input1: "1000",
      nameTwo: "value",
      input2: "500",
    },
    {
      nameOne: "name",
      input3: "1000",
      nameTwo: "value",
      input4: "500",
    },
    {
      nameOne: "name",
      input5: "1000",
      nameTwo: "value",
      input6: "500",
    },
    {
      nameOne: "name",
      input7: "1000",
      nameTwo: "value",
      input8: "500",
    },
    {
      nameOne: "name",
      input9: "1000",
      nameTwo: "value",
      input10: "500",
    },
    {
      nameOne: "name",
      input11: "1000",
      nameTwo: "value",
      input12: "500",
    },
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedInputValues = inputValues.map((input) => {
      if (input.hasOwnProperty(name)) {
        return { ...input, [name]: value };
      }
      return input;
    });
    setInputValues(updatedInputValues);
  };

  const { i18n, t } = useTranslation();

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
    <div className="z-50">
      <div className="fixed inset-0 bg-gray-100 bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
        <div className=" bg-[black]  rounded-xl w-96">
          <div className=" relative p-5">
            <button
              className="absolute top-4 right-3"
              type="button"
              onClick={()=>closeModal(false)}
            >
              <MdOutlineClose className="text-[#CCD1D5] text-3xl font-bold" />
            </button>
            <h1 className="font-semibold text-center uppercase text-xl text-[#CCD1D5] mb-5 mt-1">
              Chips setting {t("CHIPS_SETTING")} 
            </h1>

            <div className="chip-container">
              {inputValues.map((input, index) => (
                <div className="chip-row flex items-center gap-6" key={index}>
                  <div className="chip-name">
                    <label
                      className="text-[#CCD1D5] text-xs font-semibold"
                      htmlFor=""
                    >
                      Name {t("NAME")} 
                    </label>
                    <input
                      name={`input${index * 2 + 1}`}
                      type="number"
                      className="bg-[#22262a] w-full p-2 rounded mt-2 focus:outline-none focus:bg-[#fff] text-[#454c53]"
                      placeholder=""
                      value={input[`input${index * 2 + 1}`]}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="chip-value">
                    <label
                      className="text-[#CCD1D5] text-xs font-semibold"
                      htmlFor=""
                    >
                      Value {t("VALUE")} 
                    </label>
                    <input
                      name={`input${index * 2 + 2}`}
                      type="number"
                      className="bg-[#22262a] w-full p-2 rounded mt-2 focus:outline-none focus:bg-[#fff] text-[#454c53]"
                      placeholder=""
                      value={input[`input${index * 2 + 2}`]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border-t-2 text-right border-[#fff]">
            <button
              type="button"
              className="p-1.5 px-3 uppercase font-semibold rounded-md hover:bg-[#0069d9  ] bg-[#007bff] text-lg text-white focus:outline-none "
            >
              {" "}
              Update {t("UPDATE")} 
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
