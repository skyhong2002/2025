"use client";
import data from "@/app/(website)/_data/agenda.json";
import SessionCard from "@/app/(website)/(pages)/_components/SessionCard";
import timeRender from "@/app/(website)/_utils/time-render";

import React from "react";

export default function MobileAgenda() {
  const allTimes = [
    "t0830",
    "t0900",
    "t0910",
    "t1000",
    "t1005",
    "t1055",
    "t1105",
    "t1145",
    "t1200",
    "t1245",
    "t1325",
    "t1335",
    "t1415",
    "t1425",
    "t1435",
    "t1445",
    "t1525",
    "t1605",
    "t1645",
    "t1655",
    "t1745",
  ];

  const styleToText = (time: string) => {
    // input time format: "t0830"
    // output style format: "08:30"
    return time.replace("t", "").replace(/(\d{2})(\d{2})/, "$1:$2");
  };
  // a function input times output [{time: "08:30", [session1,session2]"}, ...]
  const times = allTimes.map((time) => {
    const timeText = styleToText(time);
    return {
      text: timeText,
      sessions: data.sessions.filter(
        (session) => timeRender(session.start) === timeText,
      ),
    };
  });

  return (
    <div className="text-white">
      <div className="mt-4">
        {times.map((time) => (
          <div key={time.text}>
            <div className="flex h-[1px] w-full items-center text-white drop-shadow-2xl">
              <p>{time.text}</p>
              <hr className="ml-6 w-full bg-white" />
            </div>
            <div className="my-4 ml-16 flex flex-col gap-2">
              {time.sessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
