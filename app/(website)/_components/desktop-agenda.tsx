import React from "react";
import data from "@/app/(website)/_data/agenda.json";
import SessionCard from "@/app/(website)/_components/SessionCard";

// 新的議程表json改變，請改變times的length來調整議程表的高度
const times = [
  { id: "t0830", length: "0.5fr" },
  { id: "t0900", length: "0.5fr" },
  { id: "t0910", length: "1fr" },
  { id: "t1000", length: "0.5fr" },
  { id: "t1005", length: "1fr" },
  { id: "t1055", length: "0.5fr" },
  { id: "t1105", length: "1fr" },
  { id: "t1145", length: "0.01fr" },
  { id: "t1200", length: "1fr" },
  { id: "t1230", length: "0.01fr" },
  { id: "t1245", length: "1fr" },
  { id: "t1325", length: "0.5fr" },
  { id: "t1335", length: "1fr" },
  { id: "t1415", length: "0.5fr" },
  { id: "t1425", length: "1fr" },
  { id: "t1435", length: "0.5fr" },
  { id: "t1445", length: "1fr" },
  { id: "t1525", length: "0.5fr" },
  { id: "t1605", length: "1fr" },
  { id: "t1645", length: "0.5fr" },
  { id: "t1655", length: "1fr" },
  { id: "t1745", length: "0.5fr" },
  { id: "t1755", length: "0.5fr" },
];

const styleToText = (time: string) => {
  // input time format: "t0830"
  // output style format: "08:30"
  return time.replace("t", "").replace(/(\d{2})(\d{2})/, "$1:$2");
};

export default function DesktopAgenda() {
  const gridTemplateColumns = data.rooms.reduce((acc: string, room) => {
    return `${acc} [${room.id}] 1fr`;
  }, "[start] 1fr");
  // start R0 R1 R2 R3 S

  const gridTemplateRows = times.reduce((acc: string, time) => {
    return `${acc} [timeLine-${time.id}] 1px [${time.id}] ${time.length}`;
  }, "[start] 30px [divider] 1px");
  // start divider timeLine-0830 0830 timeLine-1000 1000 ...

  return (
    <div
      className="grid gap-4 text-white"
      style={{
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
      }}
    >
      {/* row1 empty R2 R0 R1 R3 S  */}
      <div></div>
      {data.rooms.map((rooms, index) => (
        <div key={index} className="text-center text-[24px] font-bold">
          {rooms.id}
        </div>
      ))}
      {/* row1 empty R2 R0 R1 R3 S  */}

      {/*  divider */}
      <div
        className="h-[1px] w-full bg-white"
        style={{
          gridColumn: "start / end",
          gridRow: "divider / t0830",
        }}
      />
      {/* full divider */}

      {/* all timeLine */}
      {times.map((time) => (
        <div
          key={time.id}
          className="mt-2 flex h-full w-full items-center text-white"
          style={{
            gridColumn: "start / end",
            gridRow: `timeLine-${time.id} / ${time.id}`,
          }}
        >
          <p>{styleToText(time.id)}</p>
          <hr className="ml-6 w-full bg-white" />
        </div>
      ))}
      {/* all timeLine */}
      {/* all sessions */}
      {data.sessions.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  );
}
