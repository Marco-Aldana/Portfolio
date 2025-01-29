import { assets, socialMedia, userData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image alt="logo" src={isDarkMode ? assets.logo_dark : assets.logo} className="w-36 mx-auto mb-2" />
        <a href={"mailto:"+userData.email} className="w-max flex items-center gap-2 mx-auto">
          <Image alt="logo" src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className="w-6" />
          {userData.email}
        </a>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {new Date().getFullYear()} Marco Aldana. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {socialMedia.map(({ name, url }, index) => (
            <li key={index}>
              <a href={url} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
