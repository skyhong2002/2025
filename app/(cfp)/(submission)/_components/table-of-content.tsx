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
      <nav className="md: absolute right-0 top-[80px] hidden w-min md:block">
        <h2 className="mb-3 font-medium text-light-brown">本頁目錄</h2>
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
                className="mb-3 mr-3 text-nowrap text-light-brown"
              >
                {section.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* mobile */}
      <nav className="relative mx-4 md:hidden">
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
          <div className="absolute top-[40px] z-10 w-full rounded-lg bg-black p-2 shadow-lg">
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
                  className={`flex w-full justify-center rounded-lg bg-black p-0 py-4 text-gray transition duration-300 ${theme === "light" ? "hover:bg-gray hover:text-black" : "hover:bg-light-brown hover:text-red"} `}
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
