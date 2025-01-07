"use client";

import TableOfContent from "@/app/cfp/(submission)/_components/table-of-content";
import TableOfContentMobile from "@/app/cfp/(submission)/_components/table-of-content-mobile";
import staffJson from "./staff.json";
import Link from "next/link";
import GroupInfo from "../_components/group_info";

export default function Page() {
  const sections = staffJson.map((group) => ({
    id: group.group,
    title: group.group,
  }));

  return (
    <div className="flex items-start gap-8 py-8 text-normal-mobile md:text-normal">
      <div className="w-[95%]">
        <h1 className="mb-2 text-h1-mobile font-bold md:mb-4 md:text-h1">
          SITCON 團隊
        </h1>
        <p className="-mt-[60px] mb-3 space-y-4 pt-[80px] leading-[200%] md:mb-8">
          SITCON
          年會每年皆是許多志工奉獻時間與精神所舉辦，沒有大家的付出，就不可能會有如此內容豐富且高品質的年會，
          希望大家在參加之餘，也不要忘記背後工作人員的付出。
          <br />
          若你對參與 SITCON 年會的籌備有興趣，歡迎填寫跳坑表單或是關注 SITCON
          的郵件論壇，明年的籌備開始時，你就會收到相關的資訊！
        </p>
        <div className="mb-8 flex flex-row gap-6 max-sm:grid max-sm:grid-cols-2">
          <Link
            className="flex h-[60px] w-full items-center justify-center self-center rounded-full bg-primary text-black transition hover:bg-foreground max-[1024px]:active:scale-95 max-sm:px-3 md:mb-10 md:w-[153px] md:self-start min-[1024px]:active:bg-primary"
            href="https://forms.gle/rr93tuxJ9m9uStDf9"
            target="_blank"
          >
            跳坑表單
          </Link>
          <Link
            className="flex h-[60px] w-full items-center justify-center self-center rounded-full bg-primary text-black transition hover:bg-foreground max-[1024px]:active:scale-95 max-sm:px-3 md:mb-10 md:w-[153px] md:self-start min-[1024px]:active:bg-primary"
            href="https://groups.google.com/g/sitcon"
            target="_blank"
          >
            郵件論壇
          </Link>
        </div>
        <TableOfContentMobile theme="light" sections={sections} submitUrl="" />
        <div className="mt-4">
          {staffJson.map((group) => (
            <GroupInfo key={group.group} group={group} />
          ))}
        </div>
      </div>
      <TableOfContent theme="light" sections={sections} submitUrl="" />
    </div>
  );
}
