"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavbar } from "@/app/cfp/_components/navbar-context";

export default function TableOfContentMobile({
  theme = "light",
  sections = [],
  submitUrl,
}: {
  theme: "red" | "light";
  sections: { id: string; title: string }[];
  submitUrl: string;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { isNavbarExpanded } = useNavbar();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          break;
        }
      }
    });

    for (const section of sections) {
      const targetElement = document.querySelector(`#${section.id}`);
      if (!targetElement) continue;
      observer.observe(targetElement);
    }
  }, [sections]);

  return (
    <>
      <nav className="relative md:hidden">
        <AnimatePresence>
          {!isNavbarExpanded && (
            <motion.a
              key="submit"
              href={submitUrl}
              target="_blank"
              initial={{ scale: 0.95, opacity: 0, filter: "blur(0.5em)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0)" }}
              exit={{ scale: 0.95, opacity: 0, filter: "blur(0.5em)" }}
              transition={{ duration: 0.25 }}
              whileTap={{ scale: 0.95 }}
              className={`fixed bottom-2 left-2 right-2 z-30 rounded-md bg-background-light p-3 text-center text-lg shadow-2xl shadow-black brightness-150`}
            >
              立刻投稿
            </motion.a>
          )}
        </AnimatePresence>
        <div
          onClick={() => setShowDropdown((prev) => !prev)}
          className={`${theme === "light" ? "bg-background-light" : "bg-foreground"} flex h-[40px] items-center justify-between rounded-xl px-4 transition active:scale-95`}
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
