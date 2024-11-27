"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function EarlyBird() {
  const [isOpen, setIsOpen] = useState(false);
  const expiredTime = new Date("2024-12-25T23:59:00+08:00").getTime();
  const isExpired = Date.now() > expiredTime;

  return (
    <>
      {!isExpired ? (
        <button
          onClick={() => setIsOpen(true)}
          className="z-10 flex w-full cursor-pointer items-center gap-5 rounded-lg border border-accent bg-[#271A3A] px-7 py-5 text-xl font-bold text-accent transition hover:brightness-125 max-sm:active:scale-90 min-[1024px]:active:brightness-90"
        >
          <ExclamationMark />
          <div className="flex flex-col items-start">
            <a>早鳥投稿計劃開催中！</a>
            <span className="text-sm text-accent opacity-60">
              點此瞭解什麼是早鳥投稿計劃
            </span>
          </div>
        </button>
      ) : null}
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export function EarlyBirdHome() {
  const expiredTime = new Date("2024-12-25T23:59:00+08:00").getTime();
  const isExpired = Date.now() > expiredTime;

  return (
    <>
      {!isExpired ? (
        <span className="relative z-10 flex w-full items-center gap-5 rounded-[28px] border border-accent bg-[#271A3A] px-7 py-2 text-xl font-bold text-accent transition hover:brightness-125 max-sm:flex-row">
          <ExclamationMark />
          <div className="max-sm:flex-col">
            <a>早鳥投稿計劃開催中！</a>
            <span className="text-sm text-accent opacity-60 sm:absolute sm:inset-y-3 sm:right-7">
              2024/12/25 23:59 截止
            </span>
          </div>
        </span>
      ) : null}
    </>
  );
}

function Dialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const emojiHandMotion = {
    rest: { rotate: 0, y: 0, x: 0 },
    hover: {
      rotate: -15,
      y: -2,
      x: 3,
    },
  };
  const emojiMouseMotion = {
    rest: {
      x: 0,
      y: 0,
    },
    hover: {
      x: [0, -1, -1, 0],
      y: [-1, 1, 0, 0],
      transition: {
        repeat: Infinity,
        duration: 0.2,
      },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ pointerEvents: "auto" }}
          className="fixed inset-0 z-50 m-0 flex scale-110 items-center justify-center bg-black/60"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 10, filter: "blur(0.35em)" }}
            animate={{ scale: 0.9, opacity: 1, y: 0, filter: "blur(0)" }}
            exit={{ scale: 0.8, opacity: 0, y: 10, filter: "blur(0.3em)" }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-5 flex flex-col items-center justify-between rounded-lg bg-background p-8 md:static md:max-w-[70%] md:justify-start lg:max-w-[60%]"
          >
            <h2 className="mb-5 w-full text-start text-3xl font-bold text-primary">
              早鳥投稿計劃
            </h2>
            <div className="max-md:overflow-y-scroll">
              <p className="text-lg leading-9">
                為了鼓勵講者儘早送出稿件，讓您的精彩想法可以更早進入我們的視野。同時也能讓您提早規劃與完善內容，以充裕的時間打造更精彩的分享。今年我們新增了「早鳥投稿」的機制！
              </p>
              <p className="mt-5 text-lg leading-9">
                凡是在早鳥投稿期間送出且{" "}
                <span className="subTitle hightlight">成功錄取</span>{" "}
                的稿件，我們將提供可在{" "}
                <span className="subTitle hightlight">
                  年會當天使用的紀念品抵用券
                </span>{" "}
                ，讓您盡情選購 SITCON 紀念品！
              </p>
              <p className="mt-5 text-lg leading-9">
                早鳥投稿的截止時間為{" "}
                <span className="subTitle hightlight">2024/12/25 23:59</span>
                ，請把握時間搶先投稿。已送出的稿件若有需要，也可以在 2025/1/21
                23:59
                投稿截止前修改稿件內容，在早鳥期限截止後編輯內容不會影響您早鳥投稿的資格與權利。
              </p>
              <p className="mt-5 text-lg leading-9">
                此外，{" "}
                <span className="subTitle hightlight">
                  早鳥投稿不會影響審稿過程
                </span>{" "}
                ，所有稿件都將根據相同的審核標準進行公平評選。我們期望能透過早鳥投稿計劃為講者提供更多彈性和激勵，並期待收到更多創新、多元的議程投稿，讓
                SITCON 年會更精彩！
              </p>
            </div>
            <motion.button
              whileHover="hover"
              initial="rest"
              exit="rest"
              className="mt-5 flex w-full justify-center rounded-lg bg-background-light px-10 py-3 text-lg transition hover:brightness-125 max-sm:active:scale-90 md:w-1/2 min-[1024px]:active:bg-background"
              onClick={() => setIsOpen(false)}
            >
              <span>好欸 ( </span>
              <motion.span
                className="origin-bottom-left"
                variants={emojiHandMotion}
              >
                ੭
              </motion.span>
              <span>˙</span>
              <motion.span variants={emojiMouseMotion}>ᗜ</motion.span>
              <span>˙)</span>
              <motion.span
                className="origin-bottom-left"
                variants={emojiHandMotion}
              >
                ੭
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ExclamationMark() {
  return (
    <svg
      width="8"
      height="25"
      viewBox="0 0 8 25"
      xmlns="http://www.w3.org/2000/svg"
      className="exclamation-mark fill-current"
    >
      <path
        d="M7.8125 21.0938C7.8125 23.2477 6.06016 25 3.90625 25C1.75234 25 0 23.2477 0 21.0938C0 18.9398 1.75234 17.1875 3.90625 17.1875C6.06016 17.1875 7.8125 18.9398 7.8125 21.0938ZM0.452148 1.23042L1.11621 14.5117C1.14741 15.1354 1.66216 15.625 2.28662 15.625H5.52588C6.15034 15.625 6.66509 15.1354 6.69629 14.5117L7.36035 1.23042C7.3938 0.561035 6.86016 0 6.18994 0H1.62256C0.952344 0 0.418701 0.561035 0.452148 1.23042Z"
        className="fill-current"
      />
    </svg>
  );
}
