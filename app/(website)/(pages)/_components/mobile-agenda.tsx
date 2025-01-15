"use client";
import data from "@/app/(website)/_data/agenda.json";
import SessionCard from "@/app/(website)/(pages)/_components/SessionCard";
import timeRender from "@/app/(website)/_utils/time-render";
import { useState } from "react";

export default function MobileAgenda() {
  const [room, setRoom] = useState("R0");
  return (
    <div className="text-white">
      {/* TODO: Tab switch */}
      <div className="flex shadow-2xl shadow-indigo-500/40">
        {data.rooms.map((rooms, index) => (
          <button
            key={index}
            className={`basis-1/5 text-center ${room === rooms.id ? "border-b-4" : ""}`}
            onClick={() => setRoom(rooms.id)}
          >
            {rooms.id}
          </button>
        ))}
      </div>
      {/* TODO: Content */}
      <div className="mt-4">
        {data.sessions.map((session) => (
          <>
            <div
              className="flex h-[1px] w-full items-center text-white drop-shadow-2xl"
              style={{
                gridColumn: "start / end",
                gridRow: `timeLine-${session.start} / ${session.end}`,
              }}
            >
              <p>
                {session.broadcast || session.room === room
                  ? timeRender(session.start)
                  : ""}
              </p>
              <div className="ml-6 h-[1px] w-full bg-white"></div>
            </div>
            {session.broadcast ? (
              <SessionCard key={session.id} session={session} />
            ) : (
              session.room === room && (
                <SessionCard key={session.id} session={session} />
              )
            )}
          </>
        ))}
      </div>
    </div>
  );
}
