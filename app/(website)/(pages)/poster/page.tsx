"use client";

import { Pickaxe } from "lucide-react";
import { motion } from "framer-motion";

export default function PosterPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 22, 0], x: [-20, -10, -20], y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="origin-bottom-left"
      >
        <Pickaxe className="size-36" strokeWidth={1.3} />
      </motion.div>
      <motion.p
        initial={{ x: 0, y: 0 }}
        animate={{
          scale: [1, 1, 1.1, 1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-xl"
      >
        此頁面正在建置中...
      </motion.p>
    </div>
  );
}
