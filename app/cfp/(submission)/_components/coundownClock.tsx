"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { calculateTimeLeft } from "./countdown";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// 這是client component 計算倒數時間
export default function CountdownClock() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  // const TARGET_DATE = "2025-01-21T23:59:59"; // 可以動態設置
  // function calculateTimeLeft(): TimeLeft {
  //   const now = new Date();
  //   const target = new Date(TARGET_DATE);
  //   const difference = target.getTime() - now.getTime();

  //   if (difference <= 0) {
  //     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  //   }

  //   return {
  //     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //     minutes: Math.floor((difference / (1000 * 60)) % 60),
  //     seconds: Math.floor((difference / 1000) % 60),
  //   };
  // }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // 更新倒數時間
    }, 1000);

    return () => clearInterval(timerId); // 清除計時器
  }, [timeLeft]); // 當 timeLeft 更新時觸發

  function formatToTwoDigits(num: number): string {
    return num.toString().padStart(2, "0");
  }
  return Object.entries(timeLeft).map(([key, value]) => (
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
  ));
}
