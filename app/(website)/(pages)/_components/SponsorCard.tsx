import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SponsorCard(brandObj: {
  key: string | number;
  brand: { name: string; image: string; url: string };
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const brand = brandObj.brand;
  const index = brandObj.index;

  return (
    <>
      <motion.div
        key={brand.name || index}
        onClick={() => setIsOpen((prev) => !prev)}
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          filter: "drop-shadow(0px 0px 0px rgba(201,235,255,70))",
        }}
        className="flex h-[133px] w-full items-center justify-center rounded-lg bg-[#FFFFFF] shadow-md md:h-[165px] md:bg-white"
      >
        <div className="md:h-max-[105px] relative aspect-auto h-full w-[80%]">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            className="rounded-md object-scale-down"
          />
        </div>
      </motion.div>
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
              initial={{
                scale: 0.88,
                opacity: 0,
                y: 10,
                filter: "blur(0.35em)",
              }}
              animate={{ scale: 0.9, opacity: 1, y: 0, filter: "blur(0)" }}
              exit={{ scale: 0.8, opacity: 0, y: 10, filter: "blur(0.3em)" }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-5 flex flex-col items-center justify-between rounded-xl bg-white p-8 md:static md:max-w-[70%] md:justify-start lg:max-w-[60%]"
            >
              <div className="flex">
                <h2 className="mb-5 items-start justify-start text-3xl font-bold text-black">
                  {brand.name}
                </h2>
              </div>
              <div className="w-[80%]">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width="800"
                  height="800"
                  className="rounded-md object-scale-down"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
