"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TriangleAlert, CircleX, ArrowUpRight } from "lucide-react";

import Svg2F from "@/public/image/2F.svg";
import Svg3F from "@/public/image/3F.svg";
import Svg4F from "@/public/image/4F.svg";
import venueData from "./venueData";

// Define the Venue interface
interface Venue {
  number: string;
  title: string;
  description: string;
  url?: string;
}

export default function Page() {
  const [Floor, setFloor] = useState<Floor>("2F");
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

  // Reset selected venue when floor changes
  useEffect(() => {
    setSelectedVenue(null);
  }, [Floor]);

  type Floor = "2F" | "3F" | "4F";
  type VenueDataKey = keyof typeof venueData;

  const options: Array<{
    label: string;
    value: Floor;
    number: string;
    image: string;
  }> = [
    { label: "2F", value: "2F", number: "2", image: Svg2F.src },
    { label: "3F", value: "3F", number: "3", image: Svg3F.src },
    { label: "4F", value: "4F", number: "4", image: Svg4F.src },
  ];

  const currentFloorNumber = options.find(
    (option) => option.value === Floor,
  )?.number;

  const currentVenueData = currentFloorNumber
    ? (venueData[currentFloorNumber as unknown as VenueDataKey] as Venue[])
    : [];

  interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    content: React.ReactNode;
    title: string;
    number: string;
    url?: string | boolean;
  }

  const Popup = ({
    isOpen,
    onClose,
    content,
    title,
    number,
    url,
  }: PopupProps) => {
    // Handle ESC key press to close popup
    useEffect(() => {
      const handleEscKey = (event: { keyCode: number }) => {
        if (event.keyCode === 27 && isOpen) {
          onClose();
        }
      };

      window.addEventListener("keydown", handleEscKey);

      return () => {
        window.removeEventListener("keydown", handleEscKey);
      };
    }, [isOpen, onClose]);

    // If not open, don't render anything
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur transition-all duration-300">
        <div className="mx-4 w-full max-w-xl overflow-hidden rounded-3xl bg-[#FFFFFF] text-black shadow-lg">
          <div className="mx-4 mt-3 flex items-center justify-between p-4">
            <h3 className="text-lg font-medium">
              {number}. {title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <CircleX />
            </button>
          </div>
          <div className="mx-4 p-4 text-zinc-700">{content}</div>
          {typeof url === "string" && (
            <a
              href={url}
              target="_blank"
              rel="https://sitcon.org/2025/venue"
              className="bg-blue-600 mb-4 flex items-center justify-center py-2 text-center text-sky-500"
            >
              更多資訊
              <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-start justify-center gap-12 text-[#ffffff]">
      <section
        id="address"
        className="flex w-full flex-col items-center gap-3 font-bold"
      >
        <div className="flex w-full justify-end text-left">
          <h1 className="flex-none self-start text-h1-mobile font-bold md:text-h1">
            會場地圖
          </h1>
          <div className="ml-4 flex flex-1 items-center gap-1">
            <TriangleAlert size={30} className="my-auto text-[#EB5757]" />
            <p className="my-auto pl-1 text-xl font-bold">緊急避難圖</p>
          </div>
        </div>
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
      <div className="flex w-full flex-col gap-8">
        <div className="max-h-[740px] w-full">
          <Image
            src={options.find((option) => option.value === Floor)?.image ?? ""}
            alt={`${Floor} Floor Image`}
            width={1024}
            height={768}
            className="mx-auto"
          />
        </div>

        <div className="mt-8 w-full">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {currentVenueData.map((venue) => (
              <div
                key={venue.number}
                className="cursor-pointer rounded-lg p-6 shadow-lg transition-colors hover:bg-slate-900"
                onClick={() => setSelectedVenue(venue)}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-[#B9D3E6] px-3 py-1 text-sm font-semibold text-black">
                    {venue.number}
                  </span>
                  <h3 className="text-xl font-bold">{venue.title}</h3>
                </div>
                <p className="text-gray-300">
                  {venue.description.slice(0, 20)}
                  {venue.description.length > 20 && "..."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render a single popup for the selected venue */}
      {selectedVenue && (
        <Popup
          isOpen={!!selectedVenue}
          onClose={() => setSelectedVenue(null)}
          title={selectedVenue.title}
          content={selectedVenue.description}
          number={selectedVenue.number}
          url={
            "url" in selectedVenue &&
            typeof selectedVenue.url === "string" &&
            selectedVenue.url
          }
        />
      )}
    </div>
  );
}
