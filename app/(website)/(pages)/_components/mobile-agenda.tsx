"use client";
import data from "@/app/(website)/_data/agenda.json";
import SessionCard from "@/app/(website)/(pages)/_components/SessionCard";
import timeRender from "@/app/(website)/_utils/time-render";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileAgenda() {
  const [room, setRoom] = useState("R0");
  return (
    <div className="text-white">
      {/* Tab Switch Start */}
      <motion.div className="flex shadow-2xl shadow-indigo-500/40" layout>
        {data.rooms.map((rooms, index) => (
          <motion.button
            key={index}
            className="relative basis-1/5 text-center"
            onClick={() => setRoom(rooms.id)}
            layout
          >
            {room === rooms.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                layoutId="underline"
              />
            )}
            {rooms.id}
          </motion.button>
        ))}
      </motion.div>
      {/* Tab Switch End */}
      {/* Tab Content Start*/}
      <AnimatePresence mode="wait">
        <motion.div
          key={room}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          {data.sessions
            .filter(
              (session) =>
                session.room === room || session.broadcast?.includes(room),
            )
            .map((session) => (
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
                <div className="my-4 ml-16">
                  {session.broadcast ? (
                    <SessionCard key={session.id} session={session} />
                  ) : (
                    session.room === room && (
                      <SessionCard key={session.id} session={session} />
                    )
                  )}
                </div>
              </>
            ))}
        </motion.div>
      </AnimatePresence>
      {/* Tab Content End*/}
    </div>
  );
}
