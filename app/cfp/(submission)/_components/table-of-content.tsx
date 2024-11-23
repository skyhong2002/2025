"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TableOfContent({
  theme = "light",
  sections = [],
  submitUrl,
}: {
  theme: "red" | "light";
  sections: { id: string; title: string }[];
  submitUrl: string;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSection, setCurrentSection] = useState<null | string>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setCurrentSection("#" + entry.target.id);
          break;
        }
      }
    });

    for (const section of sections) {
      const targetElement = document.querySelector(`#${section.id}`);
      if (!targetElement) continue;
      observer.observe(targetElement);
    }

    setCurrentSection(`#${sections[0].id}`);
  }, [sections]);

  return (
    <>
      {/* pc & tablet */}
      <nav className="md: fixed right-5 top-[100px] hidden w-min max-w-[200px] md:block lg:w-[200px]">
        <Link
          href={submitUrl}
          target="_blank"
          className="tableContentItem block w-full rounded-md bg-primary px-4 py-2 text-center font-bold text-black hover:bg-foreground"
        >
          立即投稿
        </Link>
        <h2 className="mb-3 text-h3 font-extrabold text-foreground">
          本頁目錄
        </h2>
        <div className="mb-3 h-[1px] bg-primary" />
        <ul className="w-full">
          {sections.map((section) => (
            <Link
              href={`#${section.id}`}
              onClick={() => setCurrentSection(`#${section.id}`)}
              key={section.id}
              className={`${currentSection === `#${section.id}` ? "currentTableContentItem" : "tableContentItem"}`}
            >
              <li
                key={section.id}
                className="mb-1 mr-3 h-[30px] text-nowrap text-foreground"
              >
                {section.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* mobile */}
      <nav className="relative md:hidden">
        <Link
          href={submitUrl}
          className="fixed bottom-2 left-2 right-2 block rounded-md bg-background-light p-3 text-center text-lg brightness-150"
          target="_blank"
        >
          立刻投稿
        </Link>
        <div
          onClick={() => setShowDropdown((prev) => !prev)}
          className={`${theme === "light" ? "bg-background-light" : "bg-foreground"} flex h-[40px] items-center justify-between rounded-xl px-4`}
        >
          <h2
            className={`font-bold ${theme === "light" ? "text-foreground" : "text-red"}`}
          >
            本頁目錄
          </h2>
          <span
            className={`material-symbols-outlined ${theme === "light" ? "text-foreground" : "text-red"} `}
          >
            {showDropdown ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        </div>
        {/* dropDown */}
        {showDropdown && (
          <div
            className={`absolute top-[50px] z-10 w-full rounded-lg ${theme === "light" ? "bg-background-light" : "bg-background-light"} p-2 shadow-lg`}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: -20, backgroundColor: "#D3C4B7" }}
                animate={{ opacity: 1, y: 0, backgroundColor: "#000000" }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.03,
                  ease: "easeInOut",
                }} // 動畫時間
              >
                <Link
                  href={`#${section.id}`}
                  className={`flex w-full justify-center border-b border-foreground/30 p-0 py-4 transition duration-300 ${theme === "light" ? "bg-background-light text-foreground" : "bg-background-light text-red"}`}
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
