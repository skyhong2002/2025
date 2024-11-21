"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import CalendarSvg from "./logos/calendar";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownPage() {
  const TARGET_DATE = "2025-01-21T23:59:59"; // 可以動態設置
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 客戶端倒數計時邏輯
  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const target = new Date(TARGET_DATE);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // 更新倒數時間
    }, 1000);

    return () => clearInterval(timerId); // 清除計時器
  }, [timeLeft]); // 當 timeLeft 更新時觸發

  function formatToTwoDigits(num: number): string {
    return num.toString().padStart(2, "0");
  }

  return (
    <div className="mx-auto hidden h-[289px] w-full flex-col justify-between md:mb-16 md:flex">
      <div className="flex h-[200px] w-full flex-col items-center rounded-3xl border border-foreground px-24 py-5">
        <h3 className="text-normal tracking-widest text-foreground">
          距 離 投 稿 截 止 還 有 :
        </h3>
        <div className="mt-5 flex w-full justify-between">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="relative">
              <div className="mb-2 flex flex-col items-center">
                <motion.span
                  key={value}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-6xl text-foreground"
                >
                  {formatToTwoDigits(value)}
                </motion.span>
                <p className="text-normal font-light text-foreground">
                  {key.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-[67px] w-full justify-between">
        <div className="flex h-full w-[57%] items-center justify-between rounded-2xl border border-foreground px-5">
          <CalendarSvg height={48} width={48} />
          <div className="w-full justify-between pl-2 text-foreground lg:pl-12 min-[1210px]:flex">
            <p className="whitespace-nowrap text-nowrap font-bold">截止日期</p>
            <p className="whitespace-nowrap text-nowrap">
              2025 年 1 月 21 日（二）23:59
            </p>
          </div>
        </div>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="h-full w-[40%] rounded-2xl bg-foreground hover:bg-primary transition-all duration-[0.4s]"
        >
          <Link
            className="flex h-full w-full items-center justify-center"
            href={"/cfp/deadline.ics"}
          >
            <h3 className="flex h-full items-center justify-center text-xl font-bold text-black">
              把截止日期加入行事曆
            </h3>
            {/* <motion.div
              animate={{
                x: !isHovered ? 0 : 10,
                y: !isHovered ? 0 : -10,
                scale: !isHovered ? 1 : 1.2,
              }}
            >
              <Image
                src={UpRightArrowSvg}
                width={40}
                height={40}
                alt="up_right_arrow"
                className="mr-5"
              />
            </motion.div>
            <motion.div
              animate={{
                x: !isHovered ? 0 : 10,
                y: !isHovered ? 0 : -10,
                scale: !isHovered ? 1 : 1.2,
              }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src={UpRightArrowSvg}
                width={40}
                height={40}
                alt="up_right_arrow"
              />
            </motion.div> */}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
