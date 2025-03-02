"use client";

import Image from "next/image";
import posterData from "./posterData";

export default function PosterPage() {
  return (
    <div>
      <h1 className="pb-16 text-h1 font-bold text-[#FFFFFF]">靜態海報展</h1>
      <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posterData.map((poster) => (
          <div key={poster.title}>
            <Image
              src={`/poster/${poster.image}`}
              alt={poster.title}
              width={400}
              height={10}
              className="rounded-lg"
            />
            <h3 className="pt-4 text-h3 text-[#FFFFFF]">{poster.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
