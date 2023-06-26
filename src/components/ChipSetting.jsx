import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { chipSetting } from "../redux/actions";
import { useDispatch } from "react-redux";


export const ChipSetting = ({ closeModal  }) => {
  const { register, handleSubmit } = useForm();
  
  // Calling the API(post)
  const dispatch = useDispatch();
  const onSubmit = (chip) => {
    dispatch(
      chipSetting({
        chip,
        callback: (data) => {
          if (data) {
            closeModal(false);
            // localStorage?.setItem("token", data?.meta?.token);
          }
        },
        errorCallback: (error) => {
        },
      })
    );
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
      <div className="z-50">
        <div className="fixed inset-0 bg-gray-100 bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
          <div className="bg-[black] rounded-xl w-96">
            <div className="relative p-5">
              <button
                className="absolute top-4 right-3"
                type="button"
                onClick={() => closeModal(false)}
              >
                <MdOutlineClose className="text-[#CCD1D5] text-3xl font-bold" />
              </button>
              <h1 className="font-semibold text-center uppercase text-xl text-[#CCD1D5] mb-5 mt-1">
                Chips setting
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="chip-container">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((input, index) => (
                    <div className="chip-row flex items-center gap-6" key={index}>
                      <div className="chip-name">
                        <label
                          className="text-[#CCD1D5] text-xs font-semibold"
                          htmlFor={`nameInput-${index}`}
                        >
                          Name
                        </label>
                        <input
                          id={`nameInput-${index}`}
                          {...register(`chip[${index}].name`)}
                          type="text"
                          className="bg-[#22262a] w-full p-2 rounded mt-2 focus:outline-none focus:bg-[#fff] text-[#454c53]"
                          placeholder=""
                          // defaultValue={input.name}
                        />
                      </div>
                      <div className="chip-value">
                        <label
                          className="text-[#CCD1D5] text-xs font-semibold"
                          htmlFor={`valueInput-${index}`}
                        >
                          Value
                        </label>
                        <input
                          id={`valueInput-${index}`}
                          // {...register(`chip[${index}].value`)}
                          {...register(`chip[${index}].value`, {
                            setValueAs: v => parseInt(v),
                          })}
                          type="number"
                          className="bg-[#22262a] w-full p-2 rounded mt-2 focus:outline-none focus:bg-[#fff] text-[#454c53]"
                          placeholder=""
                          // defaultValue={input.value}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 mt-4 border-t-2 text-right border-[#fff]">
                  <button
                    type="submit"
                    className="p-1.5 px-3 uppercase font-semibold rounded-md hover:bg-[#0069d9  ] bg-[#007bff] text-lg text-white focus:outline-none "
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
