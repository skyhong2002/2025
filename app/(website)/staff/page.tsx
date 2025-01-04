"use client";

import TableOfContent from "@/app/cfp/(submission)/_components/table-of-content";
// import TableOfContentMobile from "@/app/cfp/(submission)/_components/table-of-content-mobile";
import staffJson from "./staff.json";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const sections = staffJson.map((group) => ({
    id: group.group,
    title: group.group,
  }));
  const outside = {
    notOnHover: {
      scale: 1,
      filter: "drop-shadow(0px 0px 0px rgba(201,235,255,70))",
    },
    onHover: {
      scale: 1.2,
      filter: "drop-shadow(0px 0px 5px rgba(201,235,255,70))",
    },
  };

  const pictureBlur = {
    onHover: { opacity: 1, filter: "blur(0.5em) brightness(0.3)" },
    notOnHover: { opacity: 1, filter: "blur(0) brightness(1)" },
  };

  const icon = {
    onHover: { opacity: 1 },
    notOnHover: { opacity: 0 },
  };

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
        <div className="mb-4 flex flex-row gap-6">
          <Link
            className="flex h-[60px] w-[190px] items-center justify-center self-center rounded-full bg-primary text-black transition hover:bg-foreground max-[1024px]:active:scale-95 max-sm:px-3 md:mb-10 md:w-[153px] md:self-start min-[1024px]:active:bg-primary"
            href="https://forms.gle/rr93tuxJ9m9uStDf9"
            target="_blank"
          >
            跳坑表單
          </Link>
          <Link
            className="flex h-[60px] w-[190px] items-center justify-center self-center rounded-full bg-primary text-black transition hover:bg-foreground max-[1024px]:active:scale-95 max-sm:px-3 md:mb-10 md:w-[153px] md:self-start min-[1024px]:active:bg-primary"
            href="https://groups.google.com/g/sitcon"
            target="_blank"
          >
            郵件論壇
          </Link>
        </div>
        {/* <TableOfContentMobile theme="light" sections={sections} submitUrl="" /> */}
        {staffJson.map((group) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, filter: "blur(0.5em)" }}
            whileInView={{
              opacity: 1,
              filter: "blur(0)",
              transition: { duration: 0.25 },
            }}
            viewport={{ once: true }}
          >
            <section id={group.group} key={group.group} className="mb-8">
              <h2 className="text-h2-mobile font-bold md:text-h2">
                {group.group}
              </h2>
              <p>{group.description}</p>
              <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(78px,1fr))] gap-6 md:gap-12 md:gap-y-8">
                {group.staff.map((member) => (
                  <div key={member.name} id={member.name}>
                    <div className="flex flex-col items-center gap-4 text-center">
                      {member.website ? (
                        <motion.button
                          initial="notOnHover"
                          whileHover="onHover"
                          variants={outside}
                          onClick={() => window.open(member.website, "_blank")}
                          className="relative h-20 w-20 overflow-hidden rounded-full"
                        >
                          <motion.img
                            variants={pictureBlur}
                            src={`https://gravatar.com/avatar/${member.email}?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g`}
                            className="h-full w-full"
                          />
                          <motion.span
                            variants={icon}
                            className="material-icons absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                            style={{ fontSize: "30px" }}
                          >
                            open_in_new
                          </motion.span>
                        </motion.button>
                      ) : (
                        <motion.img
                          initial="notOnHover"
                          whileHover="onHover"
                          variants={outside}
                          src={`https://gravatar.com/avatar/${member.email}?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g`}
                          className="h-20 w-20 rounded-full"
                        />
                      )}
                      <div>
                        <h3 className="text-[16px] font-bold md:text-[19px]">
                          {member.name}
                        </h3>
                        <p className="text-[12px] md:text-[14px]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        ))}
      </div>
      <TableOfContent theme="light" sections={sections} submitUrl="" />
    </div>
  );
}
