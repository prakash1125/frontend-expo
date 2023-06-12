import React, { useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from 'react-i18next';

export const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };
   
  const { i18n, t } = useTranslation();

  return (
    <>
      {!isChatOpen && (
        <div
          className="bg-[#169c59] absolute bottom-16 left-2 p-4 rounded-md rounded-l-full rounded-br-full"
          onClick={handleChatToggle}
        >
          <MdOutlineMessage className="text-3xl text-white" />
        </div>
      )}


      {isChatOpen && (
        <div className="rounded-md chat-wrapper bg-[#f4f5f7] absolute bottom-16 left-5 w-96 h-3/6 z-50">
          <div
            className="absolute cross-icon rounded-full bg-[#525b6a] font-black px-4 py-2 right-0 -top-9 cursor-pointer hover:bg-[#6f7b91]"
            onClick={handleCloseChat}
          >
            <RxCross2 className="text-white text-lg" />
          </div>

          <div className="header h-28 bg-[#1d2124] pt-4 px-3">
            <div className="logo w-full">
              <img
                className="w-1/3"
                src="https://fc-use1-00-pics-bkt-00.s3.amazonaws.com/f66a806fa38f8c58f80f8ca109c6fd93dcf58f8476cecc0fce1a87f750d2ebb3/f_marketingpicFull/u_cfcd13f3dff021eb2582786ea787ae377d7894a11b8482ef430187bc798e7bff/img_d5bp9k000l_059675f03ca860c850696b5e9b7e401a1dbbc7f05ef82a11fbb6a1e769ce5888.png"
                alt=""
              />
            </div>
            <div className="info text-white pt-3 pb-2 font-bold">
              Chat with us {t("CHAT_WITH_US")} 
            </div>
          </div>

          <div className="text-input absolute bottom-0 w-full">
            <input
              className="w-full focus:outline-none px-4 py-4"
              placeholder="Reply here..."
              type="text"
            />
          </div>
        </div>
      )}
    </>
  );
};
