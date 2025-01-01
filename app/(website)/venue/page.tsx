"use client";
import Image from "next/image";

import { useState } from "react";
import { motion } from "framer-motion";

type Floor = "2F" | "3F" | "4F";
export default function Page() {
  const [Floor, setFloor] = useState<Floor>("2F");

  const options: Array<{ label: string; value: Floor; number: string }> = [
    { label: "2F", value: "2F", number: "2" },
    { label: "3F", value: "3F", number: "3" },
    { label: "4F", value: "4F", number: "4" },
  ];

  return (
    <div className="flex w-full flex-col items-start justify-center gap-8 text-[#ffffff]">
      <section
        id="address"
        className="flex w-full flex-col items-center gap-3 font-bold"
      >
        <h1 className="self-start text-h1-mobile font-bold md:text-h1">
          會場地圖
        </h1>
      </section>
      <section id="map" className="flex w-full flex-col gap-8">
        <div className="flex w-full justify-between gap-2 text-h3-mobile font-bold md:gap-6 md:text-h3">
          {options.map((option) => (
            <motion.button
              initial={{ scale: 1, shadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.8)",
              }}
              key={option.value}
              onClick={() => setFloor(option.value)}
              className={`flex h-[60px] flex-grow items-center justify-center rounded-xl text-black ${
                Floor === option.value ? "bg-[#B9D3E6]" : "bg-[#DEE6EB]"
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </section>
      <div className="flex max-h-[740px] w-full">
        <Image
          src={`/2025/image/${Floor}.svg`}
          alt={`${Floor} Floor Image`}
          width={1024}
          height={768}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
