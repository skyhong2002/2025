"use client";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownPage() {
  const targetDate = "2025-01-01T00:00:00"; // 可以動態設置

  // 客戶端倒數計時邏輯
  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const target = new Date(targetDate);
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

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId); // 清除計時器
  }, []);

  return (
    <div className="flex h-[289px] w-[642px] flex-col justify-between lg:w-[840px]">
      <div className="h-[200px] w-full rounded-lg border border-light-brown"></div>
      <div className="flex h-[67px] w-full justify-between gap-[20px] lg:gap-[24px]">
        <div className="h-full w-[377px] rounded-lg border border-light-brown lg:w-[552px]"></div>
        <div className="h-full w-[246px] bg-orange lg:w-[264]">
          {timeLeft.days} {timeLeft.hours} {timeLeft.minutes} {timeLeft.seconds}
        </div>
      </div>
    </div>
  );
}

// 上方 642 * 200px

// 左右gap: pc 24px tablet 20px
// 上下gap: pc 22px tablet 22px

// 左下 377.09*67 552*67
// 右下 245.82*67 264*67
