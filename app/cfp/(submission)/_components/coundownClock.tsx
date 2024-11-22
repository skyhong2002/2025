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
          initial={{
            opacity: 0,
            y: "-0.45em",
            scaleY: 0.7,
            filter: "blur(0.1em)",
            transformOrigin: "top",
          }}
          animate={{ opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            y: "0.65em",
            scaleY: 0.7,
            filter: "blur(0.3em)",
            transformOrigin: "bottom",
          }}
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
