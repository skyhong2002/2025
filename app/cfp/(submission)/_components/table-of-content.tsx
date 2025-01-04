"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TableOfContent({
  sections = [],
  submitUrl = "",
}: {
  theme: "red" | "light";
  sections: { id: string; title: string }[];
  submitUrl: string;
}) {
  const [currentSection, setCurrentSection] = useState<null | string>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries.toReversed()) {
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
      <nav className="sticky right-5 top-[100px] hidden w-min max-w-[200px] self-start md:block lg:w-[200px]">
        {submitUrl.length == 0 ? null : (
          <Link
            href={submitUrl}
            target="_blank"
            className="tableContentItem block w-full rounded-md bg-primary px-4 py-2 text-center font-bold text-black hover:bg-foreground max-[1024px]:active:scale-95 min-[1024px]:active:bg-primary"
          >
            立即投稿
          </Link>
        )}
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
    </>
  );
}
