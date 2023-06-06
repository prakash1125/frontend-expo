import React, { useEffect, useState } from 'react';

import { AiFillAndroid } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';

export const LoginModal = ({ closeModal, onLogin }) => {
    const dispatch = useDispatch();
    const [phoneNumberValue, setPhoneNumber] = useState("");
    const [passwordValue, setPassword] = useState("");

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        const inputValues = {
            username: phoneNumberValue,
            password: passwordValue
        };

        console.log('Input Values:', inputValues);

        dispatch(
            login({
                inputValues,
                callback: () => {
                    closeModal();
                    onLogin();
                }
            })
        )

        // Dispatch your login action with the input values here
        // For example: dispatch(loginAction(inputValues));

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
                            Login
                        </h1>

                        <div className="flex flex-col">
                            <div className="phone-number mb-5">
                                <label className="text-[#CCD1D5] text-xs font-semibold mb-2" htmlFor="phoneNumberInput">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumberInput"
                                    className="bg-[#22262a] w-full p-2 rounded focus:outline-none text-[#CCD1D5]"
                                    placeholder="+91XXXXXX"
                                    value={phoneNumberValue}
                                    onChange={handlePhoneNumberChange}
                                />
                            </div>
                            <div className="password">
                                <label className="text-[#CCD1D5] text-xs font-semibold mb-2" htmlFor="passwordInput">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="passwordInput"
                                    className="bg-[#22262a] w-full p-2 rounded focus:outline-none text-[#CCD1D5]"
                                    placeholder="Password"
                                    value={passwordValue}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="text-sm text-right mt-1">
                                <span className="cursor-pointer text-[#CCD1D5] hover:text-[#5c6060]">
                                    Forget Password?
                                </span>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <input className="mr-1 w-4 h-4" type="checkbox" name="" id="signed-in" />
                                <label className="text-sm text-[#CCD1D5]" htmlFor="signed-in">
                                    Keep me signed in
                                </label>
                            </div>
                            <button
                                type="button"
                                className="p-2 px-4 uppercase font-semibold rounded-md hover:bg-[#0D8247] bg-[#169c59] text-lg text-white focus:outline-none"
                                onClick={handleSubmit}
                            >
                                Log in
                            </button>
                        </div>

                        <div className="text-center text-xs font-bold text-[#CCD1D5] leading-4 mt-1.5">
                            <p className="mb-4">
                                Easy bet place on multiple sports,casino with our mobile
                                application
                            </p>
                        </div>

                        <div className="download-btn ">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 text-center p-1.5 px-4 w-full uppercase font-semibold rounded-md bg-[#32383e] text-lg text-white focus:outline-none "
                            >
                                {" "}
                                download apk
                                <AiFillAndroid className="text-2xl" />
                            </button>
                        </div>

                        <div className="text-sm text-center my-1">
                            <p className="text-[#CCD1D5]">
                                Don't have an account?{" "}
                                <span className="text-[#01932d] cursor-pointer">Join now</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
