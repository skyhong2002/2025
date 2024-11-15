"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TableOfContent({
  theme = "light",
}: {
  theme: "red" | "light";
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const sections = [
    { id: "important-dates", title: "重要時程" },
    { id: "session-types", title: "議程種類" },
    { id: "submission-topics", title: "投稿主題範例" },
    { id: "submission-format", title: "投稿格式" },
    { id: "review-process", title: "審稿方式" },
    { id: "code-of-conduct", title: "Code of Conduct" },
    { id: "submission-guidelines", title: "投稿注意事項" },
    { id: "license", title: "授權" },
    { id: "practice-talk", title: "試講" },
    { id: "rehearsal", title: "彩排" },
    { id: "qa", title: "QA" },
  ];

  return (
    <>
      {/* pc & tablet */}
      <nav className="md: absolute right-0 top-6 hidden w-min md:block">
        <h2 className="mb-3 font-medium">本頁目錄</h2>
        <div className="mb-3 h-[1px] w-[143px] bg-light-brown lg:w-[264px]" />
        <ul>
          {sections.map((section) => (
            <Link href={`#${section.id}`} className="tableContentItem">
              <li key={section.id} className="mb-3">
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
                  className={`text-gray flex w-full justify-center rounded-lg bg-black p-0 py-4 transition duration-300 ${theme === "light" ? "hover:bg-gray hover:text-black" : "hover:bg-light-brown hover:text-red"} `}
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
