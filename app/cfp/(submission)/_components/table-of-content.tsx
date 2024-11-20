"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TableOfContent({
  theme = "light",
  sections = [],
}: {
  theme: "red" | "light";
  sections: { id: string; title: string }[];
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {/* pc & tablet */}
      <nav className="md: fixed right-0 top-[100px] hidden w-min md:block lg:w-[15%]">
        <h2 className="mb-3 font-extrabold text-light-brown">本頁目錄</h2>
        <div className="mb-3 h-[1px] bg-light-brown" />
        <ul>
          {sections.map((section) => (
            <Link
              href={`#${section.id}`}
              key={section.id}
              className="tableContentItem"
            >
              <li
                key={section.id}
                className="mb-3 mr-3 h-[30px] text-nowrap font-bold text-light-brown"
              >
                {section.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* mobile */}
      <nav className="relative md:hidden">
        <div
          onClick={() => setShowDropdown((prev) => !prev)}
          className={`${theme === "light" ? "bg-gray" : "bg-light-brown"} flex h-[40px] items-center justify-between rounded-xl px-4`}
        >
          <h2
            className={`font-bold ${theme === "light" ? "text-black" : "text-red"}`}
          >
            本頁目錄
          </h2>
          <span
            className={`material-symbols-outlined ${theme === "light" ? "text-black" : "text-red"} `}
          >
            {showDropdown ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        </div>
        {/* dropDown */}
        {showDropdown && (
          <div
            className={`absolute top-[40px] z-10 w-full rounded-lg ${theme === "light" ? "bg-gray" : "bg-light-brown"} p-2 shadow-lg`}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: -20, backgroundColor: "#D3C4B7" }}
                animate={{ opacity: 1, y: 0, backgroundColor: "#000000" }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }} // 動畫時間
              >
                <Link
                  href={`#${section.id}`}
                  className={`flex w-full justify-center border-b p-0 py-4 transition duration-300 ${theme === "light" ? "bg-gray text-black" : "bg-light-brown text-red"}`}
                  onClick={() => setShowDropdown(false)}
                >
                  <div className=" ">{section.title}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
