"use client";
import Button from "./button";
import Dialog from "./Dialog";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Markdown from "react-markdown";

interface SponsorDataItem {
  title: string;
  image: string;
  description: string;
  url: string;
  urls?: { title: string; url: string }[];
}

export default function SponsorCard({
  data,
  className,
}: {
  data: SponsorDataItem;
  className?: string;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <motion.img
        src={`/2025/sponsor/${data.image}`}
        className={twMerge(
          "relative mx-auto w-full cursor-pointer rounded transition-all group-hover/sponsor:scale-110",
          className,
        )}
        alt={data.title}
        onClick={() => setIsDialogOpen(true)}
        whileTap={{ scale: 0.95 }}
      />
      <Dialog open={isDialogOpen} setOpen={setIsDialogOpen}>
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between text-2xl font-bold md:text-3xl">
            {data.title}
          </div>
          <img
            src={`/2025/sponsor/${data.image}`}
            className="mx-auto w-full max-w-[240px] rounded"
            alt={data.title}
          />
          <Markdown className="max-md:text-sm">{data.description}</Markdown>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {data.url && (
              <Button
                color="blue"
                url={data.url}
                className="text-base md:text-xl"
              >
                前往網站
              </Button>
            )}
            {data.urls &&
              data.urls.map((x) => (
                <Button
                  key={x.title}
                  color="blue"
                  url={x.url}
                  className="text-base md:text-xl"
                >
                  {x.title}
                </Button>
              ))}
          </div>
        </div>
        {/* <div
          className="h-4 w-full md:rounded-b-[10px]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(56, 90, 172, 0.80) 0%, rgba(148, 110, 52, 0.75) 58.96%, #462002 100%)`,
          }}
        /> */}
      </Dialog>
    </>
  );
}
