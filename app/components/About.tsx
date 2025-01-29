import { assets, infoList, toolsData, userData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const About: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Roboto"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Roboto"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex w-64 sm:w-80 rounded-3xl max-w-none items-center justify-center"
        >
          <Image
            alt="user image"
            src={assets.user_image}
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className=""
        >
          <p className="mb-10 max-w-2xl font-Roboto">{userData.about}</p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                  hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                  dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Link href={title === "Projects" ? "#work" : ""}>
                  <Image
                    alt="title"
                    src={isDarkMode ? iconDark : icon}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white ">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-Roboto dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm-gap-5"
          >
            {toolsData.map(({ tool, name }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 
                    rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image alt="tool" src={tool} className="w-5 sm:w-7" />
                <div
                  className="w-12 sm:w-14 aspect-square rounded-lg absolute flex items-center justify-center 
                   opacity-0 hover:opacity-100 transition-opacity bg-lightHover dark:bg-darkHover"
                >
                  <p className="text-xs text-center">{name}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
