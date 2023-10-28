import React from "react";
import Logo from "../../public/assets/Logo.svg";
import VK from "../../public/assets/Icon/vk.svg";
import Telegram from "../../public/assets/Icon/telegram.svg";
import WhatsApp from "../../public/assets/Icon/whatsapp.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 w-full pt-44 pb-20 xs:pb-14 flex flex-col items-center">
      <div className="flex w-full  mb-4 -mx-2 justify-center">
        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
          <VK className="h-6 w-6" />
        </div>
        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
          <Telegram className="h-6 w-6" />
        </div>
        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
          <WhatsApp className="h-6 w-6" />
        </div>
      </div>
      <p className="text-gray-400">©{new Date().getFullYear()} - Скулиум</p>
    </div>

  );
};

export default Footer;