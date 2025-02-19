"use client";
import data from "@/public/sessions.json";
import SessionCard from "@/app/(website)/(pages)/_components/SessionCard";
import timeRender from "@/app/(website)/_utils/time-render";

import React from "react";

export default function MobileAgenda() {
  function parseTime(time: Date) {
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Taipei",
    });
  }

  const sessions = data.sessions.filter((session, index) => {
    const otherSessionLikeThis = data.sessions.findIndex(
      (otherSession) =>
        otherSession.start === session.start &&
        otherSession.end === session.end &&
        otherSession.zh.title === session.zh.title &&
        otherSession.zh.description === session.zh.description,
    );

    console.log("session name", session.zh.title);
    console.log("session time", session.start, session.end);
    console.log(otherSessionLikeThis, index);

    return otherSessionLikeThis === index;
  });

  const allTimes = sessions
    .map((session) => [session.start, session.end])
    .flat(1)
    .filter((item) => item !== null)
    .map((item) => new Date(item))
    .sort()
    .map((item) => parseTime(item))
    .filter((item, index, self) => self.indexOf(item) === index);

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
      sessions: sessions
        .filter(
          (session) =>
            session.start !== null &&
            session.end !== null &&
            session.id !== null,
        )
        .filter((session) => timeRender(session.start) === timeText),
    };
  });

  return (
    <div className="text-white">
      <div className="mt-4">
        {times
          .filter(
            (time, index) =>
              time.sessions.length > 0 ||
              index === 0 ||
              index === times.length - 1,
          )
          .map((time) => (
            <div key={time.text}>
              <div className="flex h-[1px] w-full items-center text-white drop-shadow-2xl">
                <p>{time.text}</p>
                <hr className="ml-3 w-full text-white/30" />
              </div>
              <div className="ml-16 flex flex-col">
                {time.sessions
                  .filter(
                    (session) =>
                      session.start !== null &&
                      session.end !== null &&
                      session.id !== null,
                  )
                  .map((session) => (
                    <SessionCard key={session.id} session={session} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
