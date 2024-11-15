import Link from "next/link";

export default function TableOfContent() {
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
    <nav className="absolute right-0 top-6 w-min">
      <h2 className="mb-3 font-medium">本頁目錄</h2>
      <div className="mb-3 h-[1px] w-[143px] bg-light-brown lg:w-[264px]" />
      <ul>
        {sections.map((section) => (
          <li key={section.id} className="tableContentItem">
            <Link href={`#${section.id}`} className="w-full">
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
